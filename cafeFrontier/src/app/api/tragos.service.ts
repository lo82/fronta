import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { trago } from '../class/trago';
import { Usuarios } from '../class/usuarios';

@Injectable({
  providedIn: 'root'
})
export class TragosService {
  url = `${environment.HOST}/api/tragos`;

  constructor(private http: HttpClient) { }

  public findAll(): Observable<trago[]> {
    return this.http.get<trago[]>(this.url);
  }
}
