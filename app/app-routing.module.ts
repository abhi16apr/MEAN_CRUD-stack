import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AdminComponent } from './component/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddComponent } from './component/add/add.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [

   { path: '', component: LoginComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'login', component: LoginComponent},
   { path: 'home', component: HomeComponent, 

     children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admin', component: AdminComponent}
     ]},

    { path: 'dashboard', component: DashboardComponent}, 
    { path: 'add', component: AddComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
