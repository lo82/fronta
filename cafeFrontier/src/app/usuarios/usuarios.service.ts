import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { Usuario } from './usuario';
import { catchError, map } from 'rxjs/operators'
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { NuevoUsuario } from './nuevo_usuario';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  [x: string]: any;
  private urlEndPoint:string =  'http://localhost:8080/api/usuarios';
  private urlEndPointFecha:string = 'http://localhost:8080/api/usuariosFecha';
  private urlEndPointRolid:string ='http://localhost:8080/api/usuarios/rol_id';
  private authURL ='http://localhost:8080/api/auth/';

  private httpHeders = new HttpHeaders({'Content-TYpe': 'application/json'})

  constructor(private http:HttpClient,private routers:Router) { }

  private isNoAutorizado(e: { status: number; }): boolean{

    if (e.status== 401 || e.status==403){
      this.routers.navigate(['/login'])
      return true;
    }
    return false;
  }


  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlEndPoint);
  }

  //getUsuarioRol(rol): Observable<Usuario[]>{
  //  return this.http.get<Usuario[]>(this.urlEndPoint);
 // }

  create(usuario :Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPoint, usuario,{headers: this.httpHeders}).pipe(
      map((response:any)=> response.usuario as Usuario),
      catchError(e =>{
        if (this.isNoAutorizado(e)){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal.fire('Error al crear al usuario',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(this.authURL + 'nuevo', usuario, cabecera);
  }

  getUsuarios(id):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e =>{
        if (this.isNoAutorizado(e)){
          return throwError(e);
        }
        this.routers.navigate(e.error.mensaj);
        swal.fire('Error al editar',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }

  getUsuariosRolid(id: any):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.urlEndPointRolid}/${id}`).pipe(
      catchError(e =>{
        if (this.isNoAutorizado(e)){
          return throwError(e);
        }
        this.routers.navigate(e.error.mensaj);
        swal.fire('Error al obtener datos',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }

 
  update(usuario : Usuario) :Observable<Usuario>{
    return this.http
      .put<Usuario>(`${this.urlEndPoint}/${usuario.id}`, usuario, {headers : this.httpHeders}).pipe(
        map((response:any)=> response.usuario as Usuario),
        catchError(e =>{
          if (this.isNoAutorizado(e)){
            return throwError(e);
          }
          console.error(e.error.mensaje);
          swal.fire('Error al actualizar al usuario',e.error.mensaje,'error');
          return throwError(e);
        })
      )
      
  }


  updateFecha(usuario:Usuario) :Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndPointFecha}/${usuario.id}`, usuario, {headers : this.httpHeders}).pipe(
      map((response:any)=> response.usuario as Usuario),
      catchError(e =>{
        if (this.isNoAutorizado(e)){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal.fire('Error al actualizar al usuario',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  
  }

  delete(id : number) :Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`,{headers : this.httpHeders}).pipe(
      map((response:any)=> response.usuario as Usuario),
      catchError(e =>{
        if (this.isNoAutorizado(e)){
          return throwError(e);
        }
        console.error(e.error.mensaje);
        swal.fire('Error al eliminar al usuario',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }

}