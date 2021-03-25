import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

  islog:boolean=false;
  constructor(public userData:UserserviceService,private rut:Router) { }

  ngOnInit(): void {
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
    this.rut.navigate(['/signup-login'])
  }

}
