import { Component, Input, OnInit } from '@angular/core';
import { TokenService } from '../api/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { acci } from '../class/acci';
import swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Acciones } from '../class/classA';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuarios } from '../class/usuarios';
import { servicios } from '../class/servicios';
import { acciones } from '../class/acciones';
import { ServiciosService } from '../api/servicios.service';

@Component({
  selector: 'app-garzones',
  templateUrl: './garzones.component.html',
  styleUrls: ['./garzones.component.css']
})
export class GarzonesComponent implements OnInit {
  datosForm: FormGroup = new FormGroup({
    propina: new FormControl(''),
    vSer: new FormControl(''),
   
  });
  
  now = new Date();
  @Input() public idd: any;
  vSer: any;
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
 
  isSubmitted = false;
  id: any = 1;
  accione: Array<Acciones>;

  propinaT:number;
  users: Usuarios[] = [];
  propina:number;
  isLogged = false;
  nombre:string;
  isLoginFail = false;
  roles: string[] = [];

  constructor(     private usuario: UsuariossService,  private tokenService: TokenService,  private miDatePipe: DatePipe,  private route: ActivatedRoute,private router: Router,
    private accioness: AccionesService,private servicio: ServiciosService, private acciones:AccionesService
    ) { 
    this.nombre = this.route.snapshot.params['nombreUsuario'];
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();

    }
    this.accion();
   
  }

  propinaEfectivo() {

    


    this.accioness.filter('registrado');
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere insertar la propina del día? `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desea pagar la transaccion!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      let dat: acci = new acci();

    dat.estado = 'pagado';
    dat.tipo_pago = 'efectivo';
    dat.tipo_accion = 'propina';
    dat.estado_de_pago = 'pagado';
    dat.usuario = { id: this.id };
    dat.propina =this.propina;
    console.log(this.propina)
  
    dat.dia_activo = this.fechaf1;
    dat.fecha_dia = this.fechaf1 + ' H ' + this.fecha;
      if (result.value) {


        /////

        this.accioness.postCrearAccioness(dat).subscribe(
          

        );
      
        swal.fire(
          'Pagado!',
          `Con exito.`,
          'success'
        )

      }
      this.accioness.filter('registrado');
      this.router.navigate(['home']);

    }

    )


  }


  propinaTarjeta() {

    


    this.accioness.filter('registrado');
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere insertar la propina del día? `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desea pagar la transaccion!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      let dat: acci = new acci();

    dat.estado = 'pagado';
    dat.tipo_pago = 'tarjeta';
    dat.tipo_accion = 'propina';
    dat.estado_de_pago = 'pagado';
    dat.usuario = { id: this.id };
    dat.propina =this.propinaT;

  
    dat.dia_activo = this.fechaf1;
    dat.fecha_dia = this.fechaf1 + ' H ' + this.fecha;
      if (result.value) {


        /////

        this.accioness.postCrearAccioness(dat).subscribe(
          

        );
      
        swal.fire(
          'Pagado!',
          `Con exito.`,
          'success'
        )

      }
      this.accioness.filter('registrado');
      this.router.navigate(['home']);

    }

    )


  }

  accion() {
    this.accioness.findAll().subscribe((data) => {

      this.accione = data;


    });


  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.datosForm.valid) {
      false
    } else {
      


    }
  }


  crearBono() {

    const data = new servicios();
  
    data.valor = this.datosForm.value.vSer;

    
  
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
          'Bono Pagado!',
          `Con exito.`,
          'success'
        )
      }
  
    }
  
    )

   
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
     data.bonificacion= this.vSer;
     data.tipo_accion = 'bono';
     data.estado_de_pago = 'pagado';
     data.usuario = { id:this.idd};
     data.dia_activo=this.fechaf1;
     this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
     error => console.log(error));
   
     
  }
  



}
