import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { State } from 'src/app/interface/state';
import { StateService } from 'src/app/service/state.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-manage-state',
  templateUrl: './manage-state.component.html',
  styleUrls: ['./manage-state.component.scss']
})
export class ManageStateComponent implements OnInit {
  isLog: boolean = false
  dtOptions: DataTables.Settings = {};
  liststates:{}
  getStateData: State
  id = 0
  stateForm: FormGroup
  constructor(private stateService: StateService, private confirmationService: ConfirmationService, private route: ActivatedRoute, public userdataservice: UserserviceService, private rut: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.stateService.listStates().then(res => {
      this.liststates = res.data;
    })

    this.id = this.route.snapshot.params.stateid;
    this.stateService.getStateByid(this.id).then(res => {
      this.getStateData = res.data;

      this.stateForm = new FormGroup({
        stateid: new FormControl(this.getStateData.stateid, Validators.required),
        statename: new FormControl(this.getStateData.statename, Validators.required)
      })
    })

    this.stateForm = new FormGroup({
      statename: new FormControl('', Validators.required)
    })
  
  }


  submit(){
    if(this.id){
      this.stateService.updateState(this.stateForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
        })
     
    }else {
      this.stateService.addStates(this.stateForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
        })
    }
    
    this.rut.navigateByUrl('state')
  }
  delete(value){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        
        this.stateService.deleteState(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
        
        })
        this.rut.navigateByUrl('state')
      },
      reject:() => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });

  }

}
