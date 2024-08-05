import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbCalendar, NgbDateAdapter, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccionesService } from '../api/acciones.service';
import { AuthenticationService } from '../api/authentication.service';
import { ClienteService } from '../api/cliente.service';
import { HorarioService } from '../api/horario.service';
import { TokenService } from '../api/token.service';
import { TragosService } from '../api/tragos.service';
import { UsuariossService } from '../api/usuarioss.service';
import { Boxmarcado, Acciones } from '../class/classA';
import { Usuarios } from '../class/usuarios';
import { DatePipe } from '@angular/common';
import { acciones } from '../class/acciones';
import Swal from 'sweetalert2';
import { Clientes } from '../class/clientes';

@Component({
  selector: 'app-modal-tragos-masivos',
  templateUrl: './modal-tragos-masivos.component.html',
  styleUrls: ['./modal-tragos-masivos.component.css']
})
export class ModalTragosMasivosComponent implements OnInit {
  pie:any;
  pies:any;
  listaNumeros: number[] = [1, 2, 3, 4, 5, 6];
  seleccionados: number=1;
  treint:boolean=false;
  cuarent:boolean= false;
  newdata = [];
new=[];
  recargarHora: number;
  client:Clientes[]=[];
  isDisabled: boolean = true;
  users: Usuarios[] = [];
  checklist: Array<boolean> = [];
  private boxmarcado: Boxmarcado = new Boxmarcado();
  acci: acciones = new acciones();
  fecha = new Date();
  fechaf1 = this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  constructor(private clientess: ClienteService,
    private miDatePipe: DatePipe,
    private usuario: UsuariossService,
    private accioness: AccionesService,
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private router: Router,
    private tragoService: TragosService,
    private aut: AuthenticationService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private cdr: ChangeDetectorRef,
    public modalRef: BsModalRef,
    public renderer: Renderer2,
    private horarios: HorarioService,
    private ngbCalendar: NgbCalendar,
    private ngZone: NgZone,
    private elelemtos: ElementRef,
    private dateAdapter: NgbDateAdapter<string>,
    private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
    this.usuario.findAll().subscribe((data) => {
      this.users = data;
    

    });
    this.clientess.findAll().subscribe((data) => {
      this.client = data;
      
    
  
    });
  }

  enableDisable() {
    // Enable or disable button conditionally
    if (this.isDisabled == true) {
      this.isDisabled = false;  // Make button enabled
    }

  }



  onCategoriaPressed(id:number,checked:boolean){
    if(checked){
      this.newdata.push(id);
    
    }
  
  
  }


  veinte() {
    this.newdata.forEach(data => {
      
      //this.acci.tragos.valor_trago= element.valor_trago
        this.acci.estado = 'pendiente';
        this.acci.usuario = { id: data }
        this.acci.tipo_accion = 'trago';
        this.acci.estado_de_pago = 'pendiente';
        this.acci.total_ganado = 20000;
        this.acci.tragos = { id: 2 };
        this.acci.cliente ={id:this.seleccionados}
        this.acci.cantidad =1;
        /// cambie formato fecha
        this.acci.servicio = { id: 1 };
        this.acci.dia_activo =this.fechaf1;
        this.acci.fecha_dia = this.fechaf1 + ' H ' + this.fech;
        this.acci.comisiones = 7000;
        this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
          error => console.log(error));



        Swal.fire(
          'trago/os a Pendiente!',
          `Con exito.`,
          'success'
        )
        this.accioness.filter('registrado');
        this.modalRef.hide()

      })




      }

    





  treinta() {
    this.treint = true;


      }



 tre(){
  this.newdata.forEach(data => {
      
    //this.acci.tragos.valor_trago= element.valor_trago
      this.acci.estado = 'pendiente';
      this.acci.usuario = { id: data }
      this.acci.tipo_accion = 'trago';
      this.acci.estado_de_pago = 'pendiente';
      this.acci.total_ganado = 30000;
      this.acci.tragos = { id: 3 };
      this.acci.cliente ={id:this.seleccionados}
      this.acci.cantidad =1;
      this.acci.pieza = this.pie;
      this.acci.dia_activo =this.fechaf1;
      /// cambie formato fecha
      this.acci.servicio = { id: 1 };
      this.acci.fecha_dia = this.fechaf1 + ' H ' + this.fech;
      this.acci.comisiones = 10000;
      this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
        error => console.log(error));



      Swal.fire(
        'trago/os a Pendiente!',
        `Con exito.`,
        'success'
      )
      this.accioness.filter('registrado');
      this.modalRef.hide()

    })



 }








  cuarenta() {
   
    this.cuarent= true;


    }

   
    cua(){
      this.newdata.forEach(data => {
   
        this.acci.estado = 'pendiente';
        this.acci.usuario = { id: data }
        this.acci.tipo_accion = 'trago';
        this.acci.estado_de_pago = 'pendiente';
        this.acci.total_ganado = 40000;
        this.acci.tragos = { id: 4 };
        this.acci.cliente ={id:this.seleccionados};
        this.acci.cantidad =1;
        this.acci.pieza = this.pies;
        this.acci.dia_activo =this.fechaf1;
        /// cambie formato fecha
        this.acci.servicio = { id: 1 };
        this.acci.fecha_dia = this.fechaf1 + ' H ' + this.fech;
        this.acci.comisiones = 15000;
        this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
          error => console.log(error));
  
  
  
        Swal.fire(
          'trago/os a Pendiente!',
          `Con exito.`,
          'success'
        )
        this.accioness.filter('registrado');
        this.modalRef.hide()
  
       
  
  
      })

    }


  }



