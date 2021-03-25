import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PatientService } from 'src/app/service/patient.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.scss']
})
export class AddpatientComponent implements OnInit {
  listcities:{}
  patientForm:FormGroup;
  constructor(private rut : Router,public userdataservice: UserserviceService,private patientservice: PatientService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.patientservice.listcities().then(res => {
      this.listcities = res.data;
      console.log(this.listcities);
      
    })

    this.patientForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      
      phoneno: new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required),
      cityid:new FormControl('',Validators.required),
      roleid: new FormControl(4,Validators.required)
    })
  }

  submit(){
    this.patientservice.addpatient(this.patientForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      this.rut.navigateByUrl('patient')
    })
  }

}
