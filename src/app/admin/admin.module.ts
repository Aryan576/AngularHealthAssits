import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';
import { ManagePharmacyComponent } from './manage-pharmacy/manage-pharmacy.component';
import { ManagePathologyComponent } from './manage-pathology/manage-pathology.component';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdddoctorComponent } from './manage-doctor/adddoctor/adddoctor.component';
import { AddpharmacyComponent } from './manage-pharmacy/addpharmacy/addpharmacy.component';
import { AddpathologyComponent } from './manage-pathology/addpathology/addpathology.component';
import { DataTablesModule } from "angular-datatables";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProgressBarModule} from 'primeng/progressbar';
import { ManageClinicComponent } from './manage-clinic/manage-clinic.component';
import { AddclinicComponent } from './manage-clinic/addclinic/addclinic.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DoctorprofileComponent } from './manage-doctor/doctorprofile/doctorprofile.component';
import { ManageDietComponent } from './manage-diet/manage-diet.component';
import { AdddietComponent } from './manage-diet/adddiet/adddiet.component';
import { ManageMedicineComponent } from './manage-medicine/manage-medicine.component';
import { ManageDiseaseComponent } from './manage-disease/manage-disease.component';
import { ManageCityComponent } from './manage-city/manage-city.component';
import { ManageStateComponent } from './manage-state/manage-state.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AddusersComponent } from './manage-users/addusers/addusers.component';
import { AddpatientComponent } from './manage-patient/addpatient/addpatient.component';






@NgModule({
  declarations: [AdminComponent, ManagePatientComponent, ManagePharmacyComponent, ManagePathologyComponent, ManageDoctorComponent, LayoutHeaderComponent, LayoutSidebarComponent, AdddoctorComponent, AddpharmacyComponent, AddpathologyComponent, ManageClinicComponent, AddclinicComponent, DoctorprofileComponent, ManageDietComponent, AdddietComponent, ManageMedicineComponent, ManageDiseaseComponent, ManageCityComponent, ManageStateComponent, ManageUsersComponent, AddusersComponent, AddpatientComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    ProgressBarModule,
    MDBBootstrapModule.forRoot(),
    AdminRoutingModule,ConfirmDialogModule
  ],providers: [MessageService,ConfirmationService ]
})
export class AdminModule { }
