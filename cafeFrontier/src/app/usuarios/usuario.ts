import { Rol } from "../rol/rol";

export class Usuario {
    id: number;
    nombre!:string;
    imposiciones!:number;
    fecha_nacimiento!:Date;
    nombre_segundo!:string;
    apellido!:string;
    apellido_segundo!:string;
    rut!:string;
    color!:string;
    email!:string;
    direccion!:string;
    nombreUsuario!:string;
    password!:string;
    fecha_in!:string;
    roles!:Rol;
    estado_civil!:string;
    afp!:string;
    plan!:number;
    estado!:string;
    foto:string;
    tipo!:string;

}
