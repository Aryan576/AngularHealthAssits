import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Doctor } from 'src/app/interface/doctor';
import { ProfileserviceService } from 'src/app/service/profileservice.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.scss']
})
export class DoctorprofileComponent implements OnInit {
  DoctorProfileData : Doctor
  constructor(public profileService : ProfileserviceService ,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit(): void {
    this.profileService.getDoctorProfileById(this.userdataservice.user.userid).then(res => {
      this.DoctorProfileData = res.data;
      console.log(res.data);
      
    })
  }

}
