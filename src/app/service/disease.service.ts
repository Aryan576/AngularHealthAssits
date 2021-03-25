import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor(private http:HttpClient) { }

  listDisease():Promise<any> {
    return this.http.get(`${environment.Base_URL}listDisease`).toPromise();
  }

  addDisease(model :any):Observable<any> {
    return this.http.post(`${environment.Base_URL}addDisease`,model);
  } 

  getDiseaseByid(diseaseid :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getdisease/${diseaseid}`).toPromise();
  }
  updateDisease(model : any):Observable<any> {
    return this.http.put(`${environment.Base_URL}updateDisease`,model);
  }
  deleteDisease(diseaseid : any):Observable<any> {
    return this.http.delete(`${environment.Base_URL}deleteDisease/${diseaseid}`);
  }
}
