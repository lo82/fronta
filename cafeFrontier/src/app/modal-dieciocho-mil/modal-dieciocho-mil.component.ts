import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import Swal from 'sweetalert2';
import { acci } from '../class/acci';

@Component({
  selector: 'app-modal-dieciocho-mil',
  templateUrl: './modal-dieciocho-mil.component.html',
  styleUrls: ['./modal-dieciocho-mil.component.css']
})
export class ModalDieciochoMilComponent implements OnInit {

  constructor(private acciones: AccionesService, private miDatePipe: DatePipe, public router: Router
    ,public modalRef: BsModalRef) { }

  wiskyB:number=1;
  sheridans:number=1;
  wiskB=26;
  she=27;
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');


  ngOnInit(): void {
  }

  crearWiskyB() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.wiskB };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 18000 * this.wiskyB;
    data.usuario ={id:4}
    data.cantidad = this.wiskB;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Wisky Black ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

  crearSheridans() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.she };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 18000 * this.sheridans;
    data.usuario ={id:4}
    data.cantidad = this.sheridans;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Sheridans ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');

   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }



}
