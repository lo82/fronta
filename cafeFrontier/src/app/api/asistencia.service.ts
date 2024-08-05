import { Injectable } from '@angular/core';
import { Asistecia_component } from '../class/classA';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2';
import { control } from '../class/control';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  url = `${environment.HOST}/api/control`;
  private httpHeders = new HttpHeaders({'Content-TYpe': 'application/json'})
  constructor(private http: HttpClient,private routers:Router) { }

  getAsi(): Observable<Asistecia_component[]>{
    return this.http.get<Asistecia_component[]>(this.url);
  }

  create(asistencia :Asistecia_component) : Observable<Asistecia_component>{
    return this.http.post<Asistecia_component>(this.url, asistencia,{headers: this.httpHeders}).pipe(
      map((response:any)=> response.usuario as Asistecia_component),
      catchError(e =>{
        console.error(e.error.mensaje);
        swal.fire('Error al crear al usuario',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }

  create2(asistencia :control) : Observable<control>{
    return this.http.post<control>(this.url, asistencia,{headers: this.httpHeders}).pipe(
      map((response:any)=> response.usuario as control),
      catchError(e =>{
        console.error(e.error.mensaje);
        swal.fire('Error al crear al usuario',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }





  getAsis(id: any):Observable<Asistecia_component>{
    return this.http.get<Asistecia_component>(`${this.url}/${id}`).pipe(
      catchError(e =>{
        this.routers.navigate(e.error.mensaj);
        swal.fire('Error al editar',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }

  update(asistencia : Asistecia_component) :Observable<Asistecia_component>{
    return this.http
      .put<Asistecia_component>(`${this.url}/${asistencia.id}`, asistencia, {headers : this.httpHeders}).pipe(
        map((response:any)=> response.usuario as Asistecia_component),
        catchError(e =>{
          console.error(e.error.mensaje);
          swal.fire('Error al actualizar al usuario',e.error.mensaje,'error');
          return throwError(e);
        })
      )
      
  }
}
