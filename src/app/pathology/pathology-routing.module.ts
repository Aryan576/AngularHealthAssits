import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AdduserpathologyComponent } from './adduserpathology/adduserpathology.component';
import { PathologyhomeComponent } from './pathologyhome/pathologyhome.component';


const routes: Routes = [

{path:'pathologyhome',component:PathologyhomeComponent,children:[
  {path:'addPatho',component:AdduserpathologyComponent},
  {path:'edituserpharmacy/:pathologyid',component:AdduserpathologyComponent}

  
],canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathologyRoutingModule { }
