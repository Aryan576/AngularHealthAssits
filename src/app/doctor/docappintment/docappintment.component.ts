import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  constructor(public appointmentService : AppointmentService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit(): void {

    this.appointmentService.listAppointmentUser(this.userdataservice.user.userid).then(res => {
      this.listAppointment = res.data;
      console.log(res.data);
      
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
      };
  }

  accept(value){
    console.log(value);
    this.Appointment={"appointmentid":value,"statusid":this.statusid=1}
    this.appointmentService.acceptrejectappointment(this.Appointment).subscribe(res => {
          console.log("stauts accpet",res);
          this.rut.navigateByUrl('./docappointment')
    })
    
  }
  reject(value){
    console.log(value);
    this.Appointment={"appointmentid":value,"statusid":this.statusid=2}
    this.appointmentService.acceptrejectappointment(this.Appointment).subscribe(res => {
          console.log("stauts accpet",res);
          this.rut.navigateByUrl('./docappointment')
    })
  }

}
