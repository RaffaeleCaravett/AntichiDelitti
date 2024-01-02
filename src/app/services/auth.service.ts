import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private login="/auth/login";

  constructor(private http:HttpClient) { }
  private _token: string | null = null;
  private _refreshToken: string | null = null;
  private verifyTkn = "/auth/"



  get token(): string | null {
    return this._token;
  }
  get refreshToken(): string | null {
    return this._refreshToken;
  }
  setToken(token: string): void {
    this._token = token;
  }
  setRefreshToken(refreshToken: string): void {
    this._refreshToken = refreshToken;
  }

log(body:{}){
  return this.http.post(environment.API_URL+this.login,body)
}

verifyToken(token:string){
  return this.http.get(environment.API_URL+this.verifyTkn+token)
}
verifyRefreshToken(refreshToken:string){
  return this.http.get(environment.API_URL+this.verifyTkn+'refreshToken/'+refreshToken)
}
}
