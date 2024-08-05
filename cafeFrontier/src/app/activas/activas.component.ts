import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TokenService } from '../api/token.service';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuarios } from '../class/usuarios';
import { ModalServiciosComponent } from '../modal-servicios/modal-servicios.component';
import { Acciones, Boxmarcado } from '../class/classA';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AccionesService } from '../api/acciones.service';
import { ServiciosService } from '../api/servicios.service';
import { acciones } from '../class/acciones';
import swal from 'sweetalert2';
import { acci } from '../class/acci';
import { Usuario } from '../usuarios/usuario';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';


@Component({
  selector: 'app-activas',
  templateUrl: './activas.component.html',
  styleUrls: ['./activas.component.css']
})
export class ActivasComponent implements OnInit {
  datosForm: FormGroup = new FormGroup({
    vSer: new FormControl(''),
    iva: new FormControl(''),
    vChica: new FormControl(''),
    pieza: new FormControl(''),
  });

  datoForm: FormGroup = new FormGroup({
    valorServicio: new FormControl(''),
    valorPrivado: new FormControl(''),
    piezas: new FormControl(''),
  });

  datForm: FormGroup = new FormGroup({
    valorServicio: new FormControl(''),
    valorPrivado: new FormControl(''),
    piezass: new FormControl(''),
  });
  nombreA:string;
  piezaEfectivo:number;
  piezaTarjeta:number;
  piezaTransferencia:number;
  newdata = [];
  usua:Usuario = new Usuario;
  private acci: acciones = new acciones();
  aci:acciones = new acciones();
  ac:Acciones = new Acciones();
  categoriaSelectedArray = [];
  public nu : number = 0;
  idd:number;
  iiii:number[]=[];
  piezas: any;
  isSubmitted = false;
  isSub = false;
  isSubmittede = false;
  color:string;
  pieza: any;
  seleccionados: string = '';
  lista: string[] = ['Tarjeta', 'Efectivo','Transferencia'];
  listaNumeros: number[] = [1, 2, 3, 4, 5, 6]
  valor: string[] = [];
  vBruto: string = '';
  vChica: any;
  vSer: any;
  iva: any;
  resultado: any;
  result:any;
  valorServicio: any;
  valorPrivado: any;
  total: any;
  id: any =2;
  fecha = new Date();
  fechaf1 = this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  count:number = 0;
  variable:number =0;
  iii:number[]=[];
  ids: number[]=[];
  users: Usuarios[] = [];
  use: Usuarios = new Usuarios();
  private boxmarcado: Boxmarcado = new Boxmarcado();
  i: any;
  public n : number = 0;
  modalRef: BsModalRef = new BsModalRef();
  valorServicios:any;
  valorPrivados:any;
  piezass:any;

  constructor(private tokenService: TokenService,private route: ActivatedRoute, private router: Router,  private usuario: UsuariossService,
    private modalService: BsModalService,private elelemtos: ElementRef,
      private formBuilder: FormBuilder,
    private miDatePipe:DatePipe, private servicio: ServiciosService, private accioness:AccionesService,private toastEvokeService: ToastEvokeService
    ) { }



  add() {
    this.n += 1;
    console.log(this.n);
  }

  openModalServicio() {
    const initialState = {
      idd:this.i,
      numero: this.n,
      contador: this.count,

  };
  this.modalRef = this.modalService.show(ModalServiciosComponent, {initialState});

  }
  
  onCategoriaPressed(id:number,checked:boolean){
    if(checked){
      this.newdata.push(id);
    
    }
  
  
  }


  adds() {
    this.n += 1;

  }


  seleccionado(id: number) {
    this.ids.push(id);



    return id;

  }

  onSelected() {
    this.lista
  }

