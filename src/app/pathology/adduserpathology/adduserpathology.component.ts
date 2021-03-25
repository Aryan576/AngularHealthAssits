import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pathology } from 'src/app/interface/pathology';
import { PathologyService } from 'src/app/service/pathology.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-adduserpathology',
  templateUrl: './adduserpathology.component.html',
  styleUrls: ['./adduserpathology.component.scss']
})
export class AdduserpathologyComponent implements OnInit {
  listUserPathology:{}
  listcities:{}
  pathologyForm:FormGroup

  listPathology:{}
  


  editUserPathology:FormGroup
  editPathologyData:Pathology
  id=0;
  constructor(private messageService : MessageService,public userData:UserserviceService,private rut:Router,private service:PathologyService,private route : ActivatedRoute,private confirmationService : ConfirmationService) { }

  ngOnInit() {

    this.id = this.route.snapshot.params.pathologyid;

    this.service.pathologylist().then(res => {
      this.listPathology = res.data;
    })

    this.service.listcities().then(res => {
      this.listcities = res.data;
    })
    this.service.listUserPathology(this.userData.user.userid).then(res => {
      this.listUserPathology = res.data;
      console.log(res.data);
      
      this.pathologyForm = new FormGroup({
        userid:new FormControl(this.userData.user.userid,Validators.required),
        pathologyid:new FormControl('',Validators.required),
        pathologyname:new FormControl('',Validators.required),
        timing:new FormControl('',Validators.required),
        address:new FormControl('',Validators.required),
        phoneno:new FormControl('',Validators.required),
        about:new FormControl('',Validators.required),
        cityid:new FormControl('',Validators.required),
        pincode:new FormControl('',Validators.required)
      })
  



    })



    this.service.getpathologyByid(this.id).then(res => {
      this.editPathologyData = res.data;
      console.log(this.editPathologyData);
      

      this.pathologyForm = new FormGroup({
        pathologyid:new FormControl(this.editPathologyData.pathologyid,Validators.required),
        pathologyname:new FormControl(this.editPathologyData.pathologyname,Validators.required),
        timing:new FormControl(this.editPathologyData.timing,Validators.required),
        address:new FormControl(this.editPathologyData.address,Validators.required),
        phoneno:new FormControl(this.editPathologyData.phoneno,Validators.required),
        about:new FormControl(this.editPathologyData.about,Validators.required),
        cityid:new FormControl(this.editPathologyData.cityid,Validators.required),
        pincode:new FormControl(this.editPathologyData.pincode,Validators.required)
      })
    
    })



  }
 
 
 

  close()
  {
      this.rut.navigateByUrl('./addPatho')

  }
  submit(){
      
      
     if(this.id){
      this.service.updatepathology(this.pathologyForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
      })

    }
    else{
      this.service.addAssignUserPathology(this.pathologyForm.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
      })
     
    } 

  }
}
