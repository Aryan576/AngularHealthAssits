import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Diet } from 'src/app/interface/diet';
import { DietService } from 'src/app/service/diet.service';

@Component({
  selector: 'app-adddiet',
  templateUrl: './adddiet.component.html',
  styleUrls: ['./adddiet.component.scss']
})
export class AdddietComponent implements OnInit {

  dietForm:FormGroup;
  id=0
  diet:Diet
  constructor(private route:ActivatedRoute,private service:DietService,private messageService: MessageService, private rut: Router) { }

  ngOnInit() {

    this.id=this.route.snapshot.params.dietid;

    this.service.getdietByid(this.id).then(res=>{
      this.diet=res.data
      this.dietForm = new FormGroup({
        dietid:new FormControl(this.diet.dietid,Validators.required),
        diettype:new FormControl(this.diet.diettype,Validators.required),
        dietcontent:new FormControl(this.diet.dietcontent,Validators.required),
        agegroup:new FormControl(this.diet.agegroup,Validators.required)
      })
    })

    this.dietForm = new FormGroup({
      diettype:new FormControl('',Validators.required),
      dietcontent:new FormControl('',Validators.required),
      agegroup:new FormControl('',Validators.required)
    })
  }

  submit(){
    if(this.id)
    {
      
    this.service.updatediet(this.dietForm.value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      this.rut.navigateByUrl('diet')
    })
    }
    else{
    this.service.adddiet(this.dietForm.value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      this.rut.navigateByUrl('diet')
    })
  }
  }


}
