import { Component, OnInit, ElementRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users_count!: Number;
  total_deposit!: string;
  total_withdrawal!: string;
  kyc_count!: Number;
  constructor(private elementRef: ElementRef, private db: AngularFirestore) { }

  ngOnInit(): void {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

    this.db.collection('/users', ref => ref.where('isDeleted', '==', '0')).valueChanges()
      .subscribe(result => {
        this.users_count = result.length;
      })

      this.db.collection('/transactions', ref => ref.where('transition_type', '==', 'deposit'))
      .valueChanges()
      .subscribe((result: any[]) => {
        const total = result.reduce((acc, curr) => acc + curr.amount_net, 0);
        const roundedTotal = Math.round(total);
        const formattedTotal = '$' + roundedTotal.toLocaleString();
       
        this.total_deposit = formattedTotal;
      });
    

    this.db.collection('/transactions', ref => ref.where('transition_type', '==', 'withdrawal')).valueChanges()
    .subscribe((result: any[]) => {
        const total = result.reduce((acc, curr) => acc + curr.amount_net, 0);
        const roundedTotal = Math.round(total);
        const formattedTotal = '$' + roundedTotal.toLocaleString();
        this.total_withdrawal = formattedTotal;
      })

    this.db.collection('/users', ref => ref.where('isDeleted', '==', '0').where('kycStatus', '==', '0')).valueChanges()
    .subscribe((result: any[]) => {
        this.kyc_count = result.length;
      })

  }

}