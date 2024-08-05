import { Component, ElementRef, Input, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Acciones, Boxmarcado, usuario } from '../class/classA';
import { AccionesService } from '../api/acciones.service';
import { Usuario } from '../usuarios/usuario';
import { UsuariossService } from '../api/usuarioss.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal-pago',
  templateUrl: './modal-pago.component.html',
  styleUrls: ['./modal-pago.component.css']
})
export class ModalPagoComponent implements OnInit {
  @Input() public valor: any;
  modalRef: BsModalRef = new BsModalRef();
  constructor(    private elelemtos: ElementRef,     private usuario: UsuariossService,   private acciones: AccionesService,) { }
  private boxmarcado: Boxmarcado = new Boxmarcado();
  private acci: Acciones = new Acciones();
  ngOnInit(): void {
    this.valor;
  }

  efectivo(){
    swal.fire({
      closeButtonHtml: 'x',
      title: 'Esta seguro?',
      text: `¿Quiere pagar el trago valor de total=` + this.valor+' con efectivo',
      icon: 'warning',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      showCancelButton: true,
      
      closeButtonAriaLabel: '',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      denyButtonColor: 'blue',
      confirmButtonText: 'Efectivo!',
      allowOutsideClick: false,
      cancelButtonText: 'cancelar',
      buttonsStyling: true,
      showCloseButton: true,
     
  
    }).then(resultado =>
     {
      if (resultado.isConfirmed) {

        let chk = this.elelemtos.nativeElement.querySelectorAll(".chk_sel_box"); let newdata = [];
        chk.forEach(data => {
          if (data['checked']) {
            newdata.push(data['value']);

            this.boxmarcado.box = newdata;
            this.boxmarcado.box.forEach(element => {

              this.acci.id = element
              //this.acci.tragos.valor_trago= element.valor_trago
              this.acci.estado = 'pagado';
              this.acci.estado_de_pago = 'pagado';
              this.acci.tipo_pago = 'efectivo'

              this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

              );


            })



          }

        });
        ((response: any) => {


        });
        swal.fire(
          'Trago pagado con transferencia',
          ` trago pagado con exito.`,
          'success'
        )
       
        this.modalRef.hide()
        this.acciones.filter('registrado');
     
        }
      }       
        
        )}

      
      }
        



    
