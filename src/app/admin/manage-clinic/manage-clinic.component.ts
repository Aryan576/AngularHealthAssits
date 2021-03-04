import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'src/app/service/clinic.service';

@Component({
  selector: 'app-manage-clinic',
  templateUrl: './manage-clinic.component.html',
  styleUrls: ['./manage-clinic.component.scss']
})
export class ManageClinicComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listclinic:{}
  constructor(private clinic :ClinicService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.clinic.cliniclist().then(res=>{
      this.listclinic=res.data
    })
  }

}
