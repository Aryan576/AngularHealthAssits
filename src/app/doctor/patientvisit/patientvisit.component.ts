import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Appointment } from 'src/app/interface/appointment';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-patientvisit',
  templateUrl: './patientvisit.component.html',
  styleUrls: ['./patientvisit.component.scss']
})
export class PatientvisitComponent implements OnInit {
  prescriptionData: Appointment;
  id=0
  listDisease:{}
  listAppointmentDisease:{}
diseaseForm:FormGroup

  dtOptions: DataTables.Settings = {};
  constructor(private route: ActivatedRoute, private Service: PrescriptionService, private rut: Router, private messageService: MessageService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.appointmentid;
    console.log(this.id);

    this.Service.getAppointmentByid(this.id).then(res => {
      this.prescriptionData = res.data;
      console.log(res.data);

      this.diseaseForm = new FormGroup({
        appointmentid:new FormControl(this.id,Validators.required),
        patientprofileid:new FormControl(this.prescriptionData.patientid,Validators.required),
        diseaseid:new FormControl('',Validators.required)
        })
  })


  this.Service.listAppointmentDisease(this.id).then(res => {
    this.listAppointmentDisease = res.data;
  })
  this.Service.listDisease().then(res => {
    this.listDisease = res.data;
  })


  this.dtOptions = {
    pagingType: 'full_numbers'
    };

}


diseaseSubmit(){
 /*  this.Service.addAppointmentDisease(this.diseaseForm.value).subscribe(res => {
  this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
  }) */

  console.log(this.diseaseForm.value);
  
  
  }
}
