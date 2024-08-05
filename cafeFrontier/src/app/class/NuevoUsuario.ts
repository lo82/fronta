import { Rol } from "../rol/rol";

export class NuevoUsuario {
  
  nombre: string;
  apellido!: string;
  rut!: string;
  nombreUsuario: string;
  email: string;
  roles: string;
  password: string;

  constructor( nombre: string,apellido: string,rut:string, nombreUsuario: string, email: string, password: string, roles:string) {
 
      this.nombre = nombre;
      this.apellido = apellido;
      this.rut = rut;
      this.nombreUsuario = nombreUsuario;
      this.email = email;
      this.password = password;
      this.roles = roles;
  }
}
