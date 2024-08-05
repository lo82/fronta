import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { servicios } from '../class/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  url = `${environment.HOST}/api`;
  private refresh = new Subject<void>();
  constructor(private http: HttpClient) { }

  get refresh$() {
    return this.refresh;
  }
  
  
  postCrearServicios(data: servicios) {
    return this.http
      .post<servicios>(
        this.url + '/servicios',
        data
      ).pipe(
        tap(() => {
          this.refresh.next();
        })
      );
  }

}