  ngOnInit(): void {
    this.datosForm = this.formBuilder.group(
      {
        vSer: [''],
        pieza: ['', Validators.required],
        vChica: [
          '',
          [
            Validators.required

          ]
        ],
        iva: [
          '',

        ],
      },
    );

    this.datoForm = this.formBuilder.group(
      {
        valorServicio: [''],
        valorPrivado: ['', Validators.required],
        piezas:['', Validators.required],
      },
    );


    this.datForm = this.formBuilder.group(
      {
        valorServicios: [''],
        valorPrivados: ['', Validators.required],
        piezass:['', Validators.required],
      },
    );


    this.usuario.findAll().subscribe((data) => {
      this.users = data;
    });

  }


  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.datosForm.valid) {
      false
    } else {
      this.resultado = this.vSer + this.vChica + this.iva;


    }
  }

  onSubmitss(): void {
    this.isSub = true;
    if (!this.datForm.valid) {
      false
    } else {
      this.result = this.valorServicios + this.valorPrivados;


    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.datosForm.controls;
  }

  get ef(): { [key: string]: AbstractControl } {
    return this.datoForm.controls;
  }

  onSubmits(): void {
    this.isSubmittede = true;
    if (!this.datoForm.valid) {
      false
    } else {

      this.total = this.valorServicio + this.valorPrivado;
    }
  }


  crearServicio() {

  
 
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere pagar el servicio ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        
          this.crearAccionesTarjeta(),
          
        
        this.accioness.filter('registrado')
        swal.fire(
          'Servicio Pagado!',
          `Con exito.`,
          'success'
        );
        this.modalService.hide();
      }

    }

    )


  }

  crearAccionesTarjeta(){
  
   /* const data = new acciones();
     data.servicio = { id: this.id+1};
     data.estado = 'pagado';
     data.total_ganado = this.resultado;
     data.tipo_accion = 'servicio';
     data.estado_de_pago = 'pagado';
     data.usuario = { id:this.idd};
     data.tragos={id:1};
     data.fecha_dia = this.fechaf1;
     data.dia_activo = this.fechaf1;
     */
     this.newdata.forEach(data => {

     


           this.acci.iva=  this.iva;
           this.acci.pieza = this.pieza;
           this.acci.estado = 'pagado';
           this.acci.estado_de_pago = 'pagado';
    
           this.acci.total_ganado = this.vSer/this.ids.length;
           this.acci.tipo_accion = 'servicio_chica';
           this.acci.tipo_pago ='tarjeta'
          this.acci.tragos ={id:1};
          this.acci.servicio ={id:1}
           this.acci.usuario = { id: data};
           this.acci.fecha_dia = this.fechaf1 +'h'+this.fech;
           this.acci.dia_activo = this.fechaf1;

           this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
           error => console.log(error));


           swal.fire(
             'servicio pagado con tarjeta',
             ` con exito.`,
             'success'
           )
         })

          let dat:acci = new acci();
          dat.estado = 'pagado';
          dat.tipo_pago = 'tarjeta';
          dat.tipo_accion = 'servicio_bar';
          dat.estado_de_pago = 'pagado';
          /// cambie formato fecha
    
          dat.servicio={id:1};
          dat.usuario = {id:4};
         dat.tragos ={id:1};
          dat.total_ganado= this.vChica;
          dat.dia_activo= this.fechaf1;
          dat.fecha_dia = this.fechaf1+'H'+this.fech;

          this.accioness.postCrearAccioness(dat).subscribe(res => console.log(res),
          error => console.log(error));
        

          this.newdata.forEach(data => {
            let datito:Usuario = new Usuario();
            datito.color = 'rojo'
        
            //validar
           
        
            this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
          error => console.log(error));
              swal.fire(`Se actualizo el color de las chicas a servicio,recordar: "son 30 minutos"`, `la pieza en que se encuentran es el numero: ${this.pieza} `,'warning');
          
          

          })
        
       
         

          setTimeout(() => {
            this.newdata.forEach(data => {
              let datito:Usuario = new Usuario();
              datito.color = 'blanco'
              this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
            error => console.log(error));
              
            })
            swal.fire(`Se actualizo el color de las chicas y estan libres `, `la pieza en que se encontraban es el numero: ${this.pieza} `,'warning');
            
  
          }, 25000);
  
  
       }

 

   



 crearServicioEfectivo() {

  

  swal.fire({
    title: 'Esta seguro?',
    text: `¿Quiere pagar el servicio ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, pagar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      


        this.crearAccionesEfectivo(),

   
       
      swal.fire(
        'Servicio Pagado!',
        `Con exito.`,
        'success'
      );
      this.modalService.hide();
    }

  }

  )

  
}

crearAccionesEfectivo(){



    this.newdata.forEach(data => {

  

          this.acci.pieza = this.piezas;
          this.acci.estado = 'pagado';
          this.acci.estado_de_pago = 'pagado';
          this.acci.tipo_pago='efectivo'
          this.acci.total_ganado = this.valorServicio/this.ids.length;
          this.acci.tipo_accion = 'servicio_chica';
        
          this.acci.tragos ={id:1};
          this.acci.servicio ={id:1}
          this.acci.usuario = { id: data};
          this.acci.fecha_dia = this.fechaf1 +'H'+ this.fech;
          this.acci.dia_activo = this.fechaf1;

          this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
          error => console.log(error));


          swal.fire(
            'Servicio pagado con efectivo',
            `con exito.`,
            'success'
          )
        })
        let dat:acci = new acci();
        dat.estado = 'pagado';
        dat.tipo_pago = 'efectivo';
        dat.tipo_accion = 'servicio_bar';
        dat.estado_de_pago = 'pagado';
        /// cambie formato fecha
        dat.servicio={id:1};
        dat.tragos ={id:1};
        dat.usuario = {id:4};
        dat.total_ganado= this.valorPrivado;
        dat.dia_activo= this.fechaf1;
        dat.fecha_dia = this.fechaf1 +' H '+ this.fech;
        this.accioness.postCrearAccioness(dat).subscribe(res => console.log(res),
        error => console.log(error));
        this.modalRef.hide()

        this.newdata.forEach(data => {
          let datito:Usuario = new Usuario();
          datito.color = 'rojo';
          
          
          this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
        error => console.log(error));
       
        })
        swal.fire(`Se actualizo el color de las chicas a servicio,recordar: "son 30 minutos"`, `la pieza en que se encuentran es el numero: ${this.piezas} `,'warning');
        
          


        setTimeout(() => {
          this.newdata.forEach(data => {
            let datito:Usuario = new Usuario();
            datito.color = 'blanco'
        
            this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
          error => console.log(error));
            
          })
          swal.fire(`Se actualizo el color de las chicas y estan libres `, `la pieza en que se encontraban es el numero: ${this.piezas} `,'warning');
         
        }, 9000);

     }





   

   






crearServicioTransferencia() {


  swal.fire({
    title: 'Esta seguro?',
    text: `¿Quiere pagar el servicio ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, pagar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
     
        this.crearAccionesTransferencia(),
       
   
 
      swal.fire(
        'Servicio Pagado!',
        `Con exito.`,
        'success'
      );
      this.modalService.hide();
    }

  }

  )


}

