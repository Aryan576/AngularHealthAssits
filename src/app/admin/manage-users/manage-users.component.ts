import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DoctorService } from 'src/app/service/doctor.service';
import { UsersService } from 'src/app/service/users.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  isLog:boolean = false
  dtOptions: DataTables.Settings = {};
  listUser:{}
  constructor(public doctorStatusService:DoctorService,private confirmationService: ConfirmationService,private service : UsersService,public userdataservice : UserserviceService,private rut : Router,private messageService : MessageService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.service.listuser().then(res => {
      this.listUser =res.data;
    })

   
  }
 
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.service.deleteUser(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
          console.log("Diet deleted....");
        })
        this.rut.navigateByUrl('users')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }
}
