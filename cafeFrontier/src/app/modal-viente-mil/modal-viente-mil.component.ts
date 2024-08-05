import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import { acci } from '../class/acci';

@Component({
  selector: 'app-modal-viente-mil',
  templateUrl: './modal-viente-mil.component.html',
  styleUrls: ['./modal-viente-mil.component.css']
})
export class ModalVienteMilComponent implements OnInit {
  wiskyDB:number=1;
  wdb=28;

 fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');


  constructor(private acciones: AccionesService, private miDatePipe: DatePipe, public router: Router
    ,public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }



  crearWSDB() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.wdb };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 20000 * this.wiskyDB;
    data.usuario ={id:4}
    data.cantidad =this.wiskyDB;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Whisky Double Black ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }
}