crearAccionesTransferencia(){

 

    this.newdata.forEach(data => {




          this.acci.pieza = this.piezass;
          this.acci.estado = 'pagado';
          this.acci.estado_de_pago = 'pagado';

          this.acci.total_ganado = this.valorServicios/this.ids.length;
          this.acci.tipo_accion = 'servicio_chica';
          this.acci.tipo_pago ='transferencia';
          this.acci.tragos ={id:1};
          this.acci.servicio ={id:1}
          this.acci.usuario = { id: data};

          this.acci.fecha_dia = this.fechaf1 +'H'+ this.fech;
          this.acci.dia_activo = this.fechaf1;

          this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
          error => console.log(error));


          swal.fire(
            'Servicio pagado con transferencia',
            `pagado con exito.`,
            'success'
          )
        })

        let dat:acci = new acci();
        dat.estado = 'pagado';
        dat.tipo_pago = 'transferencia';
        dat.tipo_accion = 'servicio_bar';
        dat.estado_de_pago = 'pagado';
        /// cambie formato fecha
        dat.servicio={id:1};
        dat.usuario = {id:4};
        dat.tragos ={id:1};
        dat.total_ganado= this.valorPrivados;
        dat.dia_activo= this.fechaf1;
        dat.fecha_dia = this.fechaf1 +' H '+ this.fech;
        this.accioness.postCrearAccioness(dat).subscribe(res => console.log(res),
        error => console.log(error));
        this.modalRef.hide()

        this.newdata.forEach(data => {
          let datito:Usuario = new Usuario();
          datito.color = 'rojo'
          this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
        error => console.log(error));
          
        })
        swal.fire(`Se actualizo el color de las chicas a servicio,recordar: "son 30 minutos"`, `la pieza en que se encuentran es el numero: ${this.piezass} `,'warning');
        
       

        setTimeout(() => {
          this.newdata.forEach(data => {
            let datito:Usuario = new Usuario();
            datito.color = 'blanco'
            this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
          error => console.log(error));
            
          })
          swal.fire(`Se actualizo el color de las chicas y estan libres `, `la pieza en que se encontraban es el numero: ${this.piezass} `,'warning');
        

        }, 9000);

      }





 








}
