import { Component, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';
import { AsistenciaService } from '../api/asistencia.service';
import { DatePipe } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UsuariossService } from '../api/usuarioss.service';
import { TokenService } from '../api/token.service';
import { Usuario } from '../usuarios/usuario';
import swal from 'sweetalert2';
import { control } from '../class/control';
import { AccionesService } from '../api/acciones.service';
import Swal from 'sweetalert2';
import { ModalAsistenciaComponent } from '../modal-asistencia/modal-asistencia.component';
import { Usuarios } from '../class/usuarios';
import { FormGroup, FormControl } from '@angular/forms';
import { acci } from '../class/acci';
import { Router } from '@angular/router';
import { acciones } from '../class/acciones';

@Component({
  selector: 'app-usauriochica',
  templateUrl: './usauriochica.component.html',
  styleUrls: ['./usauriochica.component.css'],
})
export class UsauriochicaComponent implements OnInit {
  
  datosForm: FormGroup = new FormGroup({
    propina: new FormControl(''),
  });
  private acci: acciones = new acciones();
  propinaT: number;
  seleccionados: string = '';
  lista: string[] = ['tarjeta', 'efectivo'];
  newdata = [];
  open: boolean = false;
  fecha = new Date();
  modalRef: BsModalRef = new BsModalRef();
  fechaf1 = this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  usuarios: Usuario[];
  public usuario: Usuario = new Usuario();
  @Input() user!: string;
  public fotoSeleccionada: File;
  roles;
  iiii: number[] = [];
  use: Usuarios[] = [];
  ids: number[] = [];
template: TemplateRef<void>;
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private accioness: AccionesService,
    private usuarioService: UsuariossService,
    private modalService: BsModalService,
    private miDatePipe: DatePipe,
    private asistencia: AsistenciaService,
    private elelemtos: ElementRef
  ) {}

  ngOnInit() {
    this.users();
    this.usuarioService
      .getUsuario()
      .subscribe((usuarios) => (this.usuarios = usuarios));
    this.usuarioService.findAll().subscribe((data) => {
      this.use = data;
    });
  }

  seleccionado(id: number) {
    this.ids.push(id);

    return id;
  }

  delete(usuario: Usuario): void {
    swal
      .fire({
        title: 'Esta seguro?',
        text: `¿Quiere Eliminar el usuario ${usuario.nombre} ?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.value) {
          this.usuarioService.delete(usuario.id).subscribe((response) => {
            this.usuarios = this.usuarios.filter((usu) => usu !== usuario);
            swal.fire(
              'Usuario Eliminado!',
              `Usuario ${usuario.nombre} eliminado con exito.`,
              'success'
            );
          });
        }
      });
  }

  volver(): void {
    window.history.back();
  }

  actualizar(id: number) {
    const data = new Usuario();
    data.estado = 'activo';

    //dat.usuario.id = id;

    swal
      .fire({
        title: 'Esta seguro?',
        text: `¿Quiere activar al garzón?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, desea activar al garzón!',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.value) {
          this.usuarioService.putActualizar(data, id).subscribe();

          const dat: control = new control();
          dat.hora_entrada = this.fechaf1 + ' H ' + this.fech;
          dat.total_horaextra = '8000';
          dat.usuario = { id: id };
          this.asistencia.create2(dat).subscribe();

          swal.fire(` guardado con exito.`, 'success');

          location.reload();
        }
      });
  }
  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      Swal.fire(
        'Error Seleccionar imagen: ',
        'El archivo debe ser del tipo imagen',
        'error'
      );
      this.fotoSeleccionada = null;
    }
  }

  subirFoto() {
    if (!this.fotoSeleccionada) {
      Swal.fire('Error Upload: ', 'Debe seleccionar una foto', 'error');
    } else {
      this.usuarioService
        .subirFoto(this.fotoSeleccionada, this.usuario.id)

        .subscribe((usuario) => {
          console.log(this.usuario.id);
          this.usuario = usuario;
          Swal.fire(
            'La foto se ha subido correctamente',
            `La foto se ha subido con exito : ${this.usuario.foto}`,
            'success'
          );
        });
    }
  }

  aceptar(id: number) {
    const data = new Usuario();
    data.estado = 'inactivo';

    //dat.usuario.id = id;

    swal
      .fire({
        title: 'Esta seguro?',
        text: `¿Quiere desactivar garzón?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.value) {
          this.usuarioService.putActualizar(data, id).subscribe();

          const dat: control = new control();
          dat.hora_entrada = this.fechaf1 + ' H ' + this.fech;
          dat.total_horaextra = '0';
          dat.usuario = { id: id };
          this.asistencia.create2(dat).subscribe();

          swal.fire(` guardada con exito.`, 'success');

          location.reload();
        }
      });
  }

  users() {
    this.roles = this.tokenService.getUserName();
    console.log(this.roles);
  }

  onCategoriaPressed(id: number, checked: boolean) {
    if (checked) {
      this.newdata.push(id);
    }
  }

  propinaTarjeta() {
    this.accioness.filter('registrado');
    swal
      .fire({
        title: 'Esta seguro?',
        text: `¿Quiere insertar la propina del día con valor ${
          this.propinaT / this.ids.length
        }? `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, desea pagar la transaccion!',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        this.newdata.forEach((data) => {
          this.acci.estado = 'pagado';
          this.acci.estado_de_pago = 'pagado';

          this.acci.propina = this.propinaT / this.ids.length;
          this.acci.tipo_pago = this.seleccionados;
          this.acci.tipo_accion = 'propina';
          this.acci.servicio = { id: 1 };
          this.acci.tragos = { id: 1 };
          this.acci.usuario = { id: data };
          this.acci.fecha_dia = this.fechaf1;
          this.acci.dia_activo = this.fechaf1;

          this.accioness.postCrearAcciones3(this.acci).subscribe(
            (res) => console.log(res),
            (error) => console.log(error)
          );

          swal.fire(
            'propina pagada',

            'success'
          );
     
        });
      });
  }

  openModalGratificacion(templates: TemplateRef<void>) {
    this.modalRef = this.modalService.show(templates);
  }

  openModalAdelanto(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}
