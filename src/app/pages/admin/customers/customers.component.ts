import { Component, OnInit } from '@angular/core';
import { UserService } from './customers.service';
import { map } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import Customer from 'src/app/models/user.model';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-pages-contact',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  users: Customer[] = [];
  http!: HttpClient;
  usdo: Number = 0;
  privateCollection: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this._fetchData();
    this.viewUser('8L8tLQKtlJfj7zf4zjXoTNLQFxS2');
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
      console.log(data)
      // Assume that you have received the data from API and stored it in a variable named 'data'
      this.users = data;
    });

    //console.log(tableData);
    //this.tableData = tableData;
  }
  viewUser = async (id: any) => {
    const snapshot2 = await this.userService.getfacePhiDataCollection(id);

    snapshot2.forEach((doc: any) => {
      this.privateCollection = doc.data();
      console.log(this.privateCollection);
    });
  }



}
