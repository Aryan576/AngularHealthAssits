import { Component, OnInit } from '@angular/core';
import { Pathology } from 'src/app/interface/pathology';
import { PathologyService } from 'src/app/service/pathology.service';

@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.scss']
})
export class PathologyComponent implements OnInit {
  id=0;
  listUserPharmacy:Pathology
  pathologyList:{}
  constructor(private service:PathologyService) { }

  ngOnInit() {
    this.service.pathologylist().then(res => {
      // this.rating = res.data.rating;
      this.pathologyList = res.data;
    })
  }

}
