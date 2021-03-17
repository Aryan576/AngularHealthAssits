import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/interface/pharmacy';
import { PharmacyService } from 'src/app/service/pharmacy.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {
  id=0;
  listUserPharmacy:Pharmacy
  pharmacyList:{}
  constructor(private service:PharmacyService) { }

  ngOnInit(): void {
    this.service.pharmacylist().then(res => {
      // this.rating = res.data.rating;
      this.pharmacyList = res.data;
    })
  }

}
