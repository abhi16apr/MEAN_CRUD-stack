import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { Administrator } from 'src/app/model/administrator';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _httpService: LoginService, private router: Router) { }

  ngOnInit(): void {
 
  
  }

  registerList : Administrator[] = []; // for users
  newRegister = new Administrator('', '', '', '', '', ''); // for dummy values


  addUser() {
    let addNewUser = new Administrator(this.newRegister.userId, this.newRegister.password = "1234", this.newRegister.name, this.newRegister.activeForm = "2022-10-12", this.newRegister.role, this.newRegister.status="active") 
    this._httpService.addRegister(addNewUser).subscribe();
    this.router.navigate(['/login'])
  }



}
