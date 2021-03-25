import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SignupLoginService } from 'src/app/service/signup-login.service';

import { UserserviceService } from 'src/app/service/userservice.service';


@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.scss']
})
export class SignupLoginComponent implements OnInit {

  signupForm: FormGroup;
  loginForm: FormGroup;
  constructor(private service:SignupLoginService,private rut:Router,private messageService: MessageService ,private userData:UserserviceService) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      });


      
      this.signupForm = new FormGroup({
        
          
          firstname: new FormControl('',Validators.required),
          lastname: new FormControl('',Validators.required),
          email:new FormControl('',Validators.required),
          password: new FormControl('',Validators.required),
          gender: new FormControl('',Validators.required),
          roleid: new FormControl(4,Validators.required),
         
      });

  }

  login()
  {
   
    if (this.loginForm.valid) {
      
      this.service.login(this.loginForm.value).subscribe(res=>{
        if(res.status==200)
        {
            this.userData.user=res.data
              if(res.data.roleid ==1)
              {
                this.messageService.add({severity:'success', summary:'Login', detail:'Doctor LogedIn'});
              
                this.rut.navigate(['/doctorHome']);

              }else if(res.data.roleid ==2)
              {
                this.messageService.add({severity:'success', summary:'Login', detail:'Admin LogedIn'});
                
                this.rut.navigate(['/admin']);
              }
              else if(res.data.roleid ==3)
              {
                this.messageService.add({severity:'success', summary:'Login', detail:'Pharmacy LogedIn'});
                this.rut.navigate(['../pharmacyHome'])
               
              }
              else if(res.data.roleid ==4)
              {
                this.messageService.add({severity:'success', summary:'Login', detail:'Patient LogedIn'});
               
                console.log(this.userData);
                this.rut.navigate(['../patientHome'])
                
              }
             
              else{
                this.messageService.add({severity:'success', summary:'Login', detail:'Pathology LogedIn'});
                this.rut.navigate(['../pathologyhome'])
               
              }
          
    
        }
        else{
          this.messageService.add({severity:'error', summary:'Login', detail:res.msg});
        }
        
    });
 }
    else{
      this.messageService.add({severity:'error', summary:'Login', detail:'Please Enter Credentials'});
    }

}

signup()
{
  
  if(this.signupForm.valid)
   {
     
   this.service.signup(this.signupForm.value).subscribe(res=>{
     console.log(res);
     if(res.status ==200)
     {
      this.messageService.add({severity:'success', summary:'Signup', detail:'Signup Successfuly'});
     }
     else{
      this.messageService.add({severity:'warn', summary: 'Warn', detail: res.msg});
     }
     

   });

  }else{
    this.messageService.add({severity:'info', summary: 'Alert', detail: 'Please Fill All Form Detail'});
  }
       
}

}
