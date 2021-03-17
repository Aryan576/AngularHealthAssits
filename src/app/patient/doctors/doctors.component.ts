import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  userdoctor:{}
  constructor(private service:DoctorService) { }

  ngOnInit() {
    this.service.doctorlist().then(res=>{
      this.userdoctor=res.data
    })
  }

}
