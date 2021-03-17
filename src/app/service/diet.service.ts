import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor(private http:HttpClient) { }

  dietlist():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listDiet`).toPromise();
  }

  adddiet(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}addDiet`,model);
  }

  getdietByid(dietid :any):Promise<any>{
    return this.http.get(`${environment.Base_URL}getDiet/${dietid}`).toPromise();
    }

    updatediet(model: any): Observable<any> {
      return this.http.put(`${environment.Base_URL}updateDiet`, model);
    }

    deletediet(dietid:any):Observable<any>{
      return this.http.delete(`${environment.Base_URL}addDiet/${dietid}`)
    }


}
