
export class accione {
    id: number;
    caja:number;
    fecha_dia: any= null;
    dia_activo:any =null;
    total_ganado: any = null;
    tipo_accion: string = '';
    estado_de_pago: string='';
    adelanto: string;
    propina!:number;
    cantidad:number;
    tipo_pago:string;
    bonificacion: string;
    comisiones: number;
    estado: any =null;
    fecha_trago:any;
     servicio: {
      id: number;
  
     
    };
    cliente:{
      id:any;
    
    };
    tragos: {
      id: number;
  
     
    };
    usuario: {
   
      id:number;
      color:string;
    };
  
  }