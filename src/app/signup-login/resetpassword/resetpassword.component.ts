import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SignupLoginService } from '../signup-login.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

    reset:FormGroup
  constructor(private service:SignupLoginService,private rut:Router,private messageService: MessageService ) { }

  ngOnInit() {

    this.reset=new FormGroup({
      email:new FormControl('',Validators.required)
    })
  }
  send()
  {

      this.service.resetpassword(this.reset.value.email).subscribe(res=>{

          if(res.status==200){     
            this.messageService.add({severity:'success', summary:'Reset Link Send', detail:res.msg});
            this.rut.navigate(['/otp'])
          }else{
            this.messageService.add({severity:'error', summary:'Error', detail:res.msg});
          }
      })
   
  }

}
