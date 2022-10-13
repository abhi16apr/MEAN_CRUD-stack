import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/signup';
import { LoginService } from 'src/app/login.service';
import { Administrator } from 'src/app/model/administrator';
import { HomeComponent } from '../home/home.component';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false;
  userId: string = '';
  password: string = '';
  useradmin1: Administrator[] = [];


  constructor(private _httpService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this._httpService.getLogin().subscribe(data => {
      // this.useradmin1 = data;
      
      this.useradmin1 = data;
      console.log(JSON.stringify(this.useradmin1))
      if (this.useradmin1.find(x => x.userId == this.userId) != undefined) { 
        let user = this.useradmin1.find(x => x.userId == this.userId);
        
    
        console.log(JSON.stringify(user))
        console.log(this.userId + '   -----    ' + this.password)
        if (user?.password != this.password) {
          alert('Trying to log in with [$(user?.username}]. Password is incorrect')
          this.userId = ''
          this.password = ''
        } else {
          console.log('TRYING TO LOG IN!!!!! HERE !!!')
          this.isLoggedIn = true;

          if(user!.role == "Lead"){
            this.isLoggedIn=true;
            this.router.navigate(['/home/dashboard']);
            }
    
            if(user!.role == 'Admin') {
              this.isLoggedIn=true;
              this.router.navigate(['/home/admin']);
            }
    
        }

        // if (user?.name != "admin") {
        //   this.router.navigate(['/admin']);
        // }

      }
    }

    
 )};
}



