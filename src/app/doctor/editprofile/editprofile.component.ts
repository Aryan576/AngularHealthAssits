import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Doctor } from 'src/app/interface/doctor';
import { ProfileserviceService } from 'src/app/service/profileservice.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  editProfileForm:FormGroup
  DoctorProfileData : Doctor
  constructor(public profileService : ProfileserviceService,private route:ActivatedRoute ,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit(): void {
  
    this.profileService.getDoctorProfileById(this.userdataservice.user.userid).then(res => {
      this.DoctorProfileData = res.data;
      console.log(res.data);

      this.editProfileForm = new FormGroup({
        userid:new FormControl(this.userdataservice.user.userid,Validators.required),
        firstname:new FormControl(this.DoctorProfileData.firstname,Validators.required),
        lastname:new FormControl(this.DoctorProfileData.lastname,Validators.required),
        email:new FormControl(this.DoctorProfileData.email,Validators.required),
        password:new FormControl(this.DoctorProfileData.password,Validators.required),
        gender:new FormControl(this.DoctorProfileData.gender,Validators.required),
        specialization:new FormControl(this.DoctorProfileData.specialization,Validators.required),
        qualification:new FormControl(this.DoctorProfileData.qualification,Validators.required),
        experience:new FormControl(this.DoctorProfileData.experience,Validators.required),
        about:new FormControl(this.DoctorProfileData.about,Validators.required)
      })
      
    })
  
  
  }



  submit(){
    if(this.userdataservice.user.userid){
      this.profileService.updateDoctor(this.editProfileForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Profile Updated...!!"});

      })
      this.rut.navigateByUrl('/doctorHome/doctorprofile')
    }

  }

}
