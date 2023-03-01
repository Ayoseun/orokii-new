import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../customers.service';
import FacePhi from 'src/app/models/facePhi.model';
@Component({
  selector: 'app-pages-contact',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  public id!: any;
  facePhiCollection!:FacePhi;
  constructor(private route: ActivatedRoute,private userService: UserService,) { }


 async ngOnInit() {
 this.facePhiCollection;
    this.id = this.route.snapshot.paramMap.get('id');
this.viewUser();
   
  }



  viewUser = async () => {
    //get user id snapshot from user data collection
    const snapshot2 = await this.userService.getfacePhiDataCollection(this.id);
    //sort through the data by user id
    snapshot2.forEach((doc:any) => {
      this.facePhiCollection = doc.data();
   console.log(this.facePhiCollection)
    });
  }
}
