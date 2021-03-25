import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { from } from 'rxjs';
import { Doctor } from 'src/app/interface/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.scss']
})
export class AdddoctorComponent implements OnInit {
doctorform:FormGroup
id=0;
doctordata:Doctor;

  constructor(private route:ActivatedRoute,private rut:Router,private messageService: MessageService,public doct:DoctorService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params.userid;
    console.log(this.id);
    this.doct.getdoctorByid(this.id).then(res=>{
      this.doctordata=res.data
      console.log(this.doctordata);
      
      
      this.doctorform=new FormGroup({
        userid:new FormControl(this.doctordata.userid,Validators.required),
        firstname: new FormControl(this.doctordata.firstname,Validators.required),
        lastname: new FormControl(this.doctordata.lastname,Validators.required),
        email:new FormControl(this.doctordata.email,Validators.required),
        password: new FormControl(this.doctordata.password,Validators.required),
        gender: new FormControl(this.doctordata.gender,Validators.required),
        roleid: new FormControl(1,Validators.required),
        qualification:new FormControl(this.doctordata.qualification,Validators.required),
        specialization:new FormControl(this.doctordata.specialization,Validators.required),
        experience:new FormControl(this.doctordata.experience,Validators.required),
        status:new FormControl(this.doctordata.status,Validators.required),
        about:new FormControl(this.doctordata.about,Validators.required),
        registerationno:new FormControl(this.doctordata.registerationno,Validators.required)

      });
  
  });
    

    this.doctorform = new FormGroup({
        
          
      firstname: new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      roleid: new FormControl(1,Validators.required),
      qualification:new FormControl('',Validators.required),
      specialization:new FormControl('',Validators.required),
      experience:new FormControl('',Validators.required),
      about:new FormControl('',Validators.required),
      registerationno:new FormControl('',Validators.required)
     
  });
  }

  submit(){
    if(this.id)
    {
      this.doct.updatedoctor(this.doctorform.value).subscribe(res=>{
        console.log(res.registerationno);
        
        this.messageService.add({severity:'success', summary:'Updated', detail:res.msg});
        this.rut.navigateByUrl('/admin/doctor');
        
      })
    }

   else{
    this.doct.adddoctor(this.doctorform.value).subscribe(res=>{
     
      this.messageService.add({severity:'success', summary:'Added', detail:res.msg});
      this.rut.navigateByUrl('/admin/doctor');
      
    })
  }
    

  }

}
