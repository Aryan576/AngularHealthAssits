import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CityService } from 'src/app/service/city.service';
import { PharmacyService } from 'src/app/service/pharmacy.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-manage-pharmacy',
  templateUrl: './manage-pharmacy.component.html',
  styleUrls: ['./manage-pharmacy.component.scss']
})
export class ManagePharmacyComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  pharmacylist:{}
  constructor(private city:CityService,private pharmacyservice:PharmacyService ,private rut:Router,private messageService: MessageService ,private userData:UserserviceService,private confirmationService:ConfirmationService ) { }

 async ngOnInit() {
  
  
    await this.pharmacyservice.pharmacylist().then(res=>{
      this.pharmacylist=res.data
      console.log(this.pharmacylist);
      
    })
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    
  }

  delete(value)
  {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
      
      this. pharmacyservice.deletepharmacy(value).subscribe(res => {
      this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
      this.rut.navigateByUrl('/admin/pharmacy')
      
      })
      this.rut.navigateByUrl('/admin/pharmacy')
      },
      reject:() => {
      this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
      });
  }

}
