import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginLogsService } from '../auth-utils/loginLogs.service';
import { first, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Manage2faService } from '../auth-utils/manage2fa.service';
import { formatDate } from '@angular/common';
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { AuthService } from 'src/app/authUtils';
import { LoginLogs } from 'src/app/models/login-logs.model';
@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class LoginComponent implements OnInit {
  year: number = new Date().getFullYear();
  loginForm!: FormGroup;
  submitted = false;
  error = '';
  returnUrl!: string;
  ipAddress!: '';
  constructor(
    public authService: AuthService, private formBuilder: FormBuilder,
  ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  login = () => {
    console.log(this.f)
    //Check that the user is a permitted account
    if (!environment.loginAllow.includes(this.f['email'].value)) {
      this.error = 'There is no user record corresponding to this identifier.';
      return;
    }

this.authService.SignIn(this.f['email'].value,this.f['password'].value);


  }
}