import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Disease } from 'src/app/interface/disease';
import { DiseaseService } from 'src/app/service/disease.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-manage-disease',
  templateUrl: './manage-disease.component.html',
  styleUrls: ['./manage-disease.component.scss']
})
export class ManageDiseaseComponent implements OnInit {

  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  listDisease:{}
  diseaseForm:FormGroup
  id=0;
  diseaseData:Disease
  constructor(private diseaseservice : DiseaseService,private confirmationService :ConfirmationService,private route:ActivatedRoute,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.diseaseservice.listDisease().then(res => {
      this.listDisease = res.data;
    })

    this.diseaseForm = new FormGroup({
      diseasename : new FormControl('',Validators.required),
    })
    this.id = this.route.snapshot.params.diseaseid;
    this.diseaseservice.getDiseaseByid(this.id).then(res => {
      this.diseaseData = res.data;

      this.diseaseForm = new FormGroup({
        diseaseid : new FormControl(this.diseaseData.diseaseid,Validators.required),
        diseasename : new FormControl(this.diseaseData.diseasename,Validators.required),
      })
    })
    
   
  }
  
  submit(){
    if(this.id){
      this.diseaseservice.updateDisease(this.diseaseForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      })
      this.rut.navigateByUrl('disease')
    }else {
      this.diseaseservice.addDisease(this.diseaseForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      })
    }
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.diseaseservice.deleteDisease(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
        
        })
        this.rut.navigateByUrl('disease')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
