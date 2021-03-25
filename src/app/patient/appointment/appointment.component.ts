import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/service/appointment.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  listClinic:{}
  listDoctor:{}
  currentDate = new Date();
  appointmentForm:FormGroup;
  today: number = Date.now();
  myDate = new Date();
  listuserPatint:{}
  a:string=""
  constructor(private service :AppointmentService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { 
   
  }

  ngOnInit(): void {

    this.service.listUserPatient(this.userdataservice.user.userid).then(res => {
      this.listuserPatint = res.data;
    })

    this.appointmentForm= new FormGroup({
      //patienid:new FormControl(this.userdataservice.user.userId,Validators.required),
      doctorid:new FormControl('',Validators.required),
      clinicid:new FormControl('',Validators.required),
      createdate:new FormControl(this.a,Validators.required),
      appointMentDate:new FormControl('',Validators.required),
      appointMentTime:new FormControl('',Validators.required),
      reference:new FormControl('',Validators.required),
      comment:new FormControl('',Validators.required),
      complain:new FormControl('',Validators.required),
      patientid:new FormControl('',Validators.required)
        })



        this.service.listClinic().then(res => {
          this.listClinic = res.data;
          console.log("ListClinic......",res.data);
          
        })
        this.service.listdoctors().then(res => {
          this.listDoctor = res.data;
        })
  }

  submit()
  {
    this.service.addAppointment(this.appointmentForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: "Appointment Booked Successfully...!!"});
    })
     console.log(this.appointmentForm.value);
    
    
  }

  getClinicsByDoctId(){
    var docProfileId = this.appointmentForm.value.doctorid 
    console.log(this.appointmentForm.value.doctorid);
    //api - boot -> clinics 
    this.service.listDoctClinic(docProfileId).then(res => {
      this.listClinic = res.data;
      console.log("fghjkfdgshjklgdhjkl",res.data);
      
    })
    console.log(" lets get all clinic ",docProfileId);
    
  }

}
