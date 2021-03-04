import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupLoginRoutingModule } from './signup-login-routing.module';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';



@NgModule({
  declarations: [SignupLoginComponent, ResetpasswordComponent, OtpverifyComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    PasswordModule,
    MDBBootstrapModule.forRoot(),
    SignupLoginRoutingModule
  ]
})
export class SignupLoginModule { }
