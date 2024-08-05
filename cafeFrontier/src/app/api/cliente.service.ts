import { Injectable } from '@angular/core';
import { Clientes } from '../class/clientes';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../class/usuarios';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = `${environment.HOST}/api/clientes`;
  u = `${environment.HOST}/api/`;
  constructor(private http: HttpClient,private routers:Router) { }

  public findAll(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.url);
  }

  public registro(client: Clientes): Observable<any> {
    return this.http.post<any>(this.url , client, cabecera);
  }

  putActualizar(data: Clientes, id: number) {
    return this.http
      .put<Clientes>(this.u + 'clientes/' + id, data)
      .pipe(
        
      );
  }

  
}
