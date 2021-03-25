import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  adduser(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}Signup`,model);
  }

  listuser():Promise<any> {
    return this.http.get(`${environment.Base_URL}users`).toPromise();
  }

  listRole():Promise<any> {
    return this.http.get(`${environment.Base_URL}listRole`).toPromise();
  }

  getUserByid(userId :any):Promise<any> {
    return this.http.get(`${environment.Base_URL}getuser/${userId}`).toPromise();
  }

  updateUser(model : any):Observable<any> {
    return this.http.put(`${environment.Base_URL}updateSignup`,model);
  }

  deleteUser(userId : any):Observable<any> {
    return this.http.delete(`${environment.Base_URL}deleteSignup/${userId}`);
  }

  addAdminuser(model:any):Observable<any>{
    return this.http.post(`${environment.Base_URL}adminAddUsers`,model);

  }
}
