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
  editFamiltMemberForm:FormGroup
  listcities:{}
  id=0
  getpatientUserId:Patient
  getFamilyMemberId:Patient
  phoneno:String
  cityid:number
  pincode:number
  listuserPatient:{}
  patientid =0
  constructor(private route:ActivatedRoute,public patientService : PatientService,private rut: Router,public userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {

    this.userdataservice.user.userid;

    this.patientService.getpatientByid(this.userdataservice.user.userid).then(res => {

      this.getpatientUserId = res.data;
      
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


    this.patientid = this.route.snapshot.params.patientid
    console.log(this.patientid);
    
    this.patientService.getFamilyMember(this.patientid).then(res => {

      this.getFamilyMemberId= res.data;

      this.patientForm = new FormGroup({
        patientid:new FormControl(this.getFamilyMemberId.patientid,Validators.required),
        patientname:new FormControl(this.getFamilyMemberId.patientname,Validators.required),
        gender:new FormControl(this.getFamilyMemberId.gender,Validators.required),
        phoneno: new FormControl(this.getFamilyMemberId.phoneno,Validators.required),
        email:new FormControl(this.getFamilyMemberId.email,Validators.required),
        age:new FormControl(this.getFamilyMemberId.age,Validators.required),
        userid:new FormControl(this.userdataservice.user.userid,Validators.required),
      })

    })

    this.patientService.listUserPatient(this.userdataservice.user.userid).then(res => {
      this.listuserPatient = res.data;
      console.log("List User Patient ==>  ",res.data);
      
    })


    this.dtOptions = {
      pagingType: 'full_numbers'
    };
   
  }

  submit()
  {

    if(this.patientid){
       this.patientService.updateFamilyMember(this.patientForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      })
      console.log("edit profile",this.patientForm.value); 
      
    }else{
      this.patientService.addFamilyMember(this.patientForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
          
        })
        console.log(this.patientForm.value);
        
    }
   
 
  }

}
