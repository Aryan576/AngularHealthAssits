import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdddietComponent } from './diet/adddiet/adddiet.component';
import { DietComponent } from './diet/diet.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { DocappintmentComponent } from './docappintment/docappintment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MedicineComponent } from './medicine/medicine.component';
import { PatientvisitComponent } from './patientvisit/patientvisit.component';


const routes: Routes = [

  {path:'doctorHome',component:DoctorComponent,children:[
    {path:'docappointment',component:DocappintmentComponent},
    {path:'diet',component:DietComponent},
    {path:'medicine',component:MedicineComponent},
    {path:'diesease',component:DiseasesComponent},
    {path:'patienproceed/:appointmentid',component:PatientvisitComponent},
    {path:'adddiet',component:AdddietComponent},
    {path:'dashborad',component:DashboardComponent},
    {path:'rescheduleform/:appointmentid',component:DocappintmentComponent},
    {path:'rejectform/:appointmentid',component:DocappintmentComponent},
    {path:'doctorprofile',component:DoctorprofileComponent},
    {path:'editprofile/:userid',component:EditprofileComponent}

  ],canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
