export default class Customer {
  id?: string;
  firstName!: string;
  lastName!: string;
  middleName!: string;
  address1!: string;
  address2!: string;
  city!: string;
  country!: any;
  dob!: string;
  email!: string;
  phone?: any;
  state!: string;
  zip!: string;
  idVerified!:boolean;
  gender!: string;
  status!: string;
  kycStatus!: string;
  stellar_address!: any;
  maximumDeposit!: string;
  maximumWithdrawal!: string;
  maximumPayment!: string;
  reason!: string;
}