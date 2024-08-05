import { Rol } from "../rol/rol";

export class Usuarios {

    id: number;
    nombre!:string;
    tipo!:string;
    nombre_usuario!:string;
    nombre_segundo!:string;
    apellido!:string;
    apellido_segundo!:string;
    rut!:string;
    color!:string;
    email!:string;
    direccion!:string;
    nombreUsuario!:string;
    fecha_nacimiento!:Date;
    password!:string;
    fecha_in!:string;
    roles!:Rol;
    estado_civil!:string;
    afp!:string;
    plan!:number;
    estado!:string;
    foto:string;
}
