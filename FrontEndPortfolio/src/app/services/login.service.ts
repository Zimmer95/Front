import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public LoginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient ) {}

  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}/generate-token`,loginData);
  }

  public loginUser(token:any){
    localStorage.setItem('token', token);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token')
    if ( tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user')
    if(userStr != null){
      return JSON.parse(userStr)
    }else{
      this.logOut
      return null;
    }
  }

  public getUserRol(){
    let user = this.getUser()
    return user.authorities[0].authority;
  }

  public currentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`)
  }


}
