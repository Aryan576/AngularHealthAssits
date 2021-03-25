import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-pathologyhome',
  templateUrl: './pathologyhome.component.html',
  styleUrls: ['./pathologyhome.component.scss']
})
export class PathologyhomeComponent implements OnInit {
  islog:boolean=false;
  listUserPathology:{}
  listcities:{}
  pathologyForm:FormGroup
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


  delete(value){

  }
  submit(){

  }

}
