import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Doctor } from 'src/app/interface/doctor';
import { DoctorService } from 'src/app/service/doctor.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.scss']
})
export class DoctorprofileComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  id = 0;
  listdoctor:{};
  listclinic:{};
  listDoctClinic:{};
  getDoctorUserId:Doctor;
  doctClinicForm:FormGroup;
  constructor(private confirmationService: ConfirmationService,private route : ActivatedRoute,private service: DoctorService,private userdataservice : UserserviceService,private rut:Router,private messageService : MessageService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.userid;

    this.service.getdoctorByid(this.id).then(res => {
      this.getDoctorUserId = res.data;
      console.log(res);
      console.log(this.getDoctorUserId);
      
      this.doctClinicForm = new FormGroup({
        doctorid:new FormControl(this.getDoctorUserId.userid,Validators.required),
        clinicid:new FormControl('',Validators.required),
        mon:new FormControl('',Validators.required),
        tue:new FormControl('',Validators.required),
        wed:new FormControl('',Validators.required),
        thru:new FormControl('',Validators.required),
        fri:new FormControl('',Validators.required),
        sat:new FormControl('',Validators.required),
        sun:new FormControl('',Validators.required),
        threshold:new FormControl('',Validators.required)
      })

    })

    this.service.clinic().then(res => {
      this.listclinic = res.data;
    })
    this.service.DoctorClinic(this.id).then(res => {
      this.listDoctClinic = res.data;
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }


  submit()
  {
    console.log(this.doctClinicForm.value);
    
      this.service.addDoctorclinic(this.doctClinicForm.value).subscribe(res=>{
        console.log(res);
        
        this.messageService.add({severity:'success', summary:'Added', detail:res.msg});
      })
  }

  delete(value){

  }

}
