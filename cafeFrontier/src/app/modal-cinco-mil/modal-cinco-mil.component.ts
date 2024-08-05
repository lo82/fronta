import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import Swal from 'sweetalert2';
import { acci } from '../class/acci';

@Component({
  selector: 'app-modal-cinco-mil',
  templateUrl: './modal-cinco-mil.component.html',
  styleUrls: ['./modal-cinco-mil.component.css']
})
export class ModalCincoMilComponent implements OnInit {

  constructor(private acciones: AccionesService, private miDatePipe: DatePipe, public router: Router
    ,public modalRef: BsModalRef) { }
  bebida:number=1;
  tonica:number=1;
  energetica:number=1;
  agua:number=1;
  tonic=9;
  ener=10;
  mineral=11;
  beb=8;  
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');

  ngOnInit(): void {
  }

  crearBebida() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.beb };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 5000 * this.bebida;
    data.usuario ={id:4}
    data.cantidad=this.bebida;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Bebida ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');
   this.bebida = 1;
   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

  crearTonica() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.tonic };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 5000 * this.tonica;
    data.usuario ={id:4}
    data.cantidad = this.tonica;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Tonica ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');
   this.tonica = 1;
   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

  crearEnergetica() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.ener};
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 5000 * this.energetica;
    data.usuario ={id:4}
    data.cantidad = this.energetica;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Energetica ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');
   this.energetica = 1;
   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

  crearMineral() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.mineral };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 5000 * this.agua;
    data.usuario ={id:4}
    data.cantidad = this.agua;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Agua Mineral ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');
   this.agua = 1;
   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }



}
