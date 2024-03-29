import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientsComponent } from './patients/patients.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DoctorsComponent } from './doctors/doctors.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { HomePatientComponent } from './home-patient/home-patient.component';
import { SingledoctorComponent } from './singledoctor/singledoctor.component';
import { RatingModule } from 'primeng/rating';
import { SinglepharmacyComponent } from './singlepharmacy/singlepharmacy.component';
import { SinglepathologyComponent } from './singlepathology/singlepathology.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { ButtonModule } from 'primeng/button';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { ViewprescriptionComponent } from './viewprescription/viewprescription.component';




@NgModule({
  declarations: [PatientsComponent, DoctorsComponent, PharmacyComponent, PathologyComponent, PatientprofileComponent, HomePatientComponent, SingledoctorComponent, SinglepharmacyComponent, SinglepathologyComponent, AppointmentComponent, DoctorappointmentComponent, ViewappointmentComponent, ViewprescriptionComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    ProgressBarModule,
    RatingModule,
    ButtonModule,
  
  
    MDBBootstrapModule.forRoot(),
    PatientRoutingModule
  ]
})
export class PatientModule { }
