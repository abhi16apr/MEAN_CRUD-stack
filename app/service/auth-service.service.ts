import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Signup } from '../model/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiURL : string = "http://localhost:3001/useradmin1";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');


  constructor(private http:HttpClient) { }
  addSignUp(login: Signup):Observable<any>{
    return this.http.post(this.apiURL + '/create', login,{headers: this.headers});
  }

  getUserLogin() : Observable<any> {
    return this.http.get(this.apiURL,{headers: this.headers});
  }
}
