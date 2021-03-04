import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupLoginComponent } from './signup-login/signup-login/signup-login.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup-login', component: SignupLoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
