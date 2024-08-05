import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import Swal from 'sweetalert2';
import { acci } from '../class/acci';

@Component({
  selector: 'app-modal-trinta-mil',
  templateUrl: './modal-trinta-mil.component.html',
  styleUrls: ['./modal-trinta-mil.component.css']
})
export class ModalTrintaMilComponent implements OnInit {
  wisky:number=1;
  wiskyG:number=1;
  wiskyGold:number=1;
  wiskyGen:number=1;
  wisk=29;
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');

  constructor(private acciones: AccionesService, private miDatePipe: DatePipe, public router: Router
    ,public modalRef: BsModalRef) { }


  ngOnInit(): void {
  }

  crearW() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.wisk };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 30000 * this.wisky;
    data.usuario ={id:4}
    data.cantidad = this.wisky;  
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Whisky ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }


  crearWG() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.wisk };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 30000 * this.wiskyG;
    data.usuario ={id:4}
    data.cantidad = this.wiskyG;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Whisky Green ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

  crearWGOLD() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.wisk };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 30000 * this.wiskyGold;
    data.usuario ={id:4}
    data.cantidad =this.wiskyGold;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Whisky Gold ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }



  crearWGGentleman() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.wisk };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 30000 * this.wiskyGen;
    data.usuario ={id:4}
    data.cantidad = this.wiskyGen;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Whisky Gentleman Jack ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }



}
