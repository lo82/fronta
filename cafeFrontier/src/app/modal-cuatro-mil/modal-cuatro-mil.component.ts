import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import { acci } from '../class/acci';

@Component({
  selector: 'app-modal-cuatro-mil',
  templateUrl: './modal-cuatro-mil.component.html',
  styleUrls: ['./modal-cuatro-mil.component.css']
})
export class ModalCuatroMilComponent implements OnInit {
  kunstman:number=1;
  kun=7;
  ngOnInit(): void {
      
  }
  constructor(private acciones: AccionesService, private miDatePipe: DatePipe, public router: Router
    ,public modalRef: BsModalRef) { }
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');


  crearkunstman() {
    const data = new acci();
    data.estado = 'pendiente';

    
    data.estado_de_pago = 'pendiente';
    

   data.tragos = { id: this.kun };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.dia_activo = this.fechaf1;
    data.tipo_accion = 'bar';
    data.total_ganado = 4000 * this.kunstman;
    data.usuario ={id:4}
    data.cantidad = this.kunstman;
    
    
    /////
    this.acciones.postCrearAccioness(data).subscribe(res => console.log(res),
      error => console.log(error));
      Swal.fire(`Kunstman ${data.total_ganado}`, 'a pendiente correctamente');
    this.acciones.filter('registrado');
   this.kunstman = 1;
   this.router.navigate(['home', 'sin usuario']);
   this.modalRef.hide()
  }

}
