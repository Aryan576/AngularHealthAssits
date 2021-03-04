import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    islog:boolean=false;
  constructor(private userData:UserserviceService,private rut:Router) { }

  ngOnInit(){
    if(this.userData.user != null && this.userData.user.email.length !=0)
    {
      this.islog=true;
    }
    else{
      this.islog=false;
    }
  }

  logout(){
    this.userData.user=null
    this.islog=false;
    this.rut.navigateByUrl('')
  }

}
