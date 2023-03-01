import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesBlankComponent } from './pages-blank/pages-blank.component';
import { PagesContactComponent } from './pages-contact/pages-contact.component';
import { PagesError404Component } from './pages-error404/pages-error404.component';
import { PagesFaqComponent } from './pages-faq/pages-faq.component';
import { CustomerDetailsComponent } from './customers/customer-details/details-customer.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { TransactionComponent } from './transactions/transaction.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'customer-details', data: {id: 'some value'}, component: CustomerDetailsComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'customers', component: CustomersComponent},
  { path: 'contact', component: PagesContactComponent },
  { path: 'error404', component: PagesError404Component },
  { path: 'faq', component: PagesFaqComponent },

  { path: 'user-profile', component: UsersProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
