import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';


const routes: Routes = [

  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'otp',component:OtpverifyComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupLoginRoutingModule { }
