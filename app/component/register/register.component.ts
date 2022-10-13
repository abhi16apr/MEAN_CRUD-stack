import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/signup';
import { LoginService } from 'src/app/login.service';
import { Administrator } from 'src/app/model/administrator';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerList : Administrator[] = []; // for users
  newRegister = new Administrator('', '', '', '', '', ''); // for dummy values
  // username: string = "";
  // password: string = "";

  constructor(private _httpService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
  let addNewRegister = new Administrator(this.newRegister.userId, this.newRegister.password, this.newRegister.userId, this.newRegister.activeForm, this.newRegister.role, this.newRegister.status="requested") 
  let time = "" + this.newRegister.activeForm;
  let newtime=time.split("T")[0]
  this.newRegister.activeForm= newtime;

  this._httpService.addRegister(addNewRegister).subscribe();
  this.router.navigate(['/login'])
  }

}
