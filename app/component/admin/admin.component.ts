import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
import { Administrator } from 'src/app/model/administrator';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  useradmin1:Administrator [] = []; // admin values
  admin = new Administrator('', '', '', '', '', '');
  router: any;
  

  constructor(private _httpService: MyServiceService) { 

  }

  ngOnInit(): void {
    this.getUserAdmin();
  }

  getUserAdmin() {
    this._httpService.getUserAdmin()

          .subscribe((res:any[])=>{
            console.log(res);
            // this.get.debug(res)
            this.useradmin1 = res;
          });
  }

  // deleteUserAdmin(userId:string) {
  //   this._httpService.deleteUserAdminID(userId).subscribe()
  //   this.getUserAdmin();
  // }
  
  editUserAdmin(userid:string) {
    this._httpService.getUserAdmin().subscribe(data => {
      this.admin.userId = data[0].userId;
      this.admin.name = data[0].name;
      this.admin.activeForm= data[0].activeForm;
      this.admin.status = data[0].status;
      this.admin.role = data[0].role; 
    })

  }

      editAdminRole(us:string) {
      let adminToEdit =this.useradmin1.find(x=>x.userId==us);
      console.log(adminToEdit);
      adminToEdit!.status = "active";
     // adminToEdit = new Administrator(this.admin.userId, this.admin.name, this.admin.role, this.admin.activeForm, this.admin.status = "Active", this.admin.password)
      console.log(adminToEdit);
      this._httpService.editAdminRole(adminToEdit!).subscribe();
      this.getUserAdmin();
     }

  
  

   addUserAdmin(){
     let adminToAdd = new Administrator(this.admin.userId, this.admin.name, this.admin.role, this.admin.activeForm, this.admin.status, this.admin.password)
     this._httpService.addNewUserAdmin(adminToAdd).subscribe();
     this.getUserAdmin();


   }

}
