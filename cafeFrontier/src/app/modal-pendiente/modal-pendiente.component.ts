import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { accion } from '../class/accion';
import swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-pendiente',
  templateUrl: './modal-pendiente.component.html',
  styleUrls: ['./modal-pendiente.component.css']
})
export class ModalPendienteComponent implements OnInit {
  seleccionados: string = '';
  now = new Date().toLocaleTimeString('es-cl', {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
  subscription!: Subscription;

  lista: string[] = ['Tarjeta', 'Efectivo'];
  @Input() public ids: any;
  datosForm: FormGroup = new FormGroup({
 
  });
  datoForm: FormGroup = new FormGroup({
 
  });
  constructor(public modalRef: BsModalRef, private acciones: AccionesService, public router: Router) {

    
   }

  ngOnInit(): void {
    
   
  }

  updateE(): void {
    const data = new accion();
    data.estado = 'pagado';
    data.estado_de_pago = 'pagado';
    data.tipo_pago = 'efectivo'
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere pagar el trago?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.acciones.putActualizarAccion(data,this.ids).subscribe(
        
          );
          location.reload();
        ((response: any) => {
          swal.fire(
            'Trago pagado',
            ` trago pagado con exito.`,
            'success'
          )
   
          this.acciones.filter('registrado');
        
    
        });
        this.modalRef.hide()
   
      }


 
      this.modalRef.hide()
        
    })
    this.modalRef.hide()
        
  }

  updateTar(): void {
    const data = new accion();
    data.estado = 'pagado';
    data.estado_de_pago = 'pagado';
    data.tipo_pago = 'tarjeta'
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere pagar el trago?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.acciones.putActualizarAccion(data,this.ids).subscribe(
        
          );
          location.reload();
        ((response: any) => {
         
          swal.fire(
            'Trago pagado',
            ` trago pagado con exito.`,
            'success'
          )
        });
        this.acciones.filter('registrado');
        this.modalRef.hide()
    
      }

 
      
    })

  }


  updateTrans(): void {
    const data = new accion();
    data.estado = 'pagado';
    data.estado_de_pago = 'pagado';
    data.tipo_pago = 'transferencia'
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere pagar el trago?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.acciones.putActualizarAccion(data,this.ids).subscribe(
        
          );
          location.reload();
        ((response: any) => {
         
          swal.fire(
            'Trago pagado',
            ` trago pagado con exito.`,
            'success'
          )
        });
        this.acciones.filter('registrado');
        this.modalRef.hide()
      }


  
 
      
    })

  }






  repetirCada5min() {
    setTimeout(this.notificacion.bind(this), 900000);

  }

  notificacion(){
    
    swal.fire('chica',`termino la hora del trago!`,'success')
    
 
  
  }

}
