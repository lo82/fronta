import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective, BsModalRef } from 'ngx-bootstrap/modal';
import { AccionesService } from '../api/acciones.service';
import { ClienteService } from '../api/cliente.service';
import { acciones } from '../class/acciones';
import { Clientes } from '../class/clientes';
import { Usuarios } from '../class/usuarios';
import swal from 'sweetalert2';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit {
  @Input() public id: any;
  @Input() public nombre: any;
  treint:boolean=false;
  pies;
  tragos: Array<any> = [];
  listaNumeros: number[] = [1, 2, 3, 4, 5, 6];
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

  tragg: any = 3;

  /////
  
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
    data.usuario = { id: this.id};
    data.cliente= {id:this.seleccionados};
   data.pieza = this.pies;
    //data.total_ganado = 8000;
    data.tragos = { id: this.tragg };
    /// cambie formato fecha
    data.servicio={id:1};
    data.comisiones=10000;
    data.dia_activo= this.fechaf1;
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
    data.total_ganado= "30000"
    /////
  
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

  trein(){
    this.treint = true;
  }


}
