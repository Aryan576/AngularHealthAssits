import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  public appointmentStatus:any= {1:"Accept", 2:"Reject", 4:"Wait_For_Accept" ,5:"Reschedule" ,7:"Done"};
  listdoctors():Promise<any> {
    return this.http.get(`${environment.Base_URL}listDoctor`).toPromise();
  }

  listClinic():Promise <any> {
    return this.http.get(`${environment.Base_URL}listClinic`).toPromise();
  }

  addAppointment(model :any):Observable<any> {
    return this.http.post(`${environment.Base_URL}bookAppointment`,model);
  }
  listDoctClinic(userid : any):Promise <any> {
    return this.http.get(`${environment.Base_URL}listDoctClinic/${userid}`).toPromise();
  }
  listUserPatient(userid : any):Promise <any> {
    return this.http.get(`${environment.Base_URL}listUserPatient/${userid}`).toPromise();
  }


  listAppointmentUser(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_URL}ListAppointmentUser/${userid}`).toPromise();
  }

  acceptrejectappointment(model :any):Observable<any> {
    
    return this.http.put(`${environment.Base_URL}accept_reject_Appointment`,model)
  }

  listDoctClinicTiming(clinicid : any):Promise <any> {
    return this.http.get(`${environment.Base_URL}listDoctClinicTiming/${clinicid}`).toPromise();
  }


  /* Patient Visit */

  listAppointmentForDoctor(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_URL}listAppointmentForDoctor/${userid}`).toPromise();
  }

  addPrescription(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addPrescription`,model);
  }

  addPrescriptioneMedicine(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addPrescriptionMedicine`,model);
  }

  getAppointmentByid(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getappointmentid/${appointmentid}`).toPromise();
  }

  listMedicine():Promise<any> {
    return this.http.get(`${environment.Base_URL}listMedicine`).toPromise();
  }

  listDisease():Promise<any> {
    return this.http.get(`${environment.Base_URL}listDisease`).toPromise();
  }

  getPrescriptionMedicineByid(appointmentid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getappointmentid/${appointmentid}`).toPromise();
  }

  addAppointmentDisease(model : any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addAppointmentDisease`,model);
  }

  listAppointmentDisease():Promise<any> {
    return this.http.get(`${environment.Base_URL}listAppointmentDisease`).toPromise();
  }

  updateRescheduleAppointment(model :any):Observable<any> {
    return this.http.put(`${environment.Base_URL}updateRescheduleAppointment`,model);
    }


    updateRejectAppointment(model :any):Observable<any> {
      return this.http.put(`${environment.Base_URL}updateRejectAppointment`,model);
      }



    
rescheduleReason(data : any):Observable<any> {
  return this.http.get(`${environment.Base_URL}rescheduleReason/`+data.email+"/"+data.appointmentid);
  }

  rejectReason(data : any):Observable<any> {
    return this.http.get(`${environment.Base_URL}rejectReason/`+data.email+"/"+data.appointmentid);
    }
    
  listAllAppointment():Promise<any> {
    return this.http.get(`${environment.Base_URL}listAllAppointment`).toPromise();
  }

  /* Patient */

  viewPatientAppointment(userid : any):Promise<any> {
    return this.http.get(`${environment.Base_URL}viewPatientAppointment/${userid}`).toPromise();
  }

  
  



}
