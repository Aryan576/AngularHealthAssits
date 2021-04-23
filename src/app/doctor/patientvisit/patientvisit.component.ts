import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Appointment } from 'src/app/interface/appointment';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-patientvisit',
  templateUrl: './patientvisit.component.html',
  styleUrls: ['./patientvisit.component.scss']
})
export class PatientvisitComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  prescriptionData: Appointment;
  id=0
  listDisease:{}
  listAppointmentDisease:{}
  pastAppointmentList:{}
  prescriptionMedicineForm: FormGroup
  listMedicine:{}
diseaseForm:FormGroup
Appointment:{}
dietUserForm:FormGroup

public medicine: any[] = [{
  //id: 1,
  medicinename: '',
  frequency: '',
  duration: '',
  instructions: ''
}];

  
  statusid=0
  listDiet:{}
listDietUser:{}
  constructor(private route: ActivatedRoute, private Service: PrescriptionService, private rut: Router, private messageService: MessageService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.appointmentid;
    console.log(this.id);

    this.Service.getAppointmentByid(this.id).then(res => {
      this.prescriptionData = res.data;
      console.log(res.data);

      this.diseaseForm = new FormGroup({
        appointmentid:new FormControl(this.id,Validators.required),
        patientprofileid:new FormControl(this.prescriptionData.patientid,Validators.required),
        diseaseid:new FormControl('',Validators.required)
        })


        this.Service.pastAppointmentList(this.prescriptionData.patientid).then(res => {
          this.pastAppointmentList = res.data;
          })

          this.Service.listAppointmentDisease(this.prescriptionData.patientid).then(res => {
            this.listAppointmentDisease = res.data;
          })

          this.prescriptionMedicineForm = new FormGroup({
            patientprofileid: new FormControl(this.prescriptionData.patientid, Validators.required),
            doctorprofileid: new FormControl(this.prescriptionData.doctorid, Validators.required),
            appointmentid: new FormControl(this.id, Validators.required),
            description: new FormControl('', Validators.required),
            prescriptiondate: new FormControl('', Validators.required),
            generaladvice: new FormControl('', Validators.required),
            followupcomment: new FormControl('', Validators.required),
            prescriptionid: new FormControl('', Validators.required),
            medicineid: new FormControl('', Validators.required),
            frequency: new FormControl('', Validators.required),
            duration: new FormControl('', Validators.required),
            instructions: new FormControl('', Validators.required)
          })


          this.Service.listDiet().then(res => {
            this.listDiet = res.data;
            })
            
this.Service.listDietUser(this.prescriptionData.patientid).then(res => {
  this.listDietUser = res.data;
  })

  })
  this.Service.listMedicine().then(res => {
    this.listMedicine = res.data;
    })

  this.Service.listAppointmentDisease(this.id).then(res => {
    this.listAppointmentDisease = res.data;
  })
  this.Service.listDisease().then(res => {
    this.listDisease = res.data;
  })
  this.Service.listDiet().then(res => {
    this.listDiet = res.data;
  })


  this.dtOptions = {
    pagingType: 'full_numbers'
    };

}


diseaseSubmit(){
   this.Service.addAppointmentDisease(this.diseaseForm.value).subscribe(res => {
  this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
  })  

  console.log(this.diseaseForm.value);
  
  
  }


  submitPrescription() {
    this.Service.addPrescriptioneMedicine(this.prescriptionMedicineForm.value).subscribe(res => {
    this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
    })
    console.log(this.prescriptionMedicineForm.value);
    
    
    }

    addMore() {
      this.medicine.push({
      //id: this.addresses.length + 1,
      medicinename: '',
      frequency: '',
      duration: '',
      instructions: ''
      });
      }
      
      remove(i: number) {
      this.medicine.splice(i, 1);
      }

      submitDetails(value){
        console.log(value);
        this.Appointment={"appointmentid":value,"statusid":this.statusid=7}
        this.Service.doneappointment(this.Appointment).subscribe(res => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
          this.rut.navigateByUrl('/doctorHome/docappointment')
        })
      
        
      }


      dietUserSubmit(){
        this.Service.addDietuser(this.dietUserForm.value).subscribe(res => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: res.msg});
        })
        
        }
}
