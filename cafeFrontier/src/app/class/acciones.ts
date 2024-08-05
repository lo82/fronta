import { Usuario } from "../usuarios/usuario";
import { Clientes } from "./clientes";
import { servicios } from "./servicios";
import { trago } from "./trago";


export class acciones {
  id: number;
  caja: number;
  pieza: string;
  fecha_dia: any = null;
  dia_activo: any = null;
  total_ganado: any = null;
  tipo_accion: string = '';
  estado_de_pago: string = '';
  iva:number;
  propina_efectivo: number;
  propina_tarjeta: number;
  adelanto: string;
  propina!: number;
  cantidad: number;
  tipo_pago: string;
  bonificacion: string;
  comisiones: number;
  estado: any = null;
  fecha_trago: any;
  servicio: {
    id: number;


  };
  cliente: {
    id: any;

  };
  tragos: {
    id: number;


  };
  usuario: {

    id: number[];

  };

}


