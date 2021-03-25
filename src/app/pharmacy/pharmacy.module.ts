import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyhomeComponent } from './pharmacyhome/pharmacyhome.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [PharmacyhomeComponent],
  imports: [
    CommonModule,
    
    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    ProgressBarModule,
    RatingModule,
  
  
    MDBBootstrapModule.forRoot(),
    PharmacyRoutingModule
  ]
})
export class PharmacyModule { }
