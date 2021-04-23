import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DoctorService } from 'src/app/service/doctor.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  todayAppointmentCount:number = 0
  waitForAcceptCount:number = 0
  acceptCount:number = 0
  rescheduleCount:number = 0
  doneCount:number = 0
  userId = 0
  listDoctClinic:number =0
  constructor(private userdataservice:UserserviceService,private service:DoctorService,private route: ActivatedRoute,  private rut: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.userId = this.userdataservice.user.userid

this.service.todayAppointment(this.userId).then(res => {
this.todayAppointmentCount = res.data.length
})

this.service.waitForAcceptAppointment(this.userId).then(res => {
this.waitForAcceptCount = res.data.length
})

this.service.acceptAppointment(this.userId).then(res => {
this.acceptCount = res.data.length
})

this.service.rescheduleAppointment(this.userId).then(res => {
this.rescheduleCount = res.data.length
})

this.service.doneAppointment(this.userId).then(res => {
this.doneCount = res.data.length
})

this.service.listDoctClinic(this.userId).then(res => {
this.listDoctClinic = res.data.length
})
    this.service.todayAppointment(this.userId).then(res => {
      this.todayAppointmentCount = res.data.length
    })

    this.service.waitForAcceptAppointment(this.userId).then(res => {
      this.waitForAcceptCount = res.data.length
    })

    this.service.acceptAppointment(this.userId).then(res => {
      this.acceptCount = res.data.length
    })

    this.service.rescheduleAppointment(this.userId).then(res => {
      this.rescheduleCount = res.data.length
    })

    this.service.doneAppointment(this.userId).then(res => {
      this.doneCount = res.data.length
    })

    this.service.listDoctClinic(this.userId).then(res => {
      this.listDoctClinic = res.data.length
    })
  }

}
