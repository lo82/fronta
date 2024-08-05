import { Injectable } from '@angular/core';
import { Total_dia } from '../class/classA';
import { environment } from 'src/environments/environment';
import { Observable, Subject ,catchError, map, throwError} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import { GeneralResponseDTO } from '../class/dto/GeneralResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class TotaldiaService {
  url = `${environment.HOST}/api/totaldia`;
  handleError: any;

  private httpHeders = new HttpHeaders({'Content-TYpe': 'application/json'})

  constructor(private http: HttpClient) { }

  getTotaldia(): Observable<Total_dia[]>{
    return this.http.get<Total_dia[]>(this.url);
  }
  
  crear(total_dia: Total_dia): Observable<Total_dia> {
    console.log(total_dia, "servis")
    return this.http.post<Total_dia>(this.url,total_dia,{headers:this.httpHeders});
  }

  putActualizar(data: Total_dia, id: number) {
    return this.http
      .put<Total_dia>(this.url+'/' + id, data)
      .pipe(
        map((resp) => new GeneralResponseDTO(resp)),
        catchError((error: any) => this.handleError(error))
      );
  }
}
