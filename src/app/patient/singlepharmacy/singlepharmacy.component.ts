import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pharmacy } from 'src/app/interface/pharmacy';
import { PharmacyService } from 'src/app/service/pharmacy.service';

@Component({
  selector: 'app-singlepharmacy',
  templateUrl: './singlepharmacy.component.html',
  styleUrls: ['./singlepharmacy.component.scss']
})
export class SinglepharmacyComponent implements OnInit {
  id=0;
  listUserPharmacy:Pharmacy
  constructor(private service:PharmacyService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params.pharmacyid;

    this.service.getpharmacyByid(this.id).then(res => {
      this.listUserPharmacy = res.data;
    })
  }

}
