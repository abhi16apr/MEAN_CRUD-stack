import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Signup } from './model/signup';
import { Administrator } from './model/administrator';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = "http://localhost:3001/useradmin1";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');

  constructor(private httpClient: HttpClient) { }

  addRegister(registerup:Administrator){
    return this.httpClient.post(this.apiURL + '/create/', registerup, {headers: this.headers});
  }

  getLogin(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/list', {headers: this.headers});
  }

}
