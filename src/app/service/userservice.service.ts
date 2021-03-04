import { Injectable } from '@angular/core';
import { SignupLogin } from '../interface/signup-login';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  user:SignupLogin={userid:0,email:"",password:"",firstname:"",lastname:"",gender:"",otp:"",roleid:0,status:0,statusReason:0};
  constructor() { }
}
