import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathologyRoutingModule } from './pathology-routing.module';
import { PathologyhomeComponent } from './pathologyhome/pathologyhome.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdduserpathologyComponent } from './adduserpathology/adduserpathology.component';


@NgModule({
  declarations: [PathologyhomeComponent, AdduserpathologyComponent],
  imports: [
    CommonModule,

    DataTablesModule,
    FormsModule, ReactiveFormsModule,
    ProgressBarModule,
    RatingModule,
  
  
    MDBBootstrapModule.forRoot(),
    PathologyRoutingModule
  ]
})
export class PathologyModule { }
