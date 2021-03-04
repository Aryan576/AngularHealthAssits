import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Pharmacy } from 'src/app/interface/pharmacy';
import { CityService } from 'src/app/service/city.service';
import { PharmacyService } from 'src/app/service/pharmacy.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-addpharmacy',
  templateUrl: './addpharmacy.component.html',
  styleUrls: ['./addpharmacy.component.scss']
})
export class AddpharmacyComponent implements OnInit {
  pharmacyForm:FormGroup
  listcities:{}
  id=0;
  pharmacydata:Pharmacy
  constructor(private city:CityService,private pharmacyservice:PharmacyService ,private rut:Router,private messageService: MessageService ,private userData:UserserviceService,private route: ActivatedRoute) { }


  ngOnInit() {

      this.id=this.route.snapshot.params.pharmacyid;
      console.log(this.id);
      

      this.pharmacyservice.getpharmacyByid(this.id).then(res=>{
        this.pharmacydata=res.data;
        console.log(res.data);
        

        this.pharmacyForm = new FormGroup({
          pharmacyid:new FormControl(this.pharmacydata.pharmacyid,Validators.required),
          pharmacyname : new FormControl(this.pharmacydata.pharmacyname,Validators.required),
          timing : new FormControl(this.pharmacydata.timing,Validators.required),
          phone : new FormControl(this.pharmacydata.phone,Validators.required),
          rating : new FormControl(this.pharmacydata.rating,Validators.required),
          address : new FormControl(this.pharmacydata.address,Validators.required),
          about : new FormControl(this.pharmacydata.about,Validators.required),
          cityid : new FormControl(this.pharmacydata.cityid,Validators.required),
          pincode : new FormControl(this.pharmacydata.pincode,Validators.required)
      
          });



      })

    this.city.citylist().then(res=>{
        console.log(res);
        this.listcities=res.data
        
    })
    this.pharmacyForm = new FormGroup({
    pharmacyname : new FormControl('',Validators.required),
    timing : new FormControl('',Validators.required),
    phone : new FormControl('',Validators.required),
    rating : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    about : new FormControl('',Validators.required),
    cityid : new FormControl('',Validators.required),
    pincode : new FormControl('',Validators.required)

    });
  }

  submit()
  {
    if(this.id)
    {
      this.pharmacyservice.updatepaharmacy(this.id).subscribe(res=>{
        this.messageService.add({severity:'success', summary:'Added', detail:res.msg});
        this.rut.navigateByUrl('/admin/pharmacy')

      })

    }else{
    
      
        
        this.pharmacyservice.addpharmacy(this.pharmacyForm.value).subscribe(res=>{
          
            this.messageService.add({severity:'success', summary:'Added', detail:res.msg});
            this.rut.navigateByUrl('/admin/pharmacy')
            
            console.log(res);
            
          
         
        })
      }

      

  }

}
