import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

import { EmpComponent } from './emp/emp.component';
import { DepComponent } from './dep/dep.component';
import { HomeComponent } from './home/home.component';
import { EmpDialogComponent } from './emp/EmpDialog/EmpDialog.component';


import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DelDilogComponent } from './emp/delDilog/delDilog.component';
import { DepDilogComponent } from './dep/DepDilog/DepDilog.component';
import { DepDelDilogComponent } from './dep/DepDelDilog/DepDelDilog.component';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { ProjComponent } from './proj/proj.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { ProjDilogComponent } from './proj/projDilog/projDilog.component';
import { ProjDelComponent } from './proj/projDel/projDel.component';
import { SignUpComponent } from './signUp/signUp.component';
import { SignInComponent } from './signIn/signIn.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [	
    AppComponent,
    EmpComponent,
    DepComponent,
    HomeComponent,
    EmpDialogComponent,
    DelDilogComponent,
    DepDilogComponent,
    DepDelDilogComponent,
    ProjComponent,
    ProjDilogComponent,
    ProjDelComponent,
    SignUpComponent,
    SignInComponent,
    NavbarComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSortModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    NgToastModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
