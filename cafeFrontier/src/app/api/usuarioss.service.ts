import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuarios } from '../class/usuarios';
import { GeneralResponseDTO } from '../class/dto/GeneralResponseDTO';
import { Usuario } from '../usuarios/usuario';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class UsuariossService {
  url = `${environment.HOST}/api/usuarios`;
  u =`${environment.HOST}/api/usuarios/ids`;
  aut = 'http://localhost:8080/api';
  handleError: any;
  [x: string]: any;
  private _refresh$ = new Subject<void>();
  private urlEndPoint:string =  'http://localhost:8080/api/usuarios';
  private urlEndPointFecha:string = 'http://localhost:8080/api/usuariosFecha';
  private urlEndPointRolid:string ='http://localhost:8080/api/usuarios/rol_id';

  private httpHeders = new HttpHeaders({'Content-TYpe': 'application/json'})
  constructor(private http: HttpClient,private routers:Router) { }

  public findAll(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url);
  }

  get refresh$() {
    return this._refresh$;
  }
  public findRol(rolId: number): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url +'/rol_id/' + rolId);
  }

  public registro(usuario: Usuarios): Observable<any> {
    return this.http.post<any>(this.aut + '/usuarios', usuario, cabecera);
  }
  
  putActualizar(data: Usuario, id: number) {
    return this.http
      .put<Usuario>(this.url +'/estado/'  + id, data)
      .pipe(
        map((resp) => new GeneralResponseDTO(resp)),
        catchError((error: any) => this.handleError(error))
      );
  }

  putActualizarColor(data: Usuario, id: number) {
    return this.http
      .put<Usuario>(this.url +'/color/'  + id, data)
      .pipe(
          tap(() => {
            this._refresh$.next();
          })
        );
      
  }


  putActualizarColorMasivo( color:string,id:string) {
    return this.http
      .get<Usuario>(this.u +'/' + color + '/'+ id)
      .pipe(
          tap(() => {
            this._refresh$.next();
           
          })
        );
      
  }



  private isNoAutorizado(e: { status: number; }): boolean{

    if (e.status== 401 || e.status==403){
      this.routers.navigate(['/login'])
      return true;
    }
    return false;
  }


  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url);
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

  getUsuarios(id: any):Observable<Usuario>{
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
  subirFoto(archivo:File , id):Observable<Usuario>{

    let formData = new FormData();
    formData.append("archivo",archivo);

    formData.append("id",id);
    return this.http.post(`${this.urlEndPoint}/upload/`, formData).pipe(
      map((response : any) => response.mascota as Usuario),
      catchError(e =>{
        
        swal.fire('Error al eliminar la mascota',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }

  private listners = new Subject<any>;
  listen():Observable<any>{
    return this.listners.asObservable();
  }

  filter(filterBy: string){
    this.listners.next(filterBy);
  }

}

