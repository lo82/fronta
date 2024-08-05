import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { accion } from '../class/accion';
import { AccionesService } from '../api/acciones.service';
import { ModalPendienteComponent } from '../modal-pendiente/modal-pendiente.component';
import swal from 'sweetalert2';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { Boxmarcado, Acciones } from '../class/classA';
import { trago } from '../class/trago';
import { Usuarios } from '../class/usuarios';
import { ClienteService } from '../api/cliente.service';
import { Clientes } from '../class/clientes';
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../usuarios/usuarios.service';
import { UsuariossService } from '../api/usuarioss.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  total:number;
  pagar = false;
  che= true;
  categoriaSelectedArray = [];
  s1;
  idemania=[];
valo:number[]=[];
  valor:number = 0;
  new:number =0;
  all:any;
  checkboxes = document.querySelectorAll("input[type = 'checkbox']");
  f1:any;
  @Input() public ids: any;
  valortotal=[];
  total2;
cliente;
model2: string;
aceptado: boolean = false;
selectAll: any;
userName = '';
horario: string = '11:00';
open: boolean = true;
openito: boolean = true;
time = new Date(2000, 1, 1, 0, 0, 0, 0);
id: number = 0;
estado = "pendiente";
t: any;
minutes!: number;
seconds!: number;
isPaused!: boolean;
buttonLabel!: string;
items = [];
isLogged = false;
isLoginFail = false;
roles: string[] = [];
rol: string;
users: Usuarios[] = [];
trago: trago[] = [];
accione: Array<accion>;
acc:Acciones[]=[];
accio: Array<accion>;
action: Array<Acciones>;
chicas!: object;
info: any = {};
invalidLogin = false;
subscription!: Subscription;
fecha: any;
ii: number;
activar: boolean = false;
now = moment().format("HH:mm:ss A");
nombre: string;
nombres: string;
apellido: string;
rut: string;
email: string;
nombreUsuario: string;
password: string;
fecha_in: string;
isRegister = false;
isRegisterFail = false;
errorMsg = '';
datoForm: any;
clienteForm:any;
tipo: string;
disable = false;
disabledInput: boolean = false;

menuActive: boolean;
checklist: Array<boolean> = [];
private boxmarcado : Boxmarcado = new Boxmarcado();
private acci : Acciones = new Acciones();
selectedItems: any[] = [];
private usuarios: any = {};
valor_trago =0
dat: any =[];

