import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  doctors:{};
  doctorCount:number = 0
  pathologyCount:number = 0
  pharmacyCount:number = 0
  patientCount:number = 0
  clinicCount:number = 0
  kycDoctor:number = 0
  activeDoctor:number = 0
  pendingDoctor:number = 0
  pauseDoctor:number = 0
  countDoctorClinic:number = 0
  listDoctClinic:{}
  doneAppointmentForAllDoctor:number=0
  constructor(private doctorService:DashboardService) { }

  ngOnInit(): void {

    this.doctorService.listdoctor().then(res => {
      this.doctorCount = res.data.length; 
    })

    this.doctorService.listpathology().then(res => {
      this.pathologyCount = res.data.length;
    })

    this.doctorService.listpharmacy().then(res => {
      this.pharmacyCount = res.data.length;
    })

    this.doctorService.listpatient().then(res => {
      this.patientCount = res.data.length;
    })

    this.doctorService.listClinic().then(res =>{
      this.clinicCount = res.data.length;
    })


    this.doctorService.kycDoctor().then(res => {
      this.kycDoctor = res.data.length;
    })

    
    this.doctorService.activeDoctor().then(res => {
      this.activeDoctor = res.data.length;
    })

    
    this.doctorService.pendingDoctor().then(res => {
      this.pendingDoctor = res.data.length;
    })

    
    this.doctorService.pauseDoctor().then(res => {
      this.pauseDoctor = res.data.length;
    })

    this.doctorService.doneAppointmentForAllDoctor().then(res => {
      this.doneAppointmentForAllDoctor = res.data.length;
    })

  }

}
