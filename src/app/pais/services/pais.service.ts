import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { porPais } from '../interfaces/porPais';
import { porCapital } from '../interfaces/porCapital';
import { verPais } from '../interfaces/verPais';
import { porRegion } from '../interfaces/porRegion';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string = 'https://restcountries.com/v3.1/';
  
  constructor(private http:HttpClient) { }

  getBuscarPais(termino:string):Observable <porPais[]>{
    const url = `${this.apiUrl}name/${termino}`
    return this.http.get<porPais[]>(url);
  }

  getBuscarCapital(termino:string):Observable <porCapital[]>{
    const url = `${this.apiUrl}capital/${termino}`
    return this.http.get<porCapital[]>(url);
  }

  getPorId(id:string):Observable <verPais[]>{
    const url = `${this.apiUrl}alpha/${id}`
    return this.http.get<verPais[]>(url);
  }

  
  getPorRegion(region:string):Observable <porPais[]>{
    const url = `${this.apiUrl}region/${region}`
    return this.http.get<porPais[]>(url);
  }
}
