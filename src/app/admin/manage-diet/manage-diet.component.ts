import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DietService } from 'src/app/service/diet.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-manage-diet',
  templateUrl: './manage-diet.component.html',
  styleUrls: ['./manage-diet.component.scss']
})
export class ManageDietComponent implements OnInit {
  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  dietlist:{}
  constructor(private confirmationService: ConfirmationService,private service : DietService,private userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.service.dietlist().then(res => {
      this.dietlist = res.data;
    })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  }

  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.service.deletediet(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
          console.log("Diet deleted....");
        })
        this.rut.navigateByUrl('diet')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

}
