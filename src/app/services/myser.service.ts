import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
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


  
 
  getList(){
    return [
      {id : 1,name : 'Rishav', email :'rishav@gmail.com',did : 2},
      {id : 2,name : 'Gaurav', email :'gaurav@gmail.com',did : 1},
      {id : 3,name : 'Muskan', email :'muskan@gmail.com',did : 3}
    ]
  }
  getDepartment(){
    return this.http.get(this.url1,{
    });
  }
  getUser(){
    return this.http.get(this.url2, {
    })
  }
  addUser(data : any){
    return this.http.post(this.url3,data, {
    })
  }
  deleteUser(id:number){
    return this.http.delete(this.url4+id);
  }
  updateUser(id : number, data : any){
    return this.http.put(this.url5+id,data);
  }

  addDep(data:any){
    return this.http.post(this.url6,data,{
      
    })
  }
  deleteDep(id:number){
    return this.http.delete(this.url7+id);
  }
  updateDep(id : number, data : any){
    return this.http.put(this.url8+id,data);
  }

  getProjList(){
    return this.http.get(this.url9,{
    });
  }

  addProj(data:any){
    return this.http.post(this.url10,data,{
    })
  }
  updateProj(id : number, data : any){
    return this.http.put(this.url11+id,data);
  }
}
