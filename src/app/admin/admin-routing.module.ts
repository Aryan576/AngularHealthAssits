import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AddclinicComponent } from './manage-clinic/addclinic/addclinic.component';
import { ManageClinicComponent } from './manage-clinic/manage-clinic.component';
import { AdddietComponent } from './manage-diet/adddiet/adddiet.component';
import { ManageDietComponent } from './manage-diet/manage-diet.component';
import { AdddoctorComponent } from './manage-doctor/adddoctor/adddoctor.component';
import { DoctorprofileComponent } from './manage-doctor/doctorprofile/doctorprofile.component';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { AddpathologyComponent } from './manage-pathology/addpathology/addpathology.component';
import { ManagePathologyComponent } from './manage-pathology/manage-pathology.component';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';
import { AddpharmacyComponent } from './manage-pharmacy/addpharmacy/addpharmacy.component';
import { ManagePharmacyComponent } from './manage-pharmacy/manage-pharmacy.component';


const routes: Routes = [
    {path:'admin',component:AdminComponent,children:[  
    {path:'doctor',component:ManageDoctorComponent},
      {path:'patient',component:ManagePatientComponent},
      {path:'pharmacy',component:ManagePharmacyComponent},
      {path:'pathology',component:ManagePathologyComponent},
      {path:'clinic',component:ManageClinicComponent},
      {path:'diet',component:ManageDietComponent},
      {path:'addpathology',component:AddpathologyComponent},
      {path:'addpharmacy',component:AddpharmacyComponent},
      {path:'adddoctor',component:AdddoctorComponent},
      {path:'addclinic',component:AddclinicComponent},
      {path:'adddiet',component:AdddietComponent},
      {path:'editpathology/:pathologyid',component:AddpathologyComponent},
      {path:'editpharmacy/:pharmacyid',component:AddpharmacyComponent},
      {path:'editdoctor/:userid',component:AdddoctorComponent},
      {path:'editclinic/:clinicid',component:AddclinicComponent},
      {path:'doctorprofile/:userid',component:DoctorprofileComponent},
      {path:'editclinic/:clinicid',component:AddclinicComponent},
      {path:'editdiet/:dietid',component:AdddietComponent}
    ],canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
