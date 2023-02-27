
<?php
//To handle cases where the rows in Sheet 1 and Sheet 2 are not aligned or in a different order,
//we need to add some logic to match the rows based on the employee PIN number (or another unique identifier) instead of the row number.
//in this sample, i try to  match the rows based on the employee PIN number:
//require_once 'PHPExcel/PHPExcel.php';
use PhpOffice\PhpSpreadsheet\IOFactory;
use GuzzleHttp\Client;

$fileVariable1 = $data['employerSheet'];
$fileVariable2 = $data['custodianSheet'];

// Set the PM Headers for making the API calls
$pmheaders = [
    'Authorization' => 'Bearer ' . getenv('API_TOKEN'),
    'Accept' => 'application/json',
];
$apiHost = getenv('API_HOST');
$client = new Client(['verify' => false]);

// Get the request id for getting the files
$requestId = $data['_request']['id'];

// First API call to get the Employer sheet
// Get the uploaded excel sheets in the Request
$res = $client->request('GET', $apiHost . "/requests/$requestId/files", [
    'headers' => $pmheaders,
]);

$files1 = json_decode($res->getBody(), true);
$file1 = null;

if (isset($files1['data']) && count($files1['data']) > 0) {
    foreach ($files1['data'] as $fileData) {
        if ($fileVariable1 == $fileData['custom_properties']['data_id']) {
            $file1 = $fileData;
            break;
        }
    }
}

// Download file
if ($file1 === null) {
    $fileProcessStatus1 = 'File field not found. Check Process Configuration';
} else {
    $fileId1 = $file1['id'];
    $filePath1 = '/tmp/' . $file1['file_name'];

    $res = $client->request('GET', $apiHost . "/files/$fileId1/contents", [
        'headers' => $pmheaders,
        'sink' => $filePath1,
    ]);

    $fileProcessStatus1 = 'File Downloaded';

    // Read Excel File Sheet 1 (EmployerSheet)
    $sheet1 = IOFactory::load($filePath1);

    // Get the data in column B of the first Excel file
    $sheetData1 = $sheet1->getActiveSheet()->toArray(null, false, false, true);
    $columnB1 = array_column($data1, 'B');
}

// Second API call to get the Custodian sheet
// Get the uploaded excel sheets in the Request
$res = $client->request('GET', $apiHost . "/requests/$requestId/files", [
    'headers' => $pmheaders,
]);

$files2 = json_decode($res->getBody(), true);
$file2 = null;

if (isset($files2['data']) && count($files2['data']) > 0) {
    foreach ($files2['data'] as $fileData) {
        if ($fileVariable2 == $fileData['custom_properties']['data_id']) {
            $file2 = $fileData;
            break;
        }
    }
}

// Download file
if ($file2 === null) {
    $fileProcessStatus2 = 'File field not found. Check Process Configuration';
} else {
    $fileId2 = $file2['id'];
    $filePath2 = '/tmp/' . $file2['file_name'];

    $res = $client->request('GET', $apiHost . "/files/$fileId2/contents", [
        'headers' => $pmheaders,
        'sink' => $filePath2,
    ]);

    $fileProcessStatus2 = 'File Downloaded';

    //Read Excel File Sheet 2 (CustodianSheet)
    $sheet2 = IOFactory::load($filePath2);

    // Get the data in column B of the second Excel file
    $sheetData2 = $sheet2->getActiveSheet()->toArray(null, false, false, true);
    $columnB2 = array_column($data2, 'B');
}

// Get the data in column B of the second Excel file
$sheetData2 = $excel2->getActiveSheet()->toArray(null, false, false, true);
$columnB2 = array_column($data2, 'B');

// Compare the data in column B
$result = array_diff($columnB1, $columnB2);

// Output the differences, if any
if (count($result) > 0) {
    echo "The following values are in file1.xlsx but not in file2.xlsx:\n";
    echo implode("\n", $result);
} else {
    echo 'The data in column B of file1.xlsx and file2.xlsx are the same.';
}

