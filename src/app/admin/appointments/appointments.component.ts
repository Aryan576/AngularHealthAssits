import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listAllAppointment:{}
  
  constructor(public service:AppointmentService) { }

  ngOnInit(): void {

    this.service.listAllAppointment().then(res =>{
      this.listAllAppointment = res.data;
      console.log(this.listAllAppointment);
      
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

}
