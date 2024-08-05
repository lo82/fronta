import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AccionesService } from '../api/acciones.service';
import { ClienteService } from '../api/cliente.service';
import { UsuariossService } from '../api/usuarioss.service';
import { acciones } from '../class/acciones';
import { Clientes } from '../class/clientes';
import { Usuarios } from '../class/usuarios';
import { MenuClienteComponent } from '../menu-cliente/menu-cliente.component';
import { MenuClientComponent } from '../menu-client/menu-client.component';
import { MenuClientessComponent } from '../menu-clientess/menu-clientess.component';

@Component({
  selector: 'app-modal-trago-c',
  templateUrl: './modal-trago-c.component.html',
  styleUrls: ['./modal-trago-c.component.css']
})
export class ModalTragoCComponent implements OnInit {

  tragos: Array<any> = [];

  @ViewChild('modalone')
  public modalone!: ModalDirective;
  changedDate: string | null = '';
  @ViewChild('closebutton') closebutton: any;
  @Input() public id: any;
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


   
      const initialState = {
        id:this.id,
        nombre: this.nombre
    };
    this.modalRef.hide()
    this.modalRef = this.modalService.show(MenuClienteComponent, {initialState, class: 'modal-l'});
    
   
  /*
    let data :acciones = new acciones();
    
    data.estado = this.estado;
    
    data.tipo_accion = 'trago';
    data.estado_de_pago = 'pendiente';
    data.usuario = { id: this.idd };
    data.cliente= {id:this.seleccionados};
    console.log(data.cliente= {id:Number(this.seleccionados)})
    //data.total_ganado = 8000;
    data.tragos = { id: this.trago };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1;
    data.comisiones="8000";
    data.fecha_dia = this.fechaf1 + this.fech;
    data.dia_activo= this.fechaf1;
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.comisiones="10000";
    /////
    console.log(data);
    this.accioness.postCrearAcciones(data).subscribe(res => console.log(res.cliente),
      error => console.log(error));
    this.modalRef.hide()
    this.accioness.filter('registrado');
    this.router.navigate(['home', this.nombre]);
*/
  }



  crearAccion30() {
    const initialState = {
      id:this.id,
      nombre: this.nombre
  };
  this.modalRef.hide()
  this.modalRef = this.modalService.show(MenuClientComponent, {initialState, class: 'modal-l'});
  
    
  }

  crearAccion40() {
    const initialState = {
      idd:this.id,
      nombre: this.nombre
  };
  this.modalRef.hide()
  this.modalRef = this.modalService.show(MenuClientessComponent, {initialState, class: 'modal-l'});
  
  }

}