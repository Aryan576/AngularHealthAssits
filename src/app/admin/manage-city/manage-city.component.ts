import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { City } from 'src/app/interface/city';
import { CityService } from 'src/app/service/city.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-manage-city',
  templateUrl: './manage-city.component.html',
  styleUrls: ['./manage-city.component.scss']
})
export class ManageCityComponent implements OnInit {

  isLog: boolean = false
  dtOptions: DataTables.Settings = {};
  listCities: {}
  liststates:{}
  getCityData: City
  id = 0
  cityForm: FormGroup
  constructor(private citiesService: CityService, private confirmationService: ConfirmationService, private route: ActivatedRoute, public userdataservice: UserserviceService, private rut: Router, private messageService: MessageService) { }

  ngOnInit() {
  this.citiesService.listCities().then(res => {
  this.listCities = res.data;
  })
  this.citiesService.listStates().then(res => {
  this.liststates = res.data;
  })
  
  this.id = this.route.snapshot.params.cityid;
  this.citiesService.getCitiesByid(this.id).then(res => {
  this.getCityData = res.data;
  
  this.cityForm = new FormGroup({
  cityid: new FormControl(this.getCityData.cityid, Validators.required),
  cityname: new FormControl(this.getCityData.cityname, Validators.required),
  stateid: new FormControl(this.getCityData.stateid, Validators.required)
  })
  })
  
  this.cityForm = new FormGroup({
  cityname: new FormControl('', Validators.required),
  stateid: new FormControl('', Validators.required)
  })
  
  if (this.userdataservice.user.email.length != 0) {
  
  this.isLog = true;
  
  } else {
  this.isLog = false;
  }
  this.dtOptions = {
  pagingType: 'full_numbers'
  };
  }
  logout() {
  this.userdataservice.user = null
  console.log("logout successfully...!!");
  
  this.isLog = false;
  this.messageService.add({ severity: 'success', summary: 'Success', detail: "Logout Successfully...!!" });
  this.rut.navigateByUrl('');
  }
  submit(){
  if(this.id){
  this.citiesService.updateCities(this.cityForm.value).subscribe(res => {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
  })
  
  }else {
  this.citiesService.addCities(this.cityForm.value).subscribe(res => {
  this.messageService.add({ severity: 'success', summary: 'Success', detail: res.msg});
  })
  }
  
  this.rut.navigateByUrl('city')
  }
  delete(value){
  this.confirmationService.confirm({
  message: 'Are you sure that you want to proceed?',
  header: 'Confirmation',
  icon: 'pi pi-exclamation-triangle',
  accept: () => {
  
  this.citiesService.deleteCities(value).subscribe(res => {
  this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: res.msg });
  
  })
  this.rut.navigateByUrl('city')
  },
  reject:() => {
  this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
  }
  });
  }

}
