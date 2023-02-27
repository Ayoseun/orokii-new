import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesBlankComponent } from './pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages-contact/pages-contact.component';
import { PagesError404Component } from './pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages-faq/pages-faq.component';

import { UsersProfileComponent } from './users-profile/users-profile.component';

@NgModule({
  declarations: [

    PagesBlankComponent,
    PagesContactComponent,
    PagesError404Component,
    PagesFaqComponent,
     UsersProfileComponent,
      DashboardComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,



  ]
})
export class AdminModule { }
