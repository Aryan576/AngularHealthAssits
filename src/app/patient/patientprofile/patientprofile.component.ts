import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Patient } from 'src/app/interface/patient';
import { PatientService } from 'src/app/service/patient.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.scss']
})
export class PatientprofileComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  patientForm:FormGroup
  listcities:{}
  id=0
  getpatientUserId:Patient
  phoneno:String
  cityid:number
  pincode:number
  listuserPatint:{}
  constructor(private route:ActivatedRoute,public patientService : PatientService,private rut: Router,public userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {
    this.userdataservice.user.userid;

    this.patientService.getpatientByid(this.userdataservice.user.userid).then(res => {
      console.log("patient profile = ",res.data);
      this.getpatientUserId = res.data;

      console.log(this.getpatientUserId.patientid);
      console.log(this.getpatientUserId.phoneno);
      console.log(this.getpatientUserId.pincode);
      console.log(this.getpatientUserId.email);
      console.log(this.getpatientUserId.cityname);
      
      this.cityid = this.getpatientUserId.cityid
   
       
      this.patientForm = new FormGroup({
        patientname:new FormControl('',Validators.required),
        gender:new FormControl('',Validators.required),
        phoneno: new FormControl('',Validators.required),
        email:new FormControl('',Validators.required),
        age:new FormControl('',Validators.required),
        cityid:new FormControl(this.cityid,Validators.required),
        pincode:new FormControl(this.getpatientUserId.pincode,Validators.required),
        userid:new FormControl(this.userdataservice.user.userid,Validators.required),
        
      })
    })

    this.patientService.listUserPatient(this.userdataservice.user.userid).then(res => {
      this.listuserPatint = res.data;
      console.log("List User Patient ==>  ",res.data);
      
    })





    this.dtOptions = {

     
      pagingType: 'full_numbers'
    };
  }

  submit()
  {
   this.patientService.addPatientProfile(this.patientForm.value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: "Patient Child Added Successfully...!!" });
        
      })
 
  }

}
