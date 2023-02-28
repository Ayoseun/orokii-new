import { Component, OnInit } from '@angular/core';
import { UserService } from './customers.service';
import { map } from 'rxjs';
import { User } from 'src/app/models/auth.models';

@Component({
  selector: 'app-pages-contact',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

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
      console.log(data);
      // Assume that you have received the data from API and stored it in a variable named 'data'
      this.users = data;
    });

    //console.log(tableData);
    //this.tableData = tableData;
  }
}
