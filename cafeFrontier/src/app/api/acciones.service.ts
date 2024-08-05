import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject,throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { accion } from '../class/accion';
import { acciones } from '../class/acciones';
import { GeneralResponseDTO } from '../class/dto/GeneralResponseDTO';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Acciones, usuario } from '../class/classA';
import { Usuario } from '../usuarios/usuario';
import { acci } from '../class/acci';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { accione } from '../class/ac';
import { timer } from 'rxjs';
const TIME=5000;
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {
  url = `${environment.HOST}/api/acciones`;
  url2 = `${environment.HOST}/api`;
  private urlEndPoint:string = 'http://localhost:8080/api/acciones';
  private httpHeders = new HttpHeaders({'Content-TYpe': 'application/json'})
  private refresh = new Subject<void>();
  constructor(private http: HttpClient,private miDatePipe: DatePipe,private routers:Router) { }


  private isNoAutorizado(e): boolean{

    if (e.status== 401 || e.status==403){
      this.routers.navigate(['/login'])
      return true;
    }
    return false;
  }

  get refresh$() {
    return this.refresh;
  }
  
  public crear(): Observable<accion[]> {
    return this.http.get<accion[]>(this.url);
  }

  postCrearAcciones(data: Acciones) {
    return this.http
      .post<Acciones>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }



  postCrearAcciones4(data: accione) {
    return this.http
      .post<acciones>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
      
  }

  postCrearAcciones3(data: acciones) {
    return this.http
      .post<acciones>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
      
  }

  postCrearAccioness(data: acci) {
    return this.http
      .post<acci>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }


  postCrearAcciones2(data: accion) {
    return this.http
      .post<accion>(
        this.url,
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

  createser(cafe :acciones) : Observable<acciones>{
    return this.http.post<acciones>(this.urlEndPoint, cafe,{headers: this.httpHeders}).pipe(
      map((response:any)=> response.usuario as acciones),
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

  public findAll(): Observable<Acciones[]> {
    return this.http.get<Acciones[]>(this.url);
  }

  pollAcciones(): Observable<Acciones[]> {
    return timer(0,TIME).pipe(switchMap(() => this.findAll()));
}


  public cierrecaja(): Observable<accion[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

    console.log(fechaf1,fechaf2)
    return this.http.get<accion[]>(this.url + '/informes/' + fechaf1 + '/' + fechaf2); 

  }

  public cajatotal(): Observable<accion[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

    return this.http.get<accion[]>(this.url + '/cierrecaja/' + fechaf1 + '/' + fechaf2); 

  }
  

  public chicaportrago(id: number): Observable<accion>{
   return this.http.get<accion>(this.url + '/tragos/' + id); 
  }

  public pagocliente(id: number): Observable<Acciones[]>{
    return this.http.get<Acciones[]>(this.url + '/pagocliente/' + id); 
   }

  buscarPorDia(nombre: string,fecha: string): Observable<accion[]>{
    console.log(fecha)
    return this.http.get<accion[]>(this.url + '/dia/' + nombre + '/' + fecha); 
  }

  putActualizarAccion(data: accion, id: number) {
    return this.http
      .put<accion>(this.url2 + '/accionestado/' + id, data)
      .pipe(
        map((resp) => new GeneralResponseDTO(resp)),
        catchError((error: any) => this.handleError(error))
      );
  }
  putActualizarAccion1(data: Acciones, id: number) {
    return this.http
      .put<accion>(this.url2 + '/accionestado/' + id, data)
      .pipe(
        map((resp) => new GeneralResponseDTO(resp)),
        catchError((error: any) => this.handleError(error))
      );
  }


  handleError(error: any): any {
    throw new Error('error');
  }

  getListaChicasPorTrago(id: number): Observable<accion[]>{

    return this.http.get<accion[]>(this.url + '/tragos/'  + id); 

  }


  private listners = new Subject<any>;
  listen():Observable<any>{
    return this.listners.asObservable();
  }

  filter(filterBy: string){
    this.listners.next(filterBy);
  }

  public nombreusuarioid (nombre: string): Observable<Usuario>{
    console.log(nombre);
    return this.http.get<Usuario>(this.url2 + '/nombreusuarioid/' + nombre); 

   }

   public pagoPendiente(id: number): Observable<Acciones[]>{
    return this.http.get<Acciones[]>(this.url + '/pagoclientepyp/' + id); 
   }


}
