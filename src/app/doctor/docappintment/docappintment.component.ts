import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Appointment } from 'src/app/interface/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-docappintment',
  templateUrl: './docappintment.component.html',
  styleUrls: ['./docappintment.component.scss']
})
export class DocappintmentComponent implements OnInit {
  listAppointment:{}
  dtOptions: DataTables.Settings = {};
  statusid=0
  Appointment:{}
  appointmentid =0
appointmentData:Appointment
RescheduleForm :FormGroup
RejectForm:FormGroup
  constructor(public appointmentService : AppointmentService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.appointmentid = this.route.snapshot.params.appointmentid
    console.log("Appointment ID => ",this.appointmentid);

    this.appointmentService.listAppointmentUser(this.userdataservice.user.userid).then(res => {
      this.listAppointment = res.data;
      console.log(res.data);
      
    })
   
    
    this.appointmentService.getAppointmentByid(this.appointmentid).then(res => {
    this.appointmentData = res.data;
    this.RescheduleForm = new FormGroup({
    appointmentid:new FormControl(this.appointmentData.appointmentid,Validators.required),
    email:new FormControl(this.appointmentData.email,Validators.required),
    statusreason:new FormControl('',Validators.required)
    })

    this.RejectForm = new FormGroup({
      appointmentid:new FormControl(this.appointmentData.appointmentid,Validators.required),
      email:new FormControl(this.appointmentData.email,Validators.required),
      statusreason:new FormControl('',Validators.required)
      })
  });
    

    this.dtOptions = {
      pagingType: 'full_numbers'
      };
  }

 
 
 
  accept(value){
    console.log(value);
    this.Appointment={"appointmentid":value,"statusid":this.statusid=1}
    this.appointmentService.acceptrejectappointment(this.Appointment).subscribe(res => {
          console.log("stauts accpet",res);
         
    })
    
  }
 
  reject(value){
    console.log(value);
    this.Appointment={"appointmentid":value,"statusid":this.statusid=2}
    this.appointmentService.acceptrejectappointment(this.Appointment).subscribe(res => {
          console.log("stauts accpet",res);
         
    })
  }

  submit(){

    
    
    this.appointmentService.updateRescheduleAppointment(this.RescheduleForm.value).subscribe(res => {
    this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
    })
   
    
    this.appointmentService.rescheduleReason(this.RescheduleForm.value).subscribe(res => {
    
    if(res.status == 200){
    this.messageService.add({severity:'success', summary: 'Success', detail: res.msg});
    
    }else{
    this.messageService.add({severity:'error', summary: 'Error', detail: res.msg});
    }
    })
    
    
    
    
    
    
    }


    Rejectsubmit()
    {
      this.appointmentService.updateRejectAppointment(this.RejectForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
        })
       
        
        this.appointmentService.rejectReason(this.RejectForm.value).subscribe(res => {
        
        if(res.status == 200){
        this.messageService.add({severity:'success', summary: 'Success', detail: res.msg});
        
        }else{
        this.messageService.add({severity:'error', summary: 'Error', detail: res.msg});
        }
        })
    }

}
