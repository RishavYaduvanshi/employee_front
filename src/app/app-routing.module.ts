import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepComponent } from './dep/dep.component';
import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';
import { ProjComponent } from './proj/proj.component';
import { SignInComponent } from './signIn/signIn.component';
import { SignUpComponent } from './signUp/signUp.component';
import { Forgot_passComponent } from './forgot_pass/forgot_pass.component';
import { Email_forgotComponent } from './email_forgot/email_forgot.component';
import { Email_verifiedComponent } from './email_verified/email_verified.component';

const routes: Routes = [
  {
    path : 'emp',
    component : EmpComponent
  },
  {
    path : 'dep',
    component : DepComponent
  },
  {
    path : 'proj',
    component : ProjComponent
  },
  {
    path : 'forgot/email',
    component : Email_forgotComponent
  },
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'email_verified',
    component : Email_verifiedComponent
  },
  {
    path : 'signin',
    component : SignInComponent
  },
  {
    path : 'signup',
    component : SignUpComponent
  },
  {
    path : '**',
    component : Forgot_passComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
