import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { valHooks } from 'jquery';
import { MessageService } from 'primeng/api';
import { Pathology } from 'src/app/interface/pathology';
import { CityService } from 'src/app/service/city.service';
import { PathologyService } from 'src/app/service/pathology.service';
import { PharmacyService } from 'src/app/service/pharmacy.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-addpathology',
  templateUrl: './addpathology.component.html',
  styleUrls: ['./addpathology.component.scss']
})
export class AddpathologyComponent implements OnInit {
  pathologyForm:FormGroup
  listcities:{}
  pathologydata:Pathology

  id=0;

  constructor(private city:CityService,private pathologyservice:PathologyService ,private rut:Router,private messageService: MessageService ,private userData:UserserviceService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.id=this.route.snapshot.params.pathologyid
    
    
    
      this.pathologyservice.getpathologyByid(this.id).then(res=>{
        
      
          this.pathologydata=res.data;
        
          

            this.pathologyForm = new FormGroup({
              pathologyid:new FormControl(this.pathologydata.pathologyid,Validators.required),
              pathologyname : new FormControl(this.pathologydata.pathologyname,Validators.required),
              timing : new FormControl(this.pathologydata.timing,Validators.required),
              phoneno : new FormControl(this.pathologydata.phoneno,Validators.required),
              rating : new FormControl(this.pathologydata.rating,Validators.required),
              address : new FormControl(this.pathologydata.address,Validators.required),
              about : new FormControl(this.pathologydata.about,Validators.required),
              cityid : new FormControl(this.pathologydata.cityid,Validators.required),
              pincode : new FormControl(this.pathologydata.pincode,Validators.required)
            });
          

          

      })
    
    

    this.city.citylist().then(res=>{
      console.log(res);
      this.listcities=res.data
      
  })

    this.pathologyForm = new FormGroup({
      pathologyname : new FormControl('',Validators.required),
      timing : new FormControl('',Validators.required),
      phoneno : new FormControl('',Validators.required),
      rating : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      about : new FormControl('',Validators.required),
      cityid : new FormControl('',Validators.required),
      pincode : new FormControl('',Validators.required)
    });
  }

  submit(){
  
    if(this.id)
    {
      console.log(this.id);
      
      this.pathologyservice.updatepathology(this.pathologyForm.value).subscribe(res=>{
        console.log(res);
        console.log("updated");
        this.rut.navigateByUrl('/admin/pathology');
        
        
        this.messageService.add({severity:'success', summary:'Updated', detail:res.msg});
      })
    }
    
    else{
    this.pathologyservice.addpathology(this.pathologyForm.value).subscribe(res=>{
      
      this.messageService.add({severity:'success', summary:'Added', detail:res.msg});
      this.rut.navigateByUrl('/admin/pathology');
    })
  }

  }
  

}
