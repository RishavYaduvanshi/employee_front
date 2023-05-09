import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyserService {

  constructor(private http : HttpClient) { }
  url = 'https://mocki.io/v1/5ec525a6-5606-4d79-b405-61c06401fe55'
  url1 = 'https://localhost:7052/Department/GetAllDepartments'
  url2 = 'https://localhost:7052/Employee/GetAllEmployee'
  url3 = 'https://localhost:7052/Employee/AddEmployee'
  url4 = 'https://localhost:7052/Employee/DeleteEmployee/'
  url5 = 'https://localhost:7052/Employee/UpdateEmployee/'
  url6 = 'https://localhost:7052/Department/AddDepartment'
  url7 = 'https://localhost:7052/Department/DeleteDepartment/'
  url8 = 'https://localhost:7052/Department/UpdateDepartment/'
  url9 = 'https://localhost:7052/Project/GetAllProjects'
  url10 = 'https://localhost:7052/Project/AddProject'
  url11 = 'https://localhost:7052/Project/UpdateProject/'
  url12 = 'https://localhost:7052/Project/DeleteProject/'
  url13 = 'https://localhost:7052/SignUpRole/SignIn'
  url14 = 'https://localhost:7052/SignUpRole/AddSignUp'

  //forgot

  url15 = 'https://localhost:7052/SignUpRole/ForgotPassword'
  url16 = 'https://localhost:7052/SignUpRole/ResetPassword'

  // emailverfied

  url17 = 'https://localhost:7052/SignUpRole/EmailVerfiedDone'


  
 
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
    return this.http.get(this.url1,{headers:this.getHeaders()});
  }
  getUser(){
    return this.http.get(this.url2, {headers:this.getHeaders()});
  }
  addUser(data : any){
    return this.http.post(this.url3,data, {headers:this.getHeaders()})
  }
  deleteUser(id:number){
    return this.http.delete(this.url4+id,{headers:this.getHeaders()});
  }
  updateUser(id : number, data : any){
    return this.http.put(this.url5+id,data,{headers:this.getHeaders()});
  }

  addDep(data:any){
    return this.http.post(this.url6,data,{headers:this.getHeaders()})
  }
  deleteDep(id:number){
    return this.http.delete(this.url7+id,{headers:this.getHeaders()});
  }
  updateDep(id : number, data : any){
    return this.http.put(this.url8+id,data,{headers:this.getHeaders()});
  }

  getProjList(){
    return this.http.get(this.url9,{headers:this.getHeaders()});
  }

  addProj(data:any){
    return this.http.post(this.url10,data,{headers:this.getHeaders()})
  }
  updateProj(id : number, data : any){
    return this.http.put(this.url11+id,data,{headers:this.getHeaders()});
  }
  deleteProj(id:number){
    return this.http.delete(this.url12+id,{headers:this.getHeaders()});
  }

  login(data:any){
    return this.http.post(this.url13,data)
  }

  signup(data:any){
    return this.http.post(this.url14,data)
  }
  checkEmail(email: string){
    const params = { email };
    return this.http.get(this.url15, { params });
  }


  resetPassword(Email:string, NewPassword:string){
    return this.http.get(this.url16,{params: {Email,NewPassword}});
  }
  emailVerfiedDone(Email:string){
    return this.http.get(this.url17,{params: {Email}});
  }
}
