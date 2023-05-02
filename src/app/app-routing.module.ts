import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepComponent } from './dep/dep.component';
import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';
import { ProjComponent } from './proj/proj.component';
import { SignInComponent } from './signIn/signIn.component';
import { SignUpComponent } from './signUp/signUp.component';

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
    path : '',
    component : HomeComponent
  }
  ,
  {
    path : 'signin',
    component : SignInComponent
  },
  {
    path : 'signup',
    component : SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
