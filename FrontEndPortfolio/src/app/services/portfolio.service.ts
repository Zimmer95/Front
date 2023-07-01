import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  

  constructor(private http:HttpClient) { }

  public currentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`)
  }

  public datosEducacion(user:any):Observable<any>{
    return this.http.get(`${baserUrl}/educacion/buscar/1`)
  }
  public datosExperiencia(user:any):Observable<any>{
    return this.http.get(`${baserUrl}/experiencia-laboral/buscar/${user.id}`)
  }

}
