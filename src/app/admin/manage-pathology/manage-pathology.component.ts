import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pathology } from 'src/app/interface/pathology';
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
  AssignUserPathology:{}
  AssignUserPathologyForm:FormGroup;
  PathologyData:Pathology
  id=0


  constructor(private route : ActivatedRoute,private pathology:PathologyService,private confirmationService:ConfirmationService ,private rut:Router,private messageService: MessageService) { }

  ngOnInit() {

    this.pathology.getAssignUserPathology().then(res => {
      this.AssignUserPathology = res.data;
      
    })
    this.id=this.route.snapshot.params.pathologyid;

    this.pathology.getpathologyByid(this.id).then(res => {
      this.PathologyData=res.data;
      
      console.log("AssignUserPathology....  ",this.id);
      this.AssignUserPathologyForm = new FormGroup({
        pathologyid:new FormControl(this.PathologyData.pathologyid,Validators.required),
        userid:new FormControl('',Validators.required)
       
      })
   })

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  this.pathology.pathologylist().then(res=>{
    this.listpathology=res.data;
    console.log(res.data);
    

    })

    
    
  }


    submit()
    {
      this.pathology.addUserPathology(this.AssignUserPathologyForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg });
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
