import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { HttpClient } from "@angular/common/http";
import { AuthService } from 'src/app/authUtils';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/auth.models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdo: Number = 0;
  constructor(@Inject(DOCUMENT) private document: Document,) { }
  http!: HttpClient;
  authService!:AuthService;
  user!: User;
  ngOnInit() {
    const url = environment.horizonUrl + '/accounts/' + environment.assetInfo.distributor;
    this.http.get(url).subscribe((res: any) => {
      this.usdo = res['balances'][0]['balance'];
    })


  }
  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
