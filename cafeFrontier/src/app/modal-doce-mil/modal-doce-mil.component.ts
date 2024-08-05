import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import { acci } from '../class/acci';

@Component({
  selector: 'app-modal-doce-mil',
  templateUrl: './modal-doce-mil.component.html',
  styleUrls: ['./modal-doce-mil.component.css']
})
export class ModalDoceMilComponent implements OnInit {
  vodska:number=1;
  wisky:number=1;
  nobel:number=1;
  jager:number=1;
  campary:number=1;
  vod=19;
  wis=20;
  nob=21;
  jag=22;
  cam=23;
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');

  constructor(private acciones: AccionesService, private miDatePipe: DatePipe, public router: Router
    ,public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  crearVodska() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.vod};
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 12000 * this.vodska;
    data.usuario ={id:4}
    data.cantidad = this.vodska;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Vodska ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }


  crearWisky() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.wis};
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 12000 * this.wisky;
    data.usuario ={id:4}
    data.cantidad =this.wisky;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Wisky ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }


  crearNovel() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.nob};
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 12000 * this.nobel;
    data.usuario ={id:4}
    data.cantidad = this.nobel;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Novel ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }


  crearJager() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.jag};
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 12000 * this.jager;
    data.usuario ={id:4}
    data.cantidad = this.jager;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Jager ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }


  crearCampary() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.cam};
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 12000 * this.campary;
    data.usuario ={id:4}
    data.cantidad = this.campary;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Campary ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

}
