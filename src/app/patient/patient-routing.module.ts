import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomePatientComponent } from './home-patient/home-patient.component';
import { PathologyComponent } from './pathology/pathology.component';
import { PatientprofileComponent } from './patientprofile/patientprofile.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { SingledoctorComponent } from './singledoctor/singledoctor.component';
import { SinglepathologyComponent } from './singlepathology/singlepathology.component';
import { SinglepharmacyComponent } from './singlepharmacy/singlepharmacy.component';


const routes: Routes = [

  {path:'patientHome',component:HomePatientComponent,children:[

    {path:'patientprofile',component:PatientprofileComponent},
  {path:'doctor',component:DoctorsComponent},
  {path:'singledoctor/:userid',component:SingledoctorComponent,children:[
    

  ]},
  {path:'pharmacy',component:PharmacyComponent},
  {path:'singlepharmacy/:pharmacyid',component:SinglepharmacyComponent},
  {path:'pathology',component:PathologyComponent},
  {path:'singlepathology/:pathologyid',component:SinglepathologyComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'singledocAppointment/:userid',component:DoctorappointmentComponent}
  
  
  ],canActivate:[AuthGuard]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
