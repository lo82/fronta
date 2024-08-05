import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject,throwError } from 'rxjs';
import { Acciones } from '../class/classA';
import { catchError, map } from 'rxjs/operators'
import { Total_dia } from '../class/classA';

@Injectable({
  providedIn: 'root'
})
export class CajaService {
  url = `${environment.HOST}/api/acciones`;
  url2 = `${environment.HOST}/api`;

  constructor(private http: HttpClient,private miDatePipe: DatePipe) { }

cierrecaja(): Observable<Acciones[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

   
    return this.http.get<Acciones[]>(this.url + '/informes/' + fechaf1 + '/' + fechaf2); 

  }

  bcaja(): Observable<Total_dia[]>{
    let fecha1=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');

 
    return this.http.get<Total_dia[]>(this.url2 + '/bcaja/' + fechaf1); 

  }

  public cajatotal(): Observable<Acciones[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

    return this.http.get<Acciones[]>(this.url + '/cierrecaja/' + fechaf1 + '/' + fechaf2); 

  }

  public cajatotalDatos(): Observable<Acciones[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

    return this.http.get<Acciones[]>(this.url + '/cierrecajadatos/' + fechaf1 + '/' + fechaf2); 

  }


  getEventos(): Observable<Acciones[]>{
    let fecha1=new Date()
    let fecha2=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
    //return of (USUARIOS);
    return this.http.get<Acciones[]>(this.url+ '/informes/' + fechaf1 + '/' + fechaf2).pipe(
      catchError(e=> {
        return throwError(e);
      }),
      map((response) => {
      let rev = response as Acciones[];
      return rev.map(res =>{
        return res;
      });
    }) 
    )  
  }

  public findia(): Observable<Acciones[]>{
    let fecha1=new Date()
    const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
    console.log(fechaf1)
    return this.http.get<Acciones[]>(this.url + '/findia/' + fechaf1 ).pipe(
      catchError(e=> {
        return throwError(e);
      }),
      map((response) => {
      let rev = response as Acciones[];
      return rev.map(res =>{
        return res;
      });
    }) 
    )  
}

getInformes(fecha1,fecha2): Observable<Acciones[]>{

  const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/informes/' + fechaf1 + '/' + fechaf2).pipe(
    catchError(e=> {
      return throwError(e);
    }),
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}

getInformeDiario(fecha1,fecha2): Observable<Acciones[]>{

  const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/informeDiario/' + fechaf1 + '/' + fechaf2).pipe(
    catchError(e=> {
      return throwError(e);
    }),
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}






getInformesusuario(ids): Observable<Acciones[]>{
  let fecha1=new Date()
  let fecha2=new Date()
  const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/cierrecaja/id/' + fechaf1 + '/' + fechaf2 + '/' +ids).pipe(
    catchError(e=> {
      return throwError(e);
    }),
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}

getInformesusuariosemana(id:number,fecha1:string,fecha2:string): Observable<Acciones[]>{
  const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');

  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/informes/id/' + fechaf1 + '/' + fechaf2 + '/' +id).pipe(
    catchError(e=> {
      return throwError(e);
    }),
  
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}

getEventosid(id): Observable<Acciones[]>{
  let fecha1=new Date()
  let fecha2=new Date()
  const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/informes/id/' + fechaf1 + '/' + fechaf2 + '/' +id).pipe(
    catchError(e=> {
      return throwError(e);
    }),
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}

getInformesFecha(fecha1,fecha2): Observable<Acciones[]>{

  const fechaf1 = this.miDatePipe.transform(fecha1, 'yyyy-MM-dd');
  const fechaf2 = this.miDatePipe.transform(fecha2, 'yyyy-MM-dd');
  console.log(fechaf2)
  //return of (USUARIOS);
  return this.http.get<Acciones[]>(this.url+ '/informes/' + fechaf1 + '/' + fechaf2).pipe(
    catchError(e=> {
      return throwError(e);
    }),
    map((response) => {
    let rev = response as Acciones[];
    return rev.map(res =>{
      return res;
    });
  }) 
  )  
}


}

//cuando inicio el dia guardar el dia despues finalizo y mando esa fecha
// todo esta hecho con dia automatico si la guardo va ser fija si pasa dejar con la fecha fija fecha global e ingresar con la fecha guardada o ingresada global
// ocupar un campo en acciones y que señale con una a el dia activo y la b seria el otro dia al finalizar la caja un if 
