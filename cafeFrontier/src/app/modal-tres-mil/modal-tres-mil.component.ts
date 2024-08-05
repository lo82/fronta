import { Component, OnInit } from '@angular/core';
import { acciones } from '../class/acciones';
import { AccionesService } from '../api/acciones.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { acci } from '../class/acci';

@Component({
  selector: 'app-modal-tres-mil',
  templateUrl: './modal-tres-mil.component.html',
  styleUrls: ['./modal-tres-mil.component.css']
})
export class ModalTresMilComponent implements OnInit {
  cerveza:number=6; 
  energetica:number = 5;
  ener:number=1;
  cer:number=1;
  constructor(private acciones: AccionesService, private miDatePipe: DatePipe, public router: Router
    ,public modalRef: BsModalRef) { }
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  ngOnInit(): void {
  }

  crearCerveza() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    
    //data.total_ganado = 12000;
   data.tragos = { id: this.cerveza };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 3000 * this.cer;
    data.usuario ={id:4}
    data.cantidad =this.cer;   
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Cerveza ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');
   this.cer = 1;
   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

  crearEnergetica() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    
    //data.total_ganado = 12000;
   data.tragos = { id: this.energetica };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 3000 * this.ener;
    data.usuario ={id:4}
    data.cantidad = this.ener;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Energetica ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');
   this.ener = 1;
   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

  borrar(){
    this.cer =1;
    this.ener =1;
  }

}
