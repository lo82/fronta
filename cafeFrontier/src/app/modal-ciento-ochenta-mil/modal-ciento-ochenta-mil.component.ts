import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import Swal from 'sweetalert2';
import { acci } from '../class/acci';

@Component({
  selector: 'app-modal-ciento-ochenta-mil',
  templateUrl: './modal-ciento-ochenta-mil.component.html',
  styleUrls: ['./modal-ciento-ochenta-mil.component.css']
})
export class ModalCientoOchentaMilComponent implements OnInit {

  jhonnyGr:number=1;
  jhonnyGo:number=1;
  jackGen:number=1;
  jgr=42;
  jgo=43;
  jd=44;
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');

  constructor(private acciones: AccionesService, private miDatePipe: DatePipe, public router: Router
    ,public modalRef: BsModalRef) { }
 

  ngOnInit(): void {
  }

  crearJhonnyGreen() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.jgr};
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 180000 * this.jhonnyGr;
    data.usuario ={id:4}
    data.cantidad =this.jhonnyGr;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Jhonny Green Label ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

  crearJhonnyGolden() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.jgo};
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 180000 * this.jhonnyGo;
    data.usuario ={id:4}
    data.cantidad = this.jhonnyGo;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Jhonny Golden Label ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }


  crearJackGen() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.jd};
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 180000 * this.jackGen;
    data.usuario ={id:4};
    data.cantidad =this.jackGen;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Jack Daniels Gentleman Jack${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }






}
