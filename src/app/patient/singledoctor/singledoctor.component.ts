import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/interface/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-singledoctor',
  templateUrl: './singledoctor.component.html',
  styleUrls: ['./singledoctor.component.scss']
})
export class SingledoctorComponent implements OnInit {
  getDoctorUserId:Doctor;
  id = 0;

  listDoctClinic:{};
  constructor(private service :DoctorService,private route:ActivatedRoute,private rut:Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params.userid
    this.service.DoctorClinic(this.id).then(res => {
      this.listDoctClinic = res.data;
      console.log(res.data,"Docotr clinc");
      
    })

    this.service.getdoctorByid(this.id).then(res => {
      this.getDoctorUserId = res.data;
      console.log(res);
      console.log(this.getDoctorUserId);
      
      

    })
  }

}
