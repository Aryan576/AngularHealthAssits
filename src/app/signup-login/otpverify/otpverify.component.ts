import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SignupLoginService } from '../signup-login.service';


@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.scss']
})
export class OtpverifyComponent implements OnInit {

    otpForm:FormGroup
  constructor(private service:SignupLoginService,private rut:Router,private messageService: MessageService) { }

  ngOnInit(){
    this.otpForm=new FormGroup({
      otp:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }

  submit(){
      
    if(this.otpForm.value != null){
    
      this.service.setnewpassword(this.otpForm.value).subscribe(res=>{
          if(res.status!=201)
          {
            this.rut.navigate([''])
            this.messageService.add({severity:'success', summary:'Password Updated', detail:res.msg});
          }


      });
  }
  else{
    this.messageService.add({severity:'error', summary:'Error', detail:'Something is missing'});
  }
}

}
