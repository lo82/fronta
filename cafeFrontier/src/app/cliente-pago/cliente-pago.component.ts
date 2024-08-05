import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../api/cliente.service';
import { Clientes } from '../class/clientes';
import { AccionesService } from '../api/acciones.service';
import { Boxmarcado, Acciones } from '../class/classA';

@Component({
  selector: 'app-cliente-pago',
  templateUrl: './cliente-pago.component.html',
  styleUrls: ['./cliente-pago.component.css']
})
export class ClientePagoComponent implements OnInit {
  total: number = 0;
  
 open = false;
 acci:Acciones[]=[];
 ids:number;
 client: Array<Clientes>;
 s:string ='hola';
 public isCollapsed = false;
  constructor(private clientess:ClienteService,private acciones: AccionesService) { }
  seleccionado(id: number) {
   this.ids = id;
   console.log(this.ids);

   this.acciones.pagoPendiente(this.ids).subscribe((data) => {

     this.acci = data;


   });
   return id;
 }
  ngOnInit(): void {
    this.clientess.findAll().subscribe((data) => {
      this.client = data;
    });
  



  }


  calcularTotal() {
    this.total = this.acci.reduce((total, elemento) => total + elemento.tragos.valor_trago, 0);
  }


}





