import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pages-contact',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  public id!: string;
  constructor(private route: ActivatedRoute,) { }


 async ngOnInit() {
 
    //this.id = this.route.snapshot.paramMap.get('id');
  }

}
