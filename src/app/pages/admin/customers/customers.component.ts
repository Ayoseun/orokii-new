import { Component, OnInit } from '@angular/core';
import { UserService } from './customers.service';
import { map } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import Customer from 'src/app/models/user.model';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pages-contact',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  users: Customer[] = [];
  
  http!: HttpClient;
  usdo: Number = 0;
  selectedUser: any;
  privateCollection: any;
  constructor(private userService: UserService,  public router: Router) { 
    this._fetchData();
  }

  ngOnInit(): void {
    this._fetchData();
  }
  _fetchData() {

    this.userService.getAll().snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map((c: any) =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      //this.tableData = data;
 
      // Assume that you have received the data from API and stored it in a variable named 'data'
      this.users = data;
    });

    //console.log(tableData);
    //this.tableData = tableData;
  }




  showInfo(index: number) {
    if (this.users.length > 0) {
      this.selectedUser = this.users[index];
      console.log(this.selectedUser.id)
      this.router.navigate(['/admin/customer-details',{ id: this.selectedUser.id}]);
    }
  }

}
