import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages-login/pages-login.component';
import { RegisterComponent } from './pages-register/pages-register.component';



const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
