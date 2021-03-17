import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Clinic } from 'src/app/interface/clinic';
import { CityService } from 'src/app/service/city.service';
import { ClinicService } from 'src/app/service/clinic.service';

@Component({
  selector: 'app-addclinic',
  templateUrl: './addclinic.component.html',
  styleUrls: ['./addclinic.component.scss']
})
export class AddclinicComponent implements OnInit {
  listcities:{}
  clinicForm: FormGroup;
  clinicData:Clinic
  id=0;
  constructor(private route:ActivatedRoute,private city:CityService ,private cil:ClinicService,private rut:Router,private messageService: MessageService) { }

  ngOnInit() {

    this.id=this.route.snapshot.params.clinicid

    this.cil.getclinicByid(this.id).then(res=>{
        this.clinicData=res.data
     
      this.clinicForm = new FormGroup({
        clinicid:new FormControl(this.clinicData.clinicid,Validators.required),
        clinicname: new FormControl(this.clinicData.clinicname, Validators.required),
        timing: new FormControl(this.clinicData.timing, Validators.required),
        phoneno: new FormControl(this.clinicData.phoneno, Validators.required),
        rating: new FormControl(this.clinicData.rating, Validators.required),
        address: new FormControl(this.clinicData.address, Validators.required),
        about: new FormControl(this.clinicData.about, Validators.required),
        cityid: new FormControl(this.clinicData.cityid, Validators.required),
        pincode: new FormControl(this.clinicData.pincode, Validators.required)
      })

    })

    this.city.citylist().then(res=>{
      this.listcities=res.data;
    })


    this.clinicForm = new FormGroup({
      clinicname: new FormControl('', Validators.required),
      timing: new FormControl('', Validators.required),
      phoneno: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      about: new FormControl('', Validators.required),
      cityid: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required)
    })
  }

  submit(){

    if(this.id)
    {
      this.cil.updateclinic(this.clinicForm.value).subscribe(res=>{
        this.messageService.add({severity:'success', summary:'Updated', detail:res.msg});
        this.rut.navigateByUrl('admin/clinic')
      })

    }

    else{
      this.cil.addclinic(this.clinicForm.value).subscribe(res=>{
      this.messageService.add({severity:'success', summary:'Added', detail:res.msg});
    })
  }


  }

}
