import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.scss']
})
export class AddusersComponent implements OnInit {
  userForm:FormGroup;

  listRole:{}
  constructor(private Userservice:UsersService,private messageService :MessageService,private rut:Router) { }

  ngOnInit(): void {

    this.Userservice.listRole().then(res => {
      this.listRole = res.data;
      console.log(res.data);
      
    })

    this.userForm = new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      roleid:new FormControl('',Validators.required),
    })
  }

  submit(){
    this.Userservice.addAdminuser(this.userForm.value).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
      this.rut.navigateByUrl('/admin/users')
    })
  }

}
