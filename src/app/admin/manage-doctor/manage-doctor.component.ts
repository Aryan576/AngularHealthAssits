import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrls: ['./manage-doctor.component.scss']
})
export class ManageDoctorComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  doctorlist:{}
  value1: number = 0;

  constructor(public doctor:DoctorService,private confirmationService:ConfirmationService ,private rut:Router,private messageService: MessageService) { }


  loader:boolean = true 
  ngOnInit() {

 
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    
     this.doctor.doctorlist().then(res=>{
      this.doctorlist=res.data
      this.loader  = false
    })

    
     


  }

  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
      
      this. doctor.deletedoctor(value).subscribe(res => {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
      this.rut.navigateByUrl('/admin/doctor')
      
      })
      this.rut.navigateByUrl('/admin/doctor')
      },
      reject:() => {
      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
      });
  }

}
