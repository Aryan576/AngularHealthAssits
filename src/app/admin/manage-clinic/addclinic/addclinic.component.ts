import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
  constructor(private city:CityService ,private cil:ClinicService,private rut:Router,private messageService: MessageService) { }

  ngOnInit() {

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

    this.cil.addclinic(this.clinicForm.value).subscribe(res=>{
      this.messageService.add({severity:'success', summary:'Added', detail:res.msg});
    })



  }

}
