import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { control } from '../class/control';
import { Usuario } from '../usuarios/usuario';
import swal from 'sweetalert2';
import { UsuariossService } from '../api/usuarioss.service';
import { DatePipe } from '@angular/common';
import { AsistenciaService } from '../api/asistencia.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-asistencia',
  templateUrl: './modal-asistencia.component.html',
  styleUrls: ['./modal-asistencia.component.css']
})
export class ModalAsistenciaComponent implements OnInit {
  @Input() public idd: any;
  @Input() public nombre: any;
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  datosForm: FormGroup = new FormGroup({
    vSer: new FormControl(''),
    
  });
  valor:any;
  constructor(private formBuilder: FormBuilder,
    private miDatePipe: DatePipe,
    private asistencia:AsistenciaService,
    private usuarioService: UsuariossService,
   public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.datosForm = this.formBuilder.group(
      {
        valor: ['', Validators.required],
      },
    );
  
  }

  aceptar(){
    const data = new Usuario();
    data.estado = 'activo';
   
   
    //dat.usuario.id = id;


    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere activar y pagar piso?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        this.usuarioService.putActualizar(data, this.idd).subscribe(

        );

        const dat:control = new control();
        dat.hora_entrada = this.fechaf1 +' H '+ this.fech;
        dat.total_horaextra= this.valor;
        dat.usuario ={id:this.idd};;
          this.asistencia.create2(dat).subscribe(
          
            );
            
            swal.fire(
              'Asistencia',
              ` guardada con exito.`,
              'success'
            )
            
      

        location.reload();
       
      }

    }

    )


  }




}
