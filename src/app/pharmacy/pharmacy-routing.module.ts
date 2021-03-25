import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PharmacyhomeComponent } from './pharmacyhome/pharmacyhome.component';


const routes: Routes = [

  {path:'pharmacyHome',component:PharmacyhomeComponent,children:[
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
