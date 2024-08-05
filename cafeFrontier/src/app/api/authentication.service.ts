import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtModel } from '../class/jwtModel';
import { LoginUsuario } from '../class/LoginUsuario';
import { NuevoUsuario } from '../class/NuevoUsuario';
import { map } from 'rxjs/operators';



const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private router: Router) {}

  public roles: Array<string> = [];
  
  private authURL = 'http://localhost:8080/api/auth/';
  aut = 'http://localhost:8080/api';

  public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authURL + 'login', usuario, cabecera).pipe(
      map(userData => {
      
        const token  = 'Bearer '+ userData.token;
        sessionStorage.setItem('token', token);
        const rolesStr: any[] = userData.authorities;
        sessionStorage.setItem('authority', rolesStr[0]);
        const nombre = userData.nombreUsuario;
        sessionStorage.setItem('nombre', nombre);
        return userData;
        
      })
     
    );;
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.aut + '/usuarios', usuario, cabecera);
  }

  isLoggedIn() {
    const token = sessionStorage.getItem('token');
    return !(token === null);
  }

  permisoRol(rol: string) {
    return sessionStorage.getItem('authority') === 'ROLE_' + rol;
  }
  
  permisoRolAdmin() {
    return this.permisoRol('ADMIN');
  } 
  
  permisoRolChica() {
    return this.permisoRol('CHICA');
  }
  
  permisoRolMesero() {
    return this.permisoRol('MESERO');
  }

nombreUsuario(){
  this.roles = [];
  return sessionStorage.getItem('nombre');
}

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('authority');
    this.router.navigate(['login']);
  }


}
