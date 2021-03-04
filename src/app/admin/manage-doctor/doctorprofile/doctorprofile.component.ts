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
        docid:new FormControl(this.getDoctorUserId.userid,Validators.required),
        clinicid:new FormControl('',Validators.required),
        monday:new FormControl('',Validators.required),
        tuesday:new FormControl('',Validators.required),
        wednesday:new FormControl('',Validators.required),
        thrusday:new FormControl('',Validators.required),
        friday:new FormControl('',Validators.required),
        saturday:new FormControl('',Validators.required),
        sunday:new FormControl('',Validators.required),
        threshold:new FormControl('',Validators.required)
      })

    })

    this.service.clinic().then(res => {
      this.listclinic = res.data;
    })
    this.service.DoctorClinic().then(res => {
      this.listDoctClinic = res.data;
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }


  submit()
  {

  }

  delete(value){

  }

}
