import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {

  constructor(private http:HttpClient) { }

  resetpassword(data:any):Observable<any>{
     return this.http.get(`${environment.Base_URL}resetpassword/`+data);
  }

  setnewpassword(data:any):Observable<any>{
    return this.http.get(`${environment.Base_URL}setnewpassword/`+data.otp+"/"+data.newpassword+"/"+data.email);
  }
}
