import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pathology } from 'src/app/interface/pathology';
import { PathologyService } from 'src/app/service/pathology.service';

@Component({
  selector: 'app-singlepathology',
  templateUrl: './singlepathology.component.html',
  styleUrls: ['./singlepathology.component.scss']
})
export class SinglepathologyComponent implements OnInit {

  id=0;
  listUserPathology:Pathology
  constructor(private service:PathologyService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params.pathologyid;

    this.service.getpathologyByid(this.id).then(res => {
      this.listUserPathology = res.data;
    })
  }


}
