import { Clientes } from "./clientes";



export class accion {
  id: any;
  fecha_dia: any = null;
  total_ganado: any = null;
  tipo_accion: string = '';
  estado_de_pago: string = '';
  estado: string;
  adelanto: string;
  tipo_pago:string;
  comisiones: string;
  fecha_trago:string;
  cantidad:number;
  checked:boolean;
  cliente: Clientes;
  
  servicio: {
    id: number;
    detalle_servicio: string;
    estado_servicio: string;
    iva: string;
    metodo_pago: string;
    pieza: string;
    tipo_servicio: string;
    valor: string;
    nombre_servicio:string;
  };
  tragos: {
    id: number;
    estado_trago: string;
    iva: string;
    nombre_trago: string;
    total_ganado: string;
    valor_trago:string;
  };
  usuario: {
    id: number;
    nombre: string;
    tipo: string;
    nombreUsuario:string;
  };

 


}