import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { horario } from '../class/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  url = `${environment.HOST}/api`;
  private refresh = new Subject<void>();
  constructor(private http: HttpClient) { }

  get refresh$() {
    return this.refresh;
  }

  mostrarHorario(id: number):Observable<horario[]>{
    return this.http.get<horario[]>(this.url + '/horarios/' + id);
  }


}
