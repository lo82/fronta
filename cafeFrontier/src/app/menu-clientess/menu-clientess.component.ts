import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective, BsModalRef } from 'ngx-bootstrap/modal';
import swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { ClienteService } from '../api/cliente.service';
import { acciones } from '../class/acciones';
import { Clientes } from '../class/clientes';
import { Usuarios } from '../class/usuarios';

@Component({
  selector: 'app-menu-clientess',
  templateUrl: './menu-clientess.component.html',
  styleUrls: ['./menu-clientess.component.css']
})
export class MenuClientessComponent implements OnInit {
  @Input() public idd: any;
  @Input() public nombre: any;
  tragos: Array<any> = [];
cuaren =false;
  @ViewChild('modalone')
  public modalone!: ModalDirective;
  changedDate: string | null = '';
  @ViewChild('closebutton') closebutton: any;

  estado: string = 'pendiente';
  tipo_accion: string = 'servicio';
  estado_de_pago: string = 'pendiente';
  total_ganado: any = 20000;
  servicio: any = 1;
  ///////cambio id
  trag: any = 4;
  pies;
  listaNumeros: number[] = [1, 2, 3, 4, 5, 6];
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

  client:Clientes[]=[];
 
  constructor(private clientess:ClienteService,public modalRef: BsModalRef,private miDatePipe: DatePipe,public router: Router,private accioness: AccionesService) { }

  ngOnInit(): void {
    this.clientess.findAll().subscribe((data) => {
      this.client = data;
  
    
  
    });
  }



  guardar(){

    let data :acciones = new acciones();
    
    data.estado = this.estado;
    
    data.tipo_accion = 'trago';
    data.estado_de_pago = 'pendiente';
    data.usuario = { id: this.idd };
    data.cliente= {id:this.seleccionados}
    //data.total_ganado = 8000;
    data.pieza = this.pies;
    data.tragos = { id: this.trag };
    /// cambie formato fecha
    data.servicio={id:1};
    data.fecha_dia = this.fechaf1;
    data.comisiones=15000;
    data.total_ganado= "40000"

    data.dia_activo= this.fechaf1;
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;

    /////
    console.log(data);
    this.accioness.postCrearAcciones3(data).subscribe(res => console.log(res.cliente),
      error => console.log(error));


    this.accioness.filter('registrado');
    swal.fire(
      'Trago a pendiente!',
      `Con exito.`,
      'success'
    )
    this.router.navigate(['home']);
    this.modalRef.hide()
  }


  cuarenta(){
    this.cuaren = true;
  }


}
