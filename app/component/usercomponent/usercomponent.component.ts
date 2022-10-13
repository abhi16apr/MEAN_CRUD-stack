import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {
// userAdmin: user[] = []; // user values 
// admin = new Admin(0, '', '', '', ''); //dummy data

  constructor(private _httpService: MyServiceService) { }

  ngOnInit(): void {
  }

}
