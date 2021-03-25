import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PatientService } from 'src/app/service/patient.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-manage-patient',
  templateUrl: './manage-patient.component.html',
  styleUrls: ['./manage-patient.component.scss']
})
export class ManagePatientComponent implements OnInit {
  patientlist: {};
  dtOptions: DataTables.Settings = {};
  constructor(private rut : Router,public userdataservice: UserserviceService,private patientservice: PatientService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.patientservice.Profilelist().then(res => {
      

      this.patientlist = res.data;
      console.log(res.data);

    })
  }

}
