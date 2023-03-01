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

  showTransactionType!:boolean;
  filteredTransactions: Transaction[] = [];
  constructor(private transactionService: TransactionService, private route: ActivatedRoute) {
       // initialize the filteredTransactions array with all transactions
       this.filteredTransactions = this.transactions;
       this. filterTransactions('All');
   }

  ngOnInit(): void {
    this._fetchData();
   this. filterTransactions('All');
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


  filterTransactions(type: string) {
    if (type === 'All') {
      this.filteredTransactions = this.transactions;
    } else {
  
      // filter transactions based on their type
      this.filteredTransactions = this.transactions.filter(transaction => transaction.transition_type === type);
    }
  }
}
