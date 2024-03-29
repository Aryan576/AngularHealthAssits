import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Appointment } from 'src/app/interface/appointment';
import { PrescriptionService } from 'src/app/service/prescription.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.scss']
})
export class ViewprescriptionComponent implements OnInit {

  isLog: boolean = false
  id = 0
  patientData: Appointment;
  listPatientDisease:{}
  listDietUser:{}
  listPrescriptionMedicine:{}
  pastAppointmentList:{}
  constructor(private route : ActivatedRoute,private viewPrescriptionService : PrescriptionService,private rut: Router,private userdataservice: UserserviceService,private messageService : MessageService) { }

  ngOnInit() {
   
    this.id = this.route.snapshot.params.appointmentid;

    this.viewPrescriptionService.getPatientDetails(this.id).then(res => {
      this.patientData = res.data;
       console.log(res.data);
      
      this.viewPrescriptionService.listDietUser(this.patientData.patientid).then(res => {
        this.listDietUser = res.data;
      })
      this.viewPrescriptionService.pastAppointmentList(this.patientData.patientid).then(res => {
        this.pastAppointmentList = res.data;
      })
      this.viewPrescriptionService.listAppointmentDisease(this.patientData.patientid).then(res => {
        this.listPatientDisease = res.data;
      })

    })

  

    this.viewPrescriptionService.listPrescriptionMedicine(this.id).then(res => {
      this.listPrescriptionMedicine = res.data;
      console.log(this.listPrescriptionMedicine);
      
    })

  }
  
  

}
