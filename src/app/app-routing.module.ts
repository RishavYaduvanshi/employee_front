import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepComponent } from './dep/dep.component';
import { EmpComponent } from './emp/emp.component';
import { HomeComponent } from './home/home.component';

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
    path : '',
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
