import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppointmentService } from 'src/app/service/appointment.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.scss']
})
export class ViewappointmentComponent implements OnInit {
  listAppointment:{}
  userid = 0
  dtOptions: DataTables.Settings = {};
  constructor(private route : ActivatedRoute,public viewAppointmentService : AppointmentService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit(): void {
    this.userid =  this.userdataservice.user.userid
    this.viewAppointmentService.viewPatientAppointment(this.userid).then(res => {
      this.listAppointment = res.data;
      console.log(res.data);
    })
  }

}
