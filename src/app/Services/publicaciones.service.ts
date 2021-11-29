import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(
    private _http:HttpClient

  ){ }

  getPublicaciones():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    //return this._http.get("../../assets/publicaciones.json")
    return this._http.get("http://localhost:8080/api/publicaciones")

  }
}
