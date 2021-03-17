import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ClinicService } from 'src/app/service/clinic.service';

@Component({
  selector: 'app-manage-clinic',
  templateUrl: './manage-clinic.component.html',
  styleUrls: ['./manage-clinic.component.scss']
})
export class ManageClinicComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listclinic:{}
  constructor(private clinic :ClinicService,private confirmationService:ConfirmationService ,private rut:Router,private messageService: MessageService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.clinic.cliniclist().then(res=>{
      this.listclinic=res.data
    })
  }

  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
      
      this. clinic.deleteclinic(value).subscribe(res => {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
      this.rut.navigateByUrl('/admin/clinic')
      
      })
      this.rut.navigateByUrl('/admin/clinic')
      },
      reject:() => {
      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
      });
  }

}
