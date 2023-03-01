import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { HttpClient } from "@angular/common/http";

import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/auth.models';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first, map } from 'rxjs/operators';

import { formatDate } from '@angular/common';
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { AuthService } from 'src/app/authUtils';
import { LoginLogs } from 'src/app/models/login-logs.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdo!: string;
  admin!:String;
  http!: HttpClient;
  authService!: AuthService;
  constructor(@Inject(DOCUMENT) private document: Document,) { 
  
  }


  ngOnInit() {
    
    this.getBal()
   
  }



  getBal() {

    const url = environment.horizonUrl + '/accounts/' + environment.assetInfo.distributor;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.usdo = parseFloat(data['balances'][0]['balance']).toFixed(2))
      .catch(error => console.error(error));
      this.admin= this.authService.getData()
      console.log(this.admin)
  }
  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
