import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserService {
  URL_BASE : string
  constructor(private http : HttpClient) { 
    this.URL_BASE = "https://rishav.d3m0n1k.engineer"
    // this.URL_BASE = "https://localhost:7052"
  }
  url = 'https://mocki.io/v1/5ec525a6-5606-4d79-b405-61c06401fe55'
  url1 = '/Department/GetAllDepartments'
  url2 = '/Employee/GetAllEmployee'
  url3 = '/Employee/AddEmployee'
  url4 = '/Employee/DeleteEmployee/'
  url5 = '/Employee/UpdateEmployee/'
  url6 = '/Department/AddDepartment'
  url7 = '/Department/DeleteDepartment/'
  url8 = '/Department/UpdateDepartment/'
  url9 = '/Project/GetAllProjects'
  url10 = '/Project/AddProject'
  url11 = '/Project/UpdateProject/'
  url12 = '/Project/DeleteProject/'
  url13 = '/SignUpRole/SignIn'
  url14 = '/SignUpRole/AddSignUp'

  //forgot

  url15 = '/SignUpRole/ForgotPassword'
  url16 = '/SignUpRole/ResetPassword'

  // emailverfied

  url17 = '/SignUpRole/EmailVerfiedDone'


  
 
  getList(){
    return [
      {id : 1,name : 'Rishav', email :'rishav@gmail.com',did : 2},
      {id : 2,name : 'Gaurav', email :'gaurav@gmail.com',did : 1},
      {id : 3,name : 'Muskan', email :'muskan@gmail.com',did : 3}
    ]
  }



  getHeaders(){
    var token : string = localStorage.getItem('token') || 'test';
    console.log(token);
    var headers= new HttpHeaders({
      'Authorization': `basic ${token}`
    });
    console.log(headers);
    return headers;
  }
  
  getDepartment(){
    return this.http.get(this.URL_BASE+this.url1,{headers:this.getHeaders()});
  }
  getUser(){
    return this.http.get(this.URL_BASE+this.url2, {headers:this.getHeaders()});
  }
  addUser(data : any){
    return this.http.post(this.URL_BASE+this.url3,data, {headers:this.getHeaders()})
  }
  deleteUser(id:number){
    return this.http.delete(this.URL_BASE+this.url4+id,{headers:this.getHeaders()});
  }
  updateUser(id : number, data : any){
    return this.http.put(this.URL_BASE+this.url5+id,data,{headers:this.getHeaders()});
  }

  addDep(data:any){
    return this.http.post(this.URL_BASE+this.url6,data,{headers:this.getHeaders()})
  }
  deleteDep(id:number){
    return this.http.delete(this.URL_BASE+this.url7+id,{headers:this.getHeaders()});
  }
  updateDep(id : number, data : any){
    return this.http.put(this.URL_BASE+this.url8+id,data,{headers:this.getHeaders()});
  }

  getProjList(){
    return this.http.get(this.URL_BASE+this.url9,{headers:this.getHeaders()});
  }

  addProj(data:any){
    return this.http.post(this.URL_BASE+this.url10,data,{headers:this.getHeaders()})
  }
  updateProj(id : number, data : any){
    return this.http.put(this.URL_BASE+this.url11+id,data,{headers:this.getHeaders()});
  }
  deleteProj(id:number){
    return this.http.delete(this.URL_BASE+this.url12+id,{headers:this.getHeaders()});
  }

  login(data:any){
    return this.http.post(this.URL_BASE+this.url13,data)
  }

  signup(data:any){
    return this.http.post(this.URL_BASE+this.url14,data)
  }
  checkEmail(email: string){
    const params = { email };
    return this.http.get(this.URL_BASE+this.url15, { params });
  }


  resetPassword(Email:string, NewPassword:string){
    return this.http.get(this.URL_BASE+this.url16,{params: {Email,NewPassword}});
  }
  emailVerfiedDone(Email:string){
    return this.http.get(this.URL_BASE+this.url17,{params: {Email}});
  }
}
