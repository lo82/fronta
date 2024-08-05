import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../api/cliente.service';
import { Clientes } from '../class/clientes';
import { acciones } from '../class/acciones';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { Usuarios } from '../class/usuarios';
import { DatePipe } from '@angular/common';
import { AccionesService } from '../api/acciones.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {
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
 ido = 1;
  /////

  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',minute:'numeric' };
  now = new Date();
  /////
  seleccionados: number=1;
  users: Usuarios[] = [];
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');

  client:Clientes[]=[];
 clienteNull = 1;
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
    data.usuario = { id: this.id };

  
      
/*
    if(data.cliente = {id:this.seleccionados}){
      
      data.cliente = {id:this.seleccionados}
    }else{
      data.cliente = {id:this.ido}

    }

*/





data.cliente= {id:this.seleccionados}
  

    //data.total_ganado = 8000;
    data.tragos = { id: this.trago };
    /// cambie formato fecha
    data.servicio={id:1};
    data.comisiones=7000;

    data.dia_activo= this.fechaf1;
    data.fecha_dia = this.fechaf1 +' H '+ this.fech;
   data.total_ganado= "20000"
   
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
    this.modalRef.hide()
    this.router.navigate(['home']);
   
  }

}
