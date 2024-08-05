import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { servicios } from '../class/servicios';
import swal from 'sweetalert2';
import { ServiciosService } from '../api/servicios.service';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-adelantos',
  templateUrl: './modal-adelantos.component.html',
  styleUrls: ['./modal-adelantos.component.css']
})
export class ModalAdelantosComponent implements OnInit {
  datosForm: FormGroup = new FormGroup({
    vSer: new FormControl(''),

  });
  now = new Date();
  @Input() public idd: any;
  vSer: any;
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
 
  isSubmitted = false;
  id: any = 1;
  constructor(private miDatePipe:DatePipe, private formBuilder: FormBuilder,public modalRef: BsModalRef ,private servicio: ServiciosService, private acciones:AccionesService) { }

  get f(): { [key: string]: AbstractControl } {
    return this.datosForm.controls;
  }

  ngOnInit(): void {
    this.datosForm = this.formBuilder.group(
      {
        vSer: ['', Validators.required],
        
      },
    );
    console.log(this.idd)
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.datosForm.valid) {
      false
    } else {
      


    }
  }

  crearAdelanto() {

    const data = new servicios();
  
    data.valor = this.datosForm.value.vSer;
    data.metodo_pago = 'Efectivo';
    
  
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere dar el adelanto ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.servicio.postCrearServicios(data).subscribe(res =>
          
       
          this.crearAccionesEfectivo(),
  
        )
        swal.fire(
          'Adelanto Pagado!',
          `Con exito.`,
          'success'
        )
      }
  
    }
  
    )
    console.log('real');
   
  }
  
  crearAccionesEfectivo(){
  
    if(this.id >= 1){
      for (let i = 0; i < 3; i++) {
        this.id[i];
      }
    }
      
    
    const data = new acciones();
     data.servicio = { id: this.id}; 
     data.estado = 'pagado';
     data.fecha_dia = this.fechaf1;
     data.adelanto= this.vSer;
     data.tipo_accion = 'adelanto';
     data.estado_de_pago = 'pagado';
     data.usuario = { id:this.idd};
     data.servicio={id: 1};
     data.tragos={id:1};
     data.dia_activo=this.fechaf1;
     this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
     error => console.log(error));
     this.modalRef.hide()
     
  }
  



}
