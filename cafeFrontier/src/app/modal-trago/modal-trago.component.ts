import { DatePipe, WeekDay } from '@angular/common';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { accion } from '../class/accion';
import { acciones } from '../class/acciones';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuarios } from '../class/usuarios';
import { ClienteService } from '../api/cliente.service';
import { Clientes } from '../class/clientes';
import { MenuClienteComponent } from '../menu-cliente/menu-cliente.component';

@Component({
  selector: 'app-modal-trago',
  templateUrl: './modal-trago.component.html',
  styleUrls: ['./modal-trago.component.css']
})
export class ModalTragoComponent implements OnInit {
  
  tragos: Array<any> = [];

  @ViewChild('modalone')
  public modalone!: ModalDirective;
  changedDate: string | null = '';
  @ViewChild('closebutton') closebutton: any;
  @Input() public idd: any;
  @Input() public nombre: any;
  estado: string = 'pendiente';
  tipo_accion: string = 'servicio';
  estado_de_pago: string = 'pendiente';
  total_ganado: any = 20000;
  servicio: any = 1;
  ///////cambio id
  trago: any = 2;
  tragg: any = 3;
  trag: any = 4;
  /////
    id: any =1;
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',minute:'numeric' };
  now = new Date();
  /////
  seleccionados: number;
  users: Usuarios[] = [];
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  ////
  client:Clientes[]=[];
  ido: any =1;
  constructor(private miDatePipe: DatePipe,private clientess:ClienteService,private modalService: BsModalService,public modalRef: BsModalRef, private accioness: AccionesService, public router: Router,   private usuario: UsuariossService,) {
    this.modalRef = modalRef

  }



  ngOnInit(): void {
   console.log(this.fech);
   this.usuario.findAll().subscribe((data) => {
    this.users = data;


  });

    this.clientess.findAll().subscribe((data) => {
      this.client = data;
  
    
  
    });


  }

  crearAccion20() {
    const data = new acciones();
    data.estado = 'pendiente';

    data.tipo_accion = 'trago';
    data.estado_de_pago = 'pendiente';
    data.usuario = { id: this.idd };
    //data.total_ganado = 12000;
    data.tragos = { id: this.trago };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;

    data.comisiones=12000;
    
    /////
    this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));
    this.modalRef.hide();
    this.accioness.filter('registrado');
    this.router.navigate(['home', this.nombre]);

  }



  crearAccion30() {
    const data = new acciones();
    data.estado = 'pendiente';

    data.tipo_accion = 'trago';
    data.estado_de_pago = 'pendiente';
    data.usuario = { id: this.idd };
    //data.total_ganado = 12000;
    data.tragos = { id: this.tragg };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;

    data.comisiones=12000;
    
    /////
    this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));
    this.modalRef.hide();
    this.accioness.filter('registrado');
    this.router.navigate(['home', this.nombre]);
  }

  crearAccion40() {
    const data = new acciones();
    data.estado = 'pendiente';

    data.tipo_accion = 'trago';
    data.estado_de_pago = 'pendiente';
    data.usuario = { id: this.idd };
    //data.total_ganado = 16000;
    data.tragos = { id: this.trag };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.comisiones=16000;
    data.dia_activo = this.fechaf1;
    /////
    this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res),
      error => console.log(error));
    this.modalRef.hide();
    this.accioness.filter('registrado');
    this.router.navigate(['home', this.nombre]);
  }





}
