import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PasswordModule} from 'primeng/password';
import { MessageService,ConfirmationService } from 'primeng/api';
import {SignupLoginModule} from './signup-login/signup-login.module';
import { AdminModule } from './admin/admin.module';
import { DataTablesModule } from "angular-datatables";

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { PatientModule } from './patient/patient.module';
import {RatingModule} from 'primeng/rating';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { PathologyModule } from './pathology/pathology.module';
import { DoctorModule } from './doctor/doctor.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    PasswordModule,
    SignupLoginModule,
    DataTablesModule ,
    ConfirmDialogModule,
    RatingModule,
    MDBBootstrapModule.forRoot(),
    AdminModule,
    PatientModule,
    PharmacyModule,
    PathologyModule,
    DoctorModule,

    AppRoutingModule
  ],
  providers: [MessageService,ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
