import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { ServiciosService } from '../api/servicios.service';
import { accion } from '../class/accion';
import { acciones } from '../class/acciones';
import { servicios } from '../class/servicios';
import { DatePipe } from '@angular/common';
import { acci } from '../class/acci';
import { Usuario } from '../usuarios/usuario';
import { UsuariossService } from '../api/usuarioss.service';
@Component({
  selector: 'app-modal-servicios',
  templateUrl: './modal-servicios.component.html',
  styleUrls: ['./modal-servicios.component.css'],

})



export class ModalServiciosComponent implements OnInit {
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
    valorServicios: new FormControl(''),
    valorPrivados: new FormControl(''),
    pie: new FormControl(''),
  });

  tot:any;
  valorServicios:any;
  valorPrivados:any;
  pie:any;
  piezas: any;
  isSubmitted = false;
  isSubmittede = false;
  pieza: any;
  seleccionados: string = '';
  lista: string[] = ['Tarjeta', 'Efectivo','Transferencia'];
  listaNumeros: number[] = [1, 2, 3, 4, 5, 6]
  valor: string[] = [];
  vBruto: string = '';
  vChica: any;
  newdata = [];
  vSer: any;
  iva: any;
  resultado: any;
  valorServicio: any;
  valorPrivado: any;
  total: any;
  id: any =1;
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  @Input() public idd: any;
  constructor(public modalRef: BsModalRef, private modalService: BsModalService, private formBuilder: FormBuilder,
    private miDatePipe:DatePipe, private servicio: ServiciosService, private acciones:AccionesService,private usuario: UsuariossService
    ) {
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
        pie:['', Validators.required],
      },
    );

  }


  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.datosForm.valid) {
      false
    } else {
      this.resultado = this.vSer + this.vChica + this.iva;


    }
  }

  onSubm(): void {
    this.isSubmitted = true;
    if (!this.datForm.valid) {
      false
    } else {
      this.tot = this.valorServicios + this.valorPrivados;
      console.log(this.valorPrivados)

    }
  }





  get f(): { [key: string]: AbstractControl } {
    return this.datosForm.controls;
  }

  get ef(): { [key: string]: AbstractControl } {
    return this.datoForm.controls;
  }

  get fo(): { [key: string]: AbstractControl } {
    return this.datForm.controls;
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

        
        swal.fire(
          'Servicio Pagado! '    ,
          `Con exito. valor:${this.resultado} habitación:${this.pieza}` ,
          'success'
        )
      }

    }

    )

   
  }

  crearAccionesTarjeta(){

    console.log('esta es la id',this.id)
    const data = new acciones();
    
     data.servicio = { id: this.id+1}; 
     data.estado = 'pagado';
     data.total_ganado =this.vSer;
     data.tipo_pago = 'tarjeta'
     data.tipo_accion = 'servicio_chica';
     data.estado_de_pago = 'pagado';
     data.usuario = { id:this.idd};
     data.iva = this.datosForm.value.iva;
     data.pieza = this.pieza;
     data.tragos={id:1};
     data.fecha_dia = this.fechaf1+'h'+ this.fech;
     data.dia_activo = this.fechaf1;
     this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
     error => console.log(error));
     this.modalRef.hide()
     

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
 dat.dia_activo= this.fechaf1 ;
 dat.fecha_dia = this.fechaf1+'H'+this.fech;

 this.acciones.postCrearAccioness(dat).subscribe(res => console.log(res),
 error => console.log(error));
 this.modalRef.hide()

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
        `Con exito. valor:${this.total} habitación:${this.piezas}`,
        'success'
      )
    }

  }

  )

 
}

crearAccionesEfectivo(){


    
  
  const data = new acciones();
   data.servicio = { id: this.id}; 
   data.estado = 'pagado';
   data.pieza = this.pieza;
   data.total_ganado = this.valorServicio;
   data.tipo_pago='efectivo';
   data.tipo_accion = 'servicio_chica';
   data.estado_de_pago = 'pagado';
   data.usuario = { id:this.idd};
   data.tragos={id:1};
   data.fecha_dia = this.fechaf1+'h'+ this.fech;
   data.dia_activo= this.fechaf1;
   this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
   error => console.log(error));
   this.modalRef.hide()
   let dat:acci = new acci();
   dat.estado = 'pagado';
   dat.tipo_pago = 'efectivo';
   dat.tipo_accion = 'servicio_bar';
   dat.estado_de_pago = 'pagado';
   /// cambie formato fecha
  
   dat.servicio={id:1};
   dat.usuario = {id:4};
  dat.tragos ={id:1};
   dat.total_ganado= this.valorPrivado;
   dat.dia_activo= this.fechaf1 ;
   dat.fecha_dia = this.fechaf1+'H'+this.fech;
  
   this.acciones.postCrearAccioness(dat).subscribe(res => console.log(res),
   error => console.log(error));
   this.modalRef.hide()
  
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
        `Con exito. valor:${this.tot} habitación:${this.pie}`,
        'success'
      )
    }

  }

  )

 
}

crearAccionesTransferencia(){  
  const data = new acciones();
   data.servicio = { id: this.id}; 
   data.estado = 'pagado';
   data.pieza = this.pie;
   data.total_ganado = this.valorServicios;
   data.tipo_accion = 'servicio_chica';
   data.tipo_pago = 'transferencia';
   data.estado_de_pago = 'pagado';
   data.usuario = { id:this.idd};
   data.tragos={id:1};
   data.fecha_dia = this.fechaf1+'h'+ this.fech;
   data.dia_activo= this.fechaf1;
   this.acciones.postCrearAcciones3(data).subscribe(res => console.log(res),
   error => console.log(error));
   this.modalRef.hide()
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
   dat.dia_activo= this.fechaf1 ;
   dat.fecha_dia = this.fechaf1+'H'+this.fech;
  
   this.acciones.postCrearAccioness(dat).subscribe(res => console.log(res),
   error => console.log(error));
   this.modalRef.hide()
  
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






}






  