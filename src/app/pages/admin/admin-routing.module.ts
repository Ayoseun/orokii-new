import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesBlankComponent } from './pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages-contact/pages-contact.component';
import { PagesError404Component } from './pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages-faq/pages-faq.component';

import { UsersProfileComponent } from './users-profile/users-profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},

  { path: 'admin/blank', component: PagesBlankComponent },
  { path: 'admin/contact', component: PagesContactComponent },
  { path: 'admin/error404', component: PagesError404Component },
  { path: 'admin/faq', component: PagesFaqComponent },

  { path: 'admin/user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
