import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class LoginComponent implements OnInit {
  // set the currenr year
  year: number = new Date().getFullYear();
  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
  }

  login=  () => {
    this.router.navigate(['/admin']);
}
}
