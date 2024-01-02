import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private login="/login";

  constructor(private http:HttpClient) { }

log(body:{}){
  return this.http.post(environment.API_URL+this.login,body)
}


}
