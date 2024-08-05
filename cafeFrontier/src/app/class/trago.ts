export class trago{

	id: number;
	nombre_trago: string;
    tipo_trago: string;
    estado_trago: string;
    valor_trago: string;
    iva:string;

    constructor(id: number,
        nombre_trago: string,
        tipo_trago: string,
        estado_trago: string,
        valor_trago: string){
            this.id = id;
            this.nombre_trago = nombre_trago;
            this.tipo_trago = tipo_trago;
            this.estado_trago = estado_trago;
            this.valor_trago = valor_trago;
        }
}