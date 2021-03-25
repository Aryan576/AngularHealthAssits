import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pharmacy } from 'src/app/interface/pharmacy';
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

  AssignUserPharmacy:{}
  AssignUserPharmacyForm:FormGroup;
  PharmacyData:Pharmacy
  id=0
  constructor(private route:ActivatedRoute,private city:CityService,private pharmacyservice:PharmacyService ,private rut:Router,private messageService: MessageService ,private userData:UserserviceService,private confirmationService:ConfirmationService ) { }

  ngOnInit() {
  
    this.pharmacyservice.getAssignUserPharmacyByid().then(res => {
      this.AssignUserPharmacy = res.data;
      
    })
    this.id=this.route.snapshot.params.pharmacyid;
  
     this.pharmacyservice.pharmacylist().then(res=>{
      this.pharmacylist=res.data
      console.log(this.pharmacylist);
      
    })

    this.pharmacyservice.getpharmacyByid(this.id).then(res => {

      this.PharmacyData=res.data;
      
      

      this.AssignUserPharmacyForm = new FormGroup({
        pharmacyid:new FormControl(this.PharmacyData.pharmacyid,Validators.required),
        userid:new FormControl('',Validators.required)
       
      })
  })
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    
  }

  submit()
  {
    this.pharmacyservice.addUserPharmacy(this.AssignUserPharmacyForm.value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
      })
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