client:Clientes[]=[]
  constructor(public modalRef: BsModalRef,
    private modalService: BsModalService,
    private acciones: AccionesService,
    private elelemtos: ElementRef,
    private clientess:ClienteService,
    public user:UsuariossService,
    private route: ActivatedRoute) { 
      this.id = this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.accion();
   console.log(this.ids)
    this.acciones.pagocliente(this.ids).subscribe((data) => {
      this.action = data;
      
    });

  }

  accion() {
    this.acciones.pagocliente(this.ids).subscribe((data) => {

      this.acc = data;


    });


  }

  openModalPendiente(id: number) {
    const i = id;

    const initialState = {

      ids: i
    };
    this.modalRef = this.modalService.show(ModalPendienteComponent, { initialState });
  }

  openModalPendienteCliente(id: number) {
    const i = id;

    console.log(this.acc )
    this.acciones.pagocliente(id).subscribe((data)=>{
      this.acc = data;

    })
  }


  cancelarTrago(id: number) {
    const data = new accion();
    data.estado = 'cancelado';
    data.estado_de_pago = 'cancelado';
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere cancelar la transaccion?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desea cancelar la transaccion!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        this.acciones.putActualizarAccion(data, id).subscribe(

        );

        
        swal.fire(
          'cancelado!',
          `Con exito.`,
          'success'
        )
        location.reload();
      }

    }

    )


  }

  onCategoriaPressed(categoriaSelected: any, checked: boolean) {

    if (checked) { //Si el elemento fue seleccionado
      //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
      this.categoriaSelectedArray.push(categoriaSelected);
      this.total2 = this.categoriaSelectedArray.reduce((a, b) => a + b, 0);
      this.s1 = +this.total2
      console.log(this.s1);

    } else { //Si el elemento fue deseleccionado
      //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
      this.categoriaSelectedArray.splice(this.categoriaSelectedArray.indexOf(categoriaSelected), 1);
      this.s1 = -this.total2;
    }
  }




  guardar(){


    //  const selectedRecords = this.accione.filter((record) => record.total_ganado);
     //x console.log(selectedRecords);

    this.pagar = true;





    }

  seleccion(valor){
    console.log(valor);
    this.valortotal.push(valor)


    this.total2 = this.valortotal.reduce((a, b) => a + b, 0);

  console.log(this.total2);


  }


  obtenerClave( subservicio): string {
    return  '$'+ subservicio.idServicio;
  }

  selectAllItems() {
   
    for (const item of this.action) {
      item.checked = this.selectAll;
     

       

          
        
      
    }


    
  }

  calcularTotal() {
    this.total = this.action.reduce((total, elemento) => total + elemento.tragos.valor_trago, 0);
  }

  seleccionid(id: number) {
    if(id!=undefined){
    this.idemania.push(id);
    console.log(this.idemania)
  }
    this.ii = id;
    console.log(id);
    return id
  }



  tarjeta() {
    swal.fire({

      title: 'Esta seguro?',
      text: `Total a pagar ${this.total2}`,
      icon: 'warning',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      showCancelButton: true,
      
      closeButtonAriaLabel: '',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      denyButtonColor: 'blue',
      confirmButtonText: 'Tarjeta',
      allowOutsideClick: true,
  
      buttonsStyling: true,



    }).then(result => {
      if (result.isConfirmed) {

        let chk = this.elelemtos.nativeElement.querySelectorAll(".chk_sel_box"); let newdata = [];
        chk.forEach(data => {
          if (data['checked']) {
            newdata.push(data['value']);

            this.boxmarcado.box = newdata;
            this.boxmarcado.box.forEach(element => {

              this.acci.id = element;

              //this.acci.tragos.valor_trago= element.valor_trago
              this.acci.estado = 'pagado';
              this.acci.estado_de_pago = 'pagado';
              this.acci.tipo_pago = 'tarjeta'
              this.acci.tipo_accion ='trago'
              this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

              );
             
              swal.fire(
                'Trago pagado con tarjeta',
                ` Tragos pagados de ${this.total2} con exito.`,
                'success'
              )
        
          
       
      
              this.idemania.forEach(data => {
                let datito:Usuario = new Usuario();
                datito.color = 'verde';
                
                
                this.user.putActualizarColor(datito,data).subscribe(res => console.log(res),
              error => console.log(error));
             
              })
              swal.fire(`Se actualizo el color de las chicas a una champaña,recordar: "son 15 minutos"`,'warning');
              
                const audio = new Audio('assets/answering-machine-beep.mp3');
                audio.play();
          
          
          
              setTimeout(() => {
                this.idemania.forEach(data => {
                  let datito:Usuario= new Usuario();
                  datito.color = 'blanco'
              
                  this.user.putActualizarColor(datito,data).subscribe(res => console.log(res),
                error => console.log(error));
                  
                })
                swal.fire(`Se actualizo el color de las chicas y estan libres `,'success');
                const audio = new Audio('assets/beep-uber-brasil.mp3');
                audio.play();
              }, 9000);


            })



          }
        }
        );

      }
    }
    )
  }


  efectivo() {
    swal.fire({

      title: 'Esta seguro?',
      text: `Total a pagar ${this.total2}`,
      icon: 'warning',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      showCancelButton: true,
  
      closeButtonAriaLabel: '',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      denyButtonColor: 'blue',
      confirmButtonText: 'Efectivo!',
      allowOutsideClick: true,
    
      buttonsStyling: true,



    }).then(result => {
      if (result.isConfirmed) {

        let chk = this.elelemtos.nativeElement.querySelectorAll(".chk_sel_box"); let newdata = [];
        chk.forEach(data => {
          if (data['checked']) {
            newdata.push(data['value']);

            this.boxmarcado.box = newdata;
            this.boxmarcado.box.forEach(element => {

              this.acci.id = element;

              //this.acci.tragos.valor_trago= element.valor_trago
              this.acci.estado = 'pagado';
              this.acci.estado_de_pago = 'pagado';
              this.acci.tipo_pago = 'efectivo';
              this.acci.tipo_accion ='trago';
              this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

              );
          
     

              swal.fire(
                'Trago pagado con efectivo',
                ` Tragos pagados de ${this.total2} con exito.`,
                'success'
              )
        
          
              this.acciones.filter('registrado');
              this.modalRef.hide()
              this.idemania.forEach(data => {
                let datito:Usuario = new Usuario();
                datito.color = 'verde';
                
                
                this.user.putActualizarColor(datito,data).subscribe(res => console.log(res),
              error => console.log(error));
             
              })
              swal.fire(`Se actualizo el color de las chicas a una champaña,recordar: "son 15 minutos"`,'warning');
              
                const audio = new Audio('assets/answering-machine-beep.mp3');
                audio.play();
          
          
          
              setTimeout(() => {
                this.idemania.forEach(data => {
                  let datito:Usuario = new Usuario();
                  datito.color = 'blanco'
              
                  this.user.putActualizarColor(datito,data).subscribe(res => console.log(res),
                error => console.log(error));
                  
                })
                swal.fire(`Se actualizo el color de las chicas y estan libres `,'success');
                const audio = new Audio('assets/beep-uber-brasil.mp3');
                audio.play();
              }, 9000);







           
              //  this.llamar();


            })



          }
        }
        );

      }
    }
    )
  }



  transferencia() {
    swal.fire({

      title: 'Esta seguro?',
      text: `Total a pagar ${this.total2}`,
      icon: 'warning',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
     
      closeButtonAriaLabel: '',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      denyButtonColor: 'blue',
      confirmButtonText: 'transferencia',
      allowOutsideClick: true,
      buttonsStyling: true,
      showCancelButton: true,


    }).then(result => {
      if (result.isConfirmed) {

       
        let chk = this.elelemtos.nativeElement.querySelectorAll(".chk_sel_box"); let newdata = [];
        chk.forEach(data => {
          if (data['checked']) {
            newdata.push(data['value']);

            this.boxmarcado.box = newdata;
            this.boxmarcado.box.forEach(element => {

              this.acci.id = element
             
              
              //this.acci.tragos.valor_trago= element.valor_trago
              this.acci.estado = 'pagado';
              this.acci.estado_de_pago = 'pagado';
              this.acci.tipo_pago = 'transferencia'
              this.acci.tipo_accion ='trago'
              this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

              );


            })



          }

        });
        ((response: any) => {


        });
        swal.fire(
          'Trago pagado con transferencia',
          ` Tragos pagados de ${this.total2} con exito.`,
          'success'
        )
  
    
        this.acciones.filter('registrado');
        this.modalRef.hide()
        this.idemania.forEach(data => {
          let datito:Usuario = new Usuario();
          datito.color = 'verde';
          
          
          this.user.putActualizarColor(datito,data).subscribe(res => console.log(res),
        error => console.log(error));
       
        })
        swal.fire(`Se actualizo el color de las chicas a una champaña,recordar: "son 15 minutos"`,'warning');
        
          const audio = new Audio('assets/answering-machine-beep.mp3');
          audio.play();
    
    
    
        setTimeout(() => {
          this.idemania.forEach(data => {
            let datito:Usuario = new Usuario();
            datito.color = 'blanco'
        
            this.user.putActualizarColor(datito,data).subscribe(res => console.log(res),
          error => console.log(error));
            
          })
          swal.fire(`Se actualizo el color de las chicas y estan libres `,'success');
          const audio = new Audio('assets/beep-uber-brasil.mp3');
          audio.play();
        }, 9000);

       
     
      }
    }
    )
  }




  cancelarCliente(id: number) {
    const data = new Clientes();
    data.estado = false;
    
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere esconder el  cliente?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desea cancelar el cliente!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        this.clientess.putActualizar(data, id).subscribe(

        );

        
        swal.fire(
          'escondido!',
          `Con exito.`,
          'success'
        )
     
      }

    }

    )


  }



  }











