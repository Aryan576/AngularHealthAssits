import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-pharmacyhome',
  templateUrl: './pharmacyhome.component.html',
  styleUrls: ['./pharmacyhome.component.scss']
})
export class PharmacyhomeComponent implements OnInit {

  islog:boolean=false;
  constructor(public userData:UserserviceService,private rut:Router) { }

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
