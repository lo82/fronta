import { Rol } from "../rol/rol";

export class NuevoUsuario {
    id: number;
    nombre!:string;
    fecha_nacimiento:string;
    nombre_segundo!:string;
    apellido!:string;
    apellido_segundo!:string;
    rut!:string;
    color!:string;
    email!:string;
    direccion!:string;
    nombreUsuario!:string;
    password!:string;
    fecha_in!:Date;
    roles!:Rol;
    estado_civil!:string;
    afp!:string;
    plan!:number;
    estado!:string;
    foto:string;
    tipo!:string;
    primer_nombre: any;
    segundo_nombre: any;

    constructor(
        id: number,
        nombre:string,
        fecha_nacimiento:string,
        nombre_segundo:string,
        apellido:string,
        apellido_segundo:string,
        rut:string,
        color:string,
        email:string,
        direccion:string,
        nombreUsuario:string,
        password:string,
        fecha_in:Date,
        roles:Rol,
        estado_civil:string,
        afp:string,
        plan:number,
        estado:string,
        foto:string,
        tipo:string,
        primer_nombre: any,
        segundo_nombre: any
    ) {

        this.id = id;
        this.nombre = nombre;
        this.fecha_nacimiento = fecha_nacimiento;
        this.apellido = apellido;
        this.apellido_segundo = apellido_segundo;
        this.rut = rut;
        this.color = color;
        this.email = email;
        this.direccion = direccion;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.fecha_in = fecha_in;
        this.roles = roles;
        this.estado_civil = estado_civil
        this.afp = afp;
        this.plan = plan;
        this.estado= estado;
        this.foto = foto;
        this.tipo = tipo;
        this.primer_nombre = primer_nombre;
        this.nombre_segundo = nombre_segundo;
        
    }
}