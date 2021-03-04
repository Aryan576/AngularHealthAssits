import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PathologyService } from 'src/app/service/pathology.service';
import { PharmacyService } from 'src/app/service/pharmacy.service';

@Component({
  selector: 'app-manage-pathology',
  templateUrl: './manage-pathology.component.html',
  styleUrls: ['./manage-pathology.component.scss']
})
export class ManagePathologyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listpathology:{}
  constructor(private pathology:PathologyService,private confirmationService:ConfirmationService ,private rut:Router,private messageService: MessageService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  this.pathology.pathologylist().then(res=>{
    this.listpathology=res.data;
    console.log(res.data);
    

    })

    
    
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
      
      this. pathology.deletepathology(value).subscribe(res => {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
      this.rut.navigateByUrl('/admin/pathology')
      
      })
      this.rut.navigateByUrl('/admin/pathology')
      },
      reject:() => {
      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
      });
  }

}
