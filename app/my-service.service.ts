import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { AdminComponent } from './component/admin/admin.component';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { Administrator } from './model/administrator';
import { User } from './model/user';
import { Signup } from './model/signup';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');


  constructor(private httpClient: HttpClient) { }

  getUserAdmin(): Observable<any> {
    let getUrl: string = "http://localhost:3001/useradmin1/list";
    return this.httpClient.get(getUrl, {headers: this.headers});
    
  }
  
  getUserAdminID(id: number): Observable<any> {
    let getUserAdminUrl: string = "http://localhost:3001/useradmin1/get/" + id;
    return this.httpClient.get(getUserAdminUrl, {headers: this.headers});
  }

  deleteUserAdminID(id: number) {
    let getUserAdmin: string = "http://localhost:3001/useradmin1/delete/:id" + id;
    return this.httpClient.post(getUserAdmin, {headers: this.headers});
  }

   addNewUserAdmin(useradmin1: Administrator) {
     let getUserAdmin: string = "/useradmin1/update/:id" + useradmin1.userId;
     return this.httpClient.post(getUserAdmin, useradmin1, {headers: this.headers});
   }

   editAdminRole(useradmin1: Administrator) {
    let getUserAdmin: string = "http://localhost:3001/useradmin1/update/" + useradmin1.userId;
    return this.httpClient.put(getUserAdmin, useradmin1, {headers: this.headers})
   }



  //  addSignup (signup: Signup){
  //   let getUserAdmin:string ="http://localhost:3001/useradmin1/create";
  //   return this.httpClient.post(getUserAdmin,signup,{headers: this.headers});
  // }




}