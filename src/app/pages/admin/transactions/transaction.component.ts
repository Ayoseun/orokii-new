import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import Transaction from "../../../models/transaction.model"
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-pages-transactions',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];

  
  constructor(private transactionService: TransactionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._fetchData();

  }
  _fetchData() {

    this.transactionService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      //this.tableData = data;
      console.log(data);
            // Assume that you have received the data from API and stored it in a variable named 'data'
  this.transactions = data;
    });

    //console.log(tableData);
    //this.tableData = tableData;
  }
}
