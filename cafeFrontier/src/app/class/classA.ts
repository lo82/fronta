import { Usuario } from "../usuarios/usuario";

//import { Clientes } from "./clientes";



export class Acciones {
    [x: string]: any;
    id: number;
    fecha_dia: string;
    propina:number;
    fecha_trago: string;
    total_ganado: number;
    iva:number;
    pieza:string;
    tipo_accion: string;
    tipo_pago: string;
    estado_de_pago: string;
    estado: string;
    cantidad:number;
    adelanto: number;
    comisiones: number;
    pendiente: string;
    checked:boolean;
    dia_activo: string;
    bonificacion: number;
    caja: number;
    servicio: Servicio;
    usuario: Usuario;  
    tragos: Trago;
    cliente:Clientes;
    garzon:garzon;
   
  }

  export class Trago{

	id: number;
	nombre_trago: string;
    tipo_trago: string;
    estado_trago: string;
    valor_trago: number;
    iva:number;
    metodo_pago:string;
  }

  export class Servicio {

    id: number;
    detalle_servicio:string;
    estado_Servicio:string;
    iva: number;
    metodo_pago: string;
    nombre_servicio: string;
    pieza: number;
    tipo_servicio:string;
    valor: number;
  }

  export class Total_dia {
    id:number;
    fechadia: string;
    ingreso_caja:number;
    total: number;
    estado:string;
  
  }

  export class Boxmarcado{
    box=[];
  }

  export class Asistecia_component{
    id:number;
    hora_salida:string;
    hora_entrada:string;
    total_horaextra:string;
    estado:string;
    fecha:Date;
    usuario:Usuario;
  }

  export class usuario{
    id:number;
    nombre:string;
    nombre_usuario:string;
    color:string;
  }


  export class Clientes{
    id:any;
    nombre_cliente;
    estado:string;
  }


export class garzon {
  id:number;
  estado:string;
  nombre_garzon:string;

};