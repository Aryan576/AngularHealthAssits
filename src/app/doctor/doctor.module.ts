import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocappintmentComponent } from './docappintment/docappintment.component';
import { MedicineComponent } from './medicine/medicine.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { DietComponent } from './diet/diet.component';
import { PatientvisitComponent } from './patientvisit/patientvisit.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AdddietComponent } from './diet/adddiet/adddiet.component';


@NgModule({
  declarations: [LayoutHeaderComponent, LayoutSidebarComponent, DoctorComponent, DashboardComponent, DocappintmentComponent, MedicineComponent, DiseasesComponent, DietComponent, PatientvisitComponent, AdddietComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    ProgressBarModule,
    RatingModule,
    ConfirmDialogModule,
  
  
    MDBBootstrapModule.forRoot(),
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
