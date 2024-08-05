import { ChangeDetectorRef, Component, ElementRef, Injectable, Input, NgZone, OnDestroy, OnInit, Renderer2, TemplateRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, elementAt, of } from 'rxjs';
import swal from 'sweetalert2';
import { AccionesService } from '../api/acciones.service';
import { AuthenticationService } from '../api/authentication.service';
import { TokenService } from '../api/token.service';
import { TragosService } from '../api/tragos.service';
import { trago } from '../class/trago';
import { Usuarios } from '../class/usuarios';
import { accion } from '../class/accion';
import { FormGroup, FormControl, FormBuilder, Validators, NgControl } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalPendienteComponent } from '../modal-pendiente/modal-pendiente.component';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { horario } from '../class/horario';
import { HorarioService } from '../api/horario.service';
import { UsuariossService } from '../api/usuarioss.service';
import { Acciones, Boxmarcado, usuario } from '../class/classA';
import { ClientesComponent } from '../clientes/clientes.component';
import { ClienteService } from '../api/cliente.service';
import { Clientes } from '../class/clientes';
import { Usuario } from '../usuarios/usuario';
import { acciones } from '../class/acciones';
import { ModalTragosMasivosComponent } from '../modal-tragos-masivos/modal-tragos-masivos.component';
import { TragosPendientesComponent } from '../tragos-pendientes/tragos-pendientes.component';
import { TimerService } from '../api/timer.service';
import { CountdownEvent } from 'ngx-countdown';
import { ControlService } from '../api/control.service';
import { PopUpTimerComponent } from '../pop-up-timer/pop-up-timer.component';





var moment = require('moment');




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit,OnDestroy {
  selectedUserId: number;
  countdownConfigs = {};
  private countdownSubscriptions: Subscription[] = [];
  private startSubscription: Subscription;
remainingTime$: Observable<string> = new Observable<string>();
  minute:number =0;
  second:number=0;
  private minuteSub:Subscription;
  private secondSub:Subscription;
  timer;any;
  timeData = "120"
    canSendCode: boolean = false;
  oneSecond = 1000;

  displayTimeLeft$ = of('');
  secondss = 0;
  //userId = '';
  che= true;
  notify = '';
  categoriaSelectedArray = [];

  recargarHora: number =0;
  showStop: boolean;
  isDisabled: boolean = true;
  model2: string;
  checkSeleccionado = false;
  aceptado: boolean = false;
  selectAll: any;
  userName = '';
  horario: string = '11:00';
  open: boolean = false;
  o:boolean = false;
  openi: boolean = false;
  openito: boolean = false;
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
  usu: Usuarios[] = [];
  client: Clientes[] = [];
  trago: trago[] = [];
  accione: Array<Acciones>;
  accio: Array<accion>;
  chicas!: object;
  info: any = {};
  invalidLogin = false;
  subscription: Subscription;
  fecha: any;
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
  clienteForm: any;
  tipo: string;
  disable = false;
  disabledInput: boolean = false;
  @ViewChild('btn') exLoc: ElementRef;
  menuActive: boolean;
  pagar = false;
  checklist: Array<boolean> = [];
  private boxmarcado: Boxmarcado = new Boxmarcado();
  private acci: Acciones = new Acciones();
  acc: Acciones = new Acciones();
  selectedItems: any[] = [];
  valor_trago = 0
  seleccionados: number[] = [];
  dat: any = [];
  idemania=[];
  valortotal = [];
  total2;
  ids: number;
  ii: number;
  cliente;
  idecito: number;
  isSubmitBtnDisabled: boolean = true;
  modalRef: BsModalRef = new BsModalRef();
  datosForm: FormGroup = new FormGroup({
    fecha: new FormControl(''),

  });
  btn: any;
  intervalo: any;
  p: string | number;
  nomb: string;
  constructor(
  
    private clientess: ClienteService,
    private countdownService:ControlService,
    private timerService:TimerService,
    private usuario: UsuariossService,
    private authService: AuthenticationService,
    private tokenService: TokenService,
    private router: Router,
    private acciones: AccionesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    public renderer: Renderer2,
    private horarios: HorarioService,
    private elelemtos: ElementRef,
    private offcanvasService: NgbOffcanvas,  private CountdownService:ControlService,


  ) {

    this.datoForm = this.formBuilder.group({
      nombres: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      rut: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      nombreUsuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rol: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      fecha_in: new FormControl('', Validators.required)
    });
    this.acciones.listen().subscribe(() => {
      this.ngOnInit();


    })

    this.clienteForm = this.formBuilder.group({
      cliente: new FormControl('', Validators.required),

    });


  }

  openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  resetTimer(): void {
    this.isPaused = true;
    this.minutes = 0;
    this.seconds = 6;
    this.buttonLabel = 'Comenzar Privado';
  }


  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutes < 29 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }


  ngOnInit() {

 
    this.subscription = this.usuario.refresh$.subscribe(() =>{
      this.usuario.findAll().subscribe((data) => {
        this.users = data;
        
      });
      this.clientes();
      this.accion();

    })

    this.seleccionid(this.ii)
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();

    }
    this.tokenService.getUserName();
    this.usuario.findAll().subscribe((data) => {
      this.users = data;
      this.users.forEach(user => {
        this.countdownConfigs[user.id] = { leftTime: 3600};
  
        const subscription = this.countdownService.countdowns$.subscribe(countdowns => {
          if (countdowns[user.id]) {
         console.log('hola')
            
            
          }
        });
  
        this.countdownSubscriptions.push(subscription);
      });

    });


    this.clientes();



    this.authService.nombreUsuario();
    this.nombre = this.route.snapshot.params['nombreUsuario'];

    this.datosForm = this.formBuilder.group(
      {
        fecha: ['', Validators.required],


      },
    );

    //this.accion();
    
    
  }



  handleEvent(event, userId: number) {
    if (event.action === 'done') {
      console.log(`Countdown for user ${userId} finished!`);
    }
  }





  onRegister() {
    const data = new Usuarios();
    data.nombre = this.nombres;
    data.nombreUsuario = this.nombreUsuario;
    data.apellido = this.apellido;
    data.rut = this.rut;
    data.email = this.email;
    data.password = this.password;
    data.tipo = this.tipo;
    data.estado = 'inactivo';
    data.roles.nombre_rol = this.rol;

    this.usuario.registro(data).subscribe(() => {


      swal.fire('Nuevo Usuario', `Usuario creado con exito!`, 'success')
      this.isRegister = true;
      this.isRegisterFail = false;
      //console.log(this.usuario)
    },
      (error: any) => {
        console.log(error.error.mensaje);
        this.errorMsg = error.error.mensaje;
        this.isRegister = false;
        this.isRegisterFail = true;
      }
    );

  }

  public onSaveUsernameChanged(value: number) {
    this.idecito = value;
  }






  ngOnDestroy() {

    if (this.subscription) {
      this.countdownService.countdownSubscriptions.forEach(subscription => subscription.unsubscribe());
    }

  }

  cerrar() {
    this.tokenService.logOut();
  }

  logIn() {
    this.tokenService.isLoggedIn();

  }

  menuChica() {
    this.router.navigate(['chicas']);

  }

  accion() {
    this.acciones.findAll().subscribe((data) => {

      this.accione = data;


    });


  }


  volver(): void {
    window.history.back();
  }

  onClick() {
    console.log(this.fecha)
  }

  

  openModalPendiente(id: number) {
    const i = id;

    const initialState = {

      ids: i
    };
    this.modalRef = this.modalService.show(ModalPendienteComponent, { initialState });
  }

  openModalTragosP() {
 

    const initialState = {

 
    };
    this.modalRef = this.modalService.show(TragosPendientesComponent, { class: 'modal-lg', initialState });
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

        location.reload();
        swal.fire(
          'cancelado!',
          `Con exito.`,
          'success'
        )
      }

    }

    )


  }


  mostrarHorarioporId(id: number) {
    this.horarios.mostrarHorario(id).subscribe(res => console.log(res),
      error => console.log(error));
  }



  activarBtn() {


  }


  updateSelectedItems() {
    this.users.forEach(item => {
      item.id = this.selectAll

    });
  
  }



  guardar() {








    swal.fire({
     
      title: 'Esta seguro?',
      text: `¿Quiere pagar lo que está en la tabla?`,
      icon: 'warning',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      showCancelButton: true,
      showDenyButton: true,
      closeButtonAriaLabel: '',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      denyButtonColor: 'blue',
      confirmButtonText: 'Efectivo!',
      allowOutsideClick: true,
      cancelButtonText: 'Tarjeta',
      buttonsStyling: true,
  
      denyButtonText: `transferencia`,

    }).then((result) => {
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
              this.acci.tipo_pago = 'efectivo'

              this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

              );
              swal.fire(
                'Trago activo',
                `15 minutos quedan para otro trago`,
                'success'
              )
              this.acciones.filter('registrado');
              this.actualizarColor(this.ii);



              



              setTimeout(()=>{
                swal.fire(
                  'se termino el trago',
                  'cambio de color',
                  'success'
                )                       // <<<---using ()=> syntax
                this.actualizarBlanco(this.ii);
                              }, 3000);





              this.modalRef.hide()
              //  this.llamar();


            })



          }

        });
        (() => {


        });

      }
      else if (result.isDenied) {

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

              this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

              );


            })



          }

        });
        (() => {


        });
        swal.fire(
          'Trago pagado con transferencia',
          ` trago pagado con exito.`,
          'success'
        )
        this.llamar();
        this.modalRef.hide()
        this.acciones.filter('registrado');

      }
      else if (result.isDismissed) {

        {

          let chk = this.elelemtos.nativeElement.querySelectorAll(".chk_sel_box"); let newdata = [];
          chk.forEach(data => {
            if (data['checked']) {
              newdata.push(data['value']);

              this.boxmarcado.box = newdata;
              this.boxmarcado.box.forEach(element => {

                this.acci.id = element
                this.acci.estado = 'pagado';
                this.acci.estado_de_pago = 'pagado';
                this.acci.tipo_pago = 'tarjeta'
                
                this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

                );
                swal.fire(
                  'Trago pagado con tarjeta',
                  ` trago pagado con exito.`,
                  'success'
                )
              })



            }

          });
          (() => {

            swal.fire(
              'Trago pagado',
              ` trago pagado con exito.`,
              'success'
            )
          });
          this.llamar();
          this.modalRef.hide()
          this.acciones.filter('registrado');



        }
      } else if (result.value === '') {


      }


    })





  }

  seleccion(valor) {

    //this.idecito=id
    this.valortotal.push(valor)
    


  }


  onCategoriaPressed(categoriaSelected: any, checked: boolean){
    if (checked) { //Si el elemento fue seleccionado
      //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
      this.categoriaSelectedArray.push(categoriaSelected);
      this.total2 = this.categoriaSelectedArray.reduce((a, b) => a + b, 0);
    

    } else { //Si el elemento fue deseleccionado
      //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
      this.categoriaSelectedArray.splice(this.categoriaSelectedArray.indexOf(categoriaSelected), 1);
    }
  }



  crearCliente() {
    const data = new Usuarios();
    data.nombreUsuario = this.cliente;
    data.tipo = 'cliente';



    this.usuario.registro(data).subscribe(() => {



      this.isRegister = true;
      this.isRegisterFail = false;

      //console.log(this.usuario)
    },
      (error: any) => {
        console.log(error.error.mensaje);
        this.errorMsg = error.error.mensaje;
        this.isRegister = false;
        this.isRegisterFail = true;
      }
    );

  }

  submit() {
    if (this.clienteForm.valid) {
     
      swal.fire('Nuevo Usuario', `Usuario creado con exito!`, 'success')

      this.usuario.filter('registrado');
    }
    else {
      alert("Llena el campo")
    }
  }

  openModalClientes(ids: any) {
    const i = ids;

    const initialState = {

      ids: i

    };
    this.modalRef = this.modalService.show(ClientesComponent, { initialState, class: 'modal-xl' });
  }


  clientes() {
    this.clientess.findAll().subscribe((data) => {
      this.client = data;



    });





  }

  seleccionado(id: number) {
    this.ids = id;
    console.log(this.ids)
    return id;

  }

  seleccionid(id: number) {
    this.ii = id;

    return id
  }



  actualizarColor(id: number) {
    const data = new Usuario();

    data.color = 'verde';



    this.usuario.putActualizarColor(data, id).subscribe(res => console.log(res),
      error => console.log(error));

    if(data.color === 'verde'){

    }



  }

  llamar() {
    swal.fire('inició el tiempo del trago', 'success')

    // this.llamarChicaAviso();
  }


  chicaAviso() {

    swal.fire('se termino el trago');


  }








  actualizarBlanco(id: number) {
    swal.fire('se termino el trago');
    const data = new Usuario();

    data.color = 'blanco';



    this.usuario.putActualizarColor(data, id).subscribe(res => console.log(res),
      error => console.log(error));





  }



  openBottom(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }




  // Fires on button click
  enableDisable() {
    // Enable or disable button conditionally
    if (this.isDisabled == true) {
      this.isDisabled = false;  // Make button enabled
    }

  }

  veinte() {
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

          this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

          );


        })



      }

    });



  }

  openModalTmasivo() {



    this.modalRef = this.modalService.show(ModalTragosMasivosComponent, { class: 'modal-sm' });
  }


  actualizar() {
    this.acciones.filter('registrado');

  }

  selectAllItems() {
    for (const item of this.accione) {
      item.checked = this.selectAll;
      
    }
   

  }


esconderCliente(id: number){
  const data = new Clientes();
    data.estado = false;
  
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

        this.clientess.putActualizar(data, id).subscribe(

        );

    
        swal.fire(
          'cancelado!',
          `Con exito.`,
          'success'
        )
      }

    }

    )
}

  

  startTimer(duration:number):void{
    let timer = duration*60;
    this.timer = setInterval(()=>{
      this.minute =Math.floor(timer/60);
      this.second = timer%60;
      if(--timer<0){
        clearInterval(this.timer);
      }
    },1000);
  }

  


  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  openTimer(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'bottom' });
	}

  onTimeComplete()  {
    this.canSendCode = false;
};










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
              
              
              this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
            error => console.log(error));
           console.log('time iniciado')
          
           
         
              

            })
            //
         
    
      
        
      


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
            this.acci.tipo_pago = 'efectivo'

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
              
              
              this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
            error => console.log(error));
           
            })
            swal.fire(`Se actualizo el color de las chicas a una champaña,recordar: "son 15 minutos"`,'warning');
            
        
        
        
            setTimeout(() => {
              this.idemania.forEach(data => {
                let datito:Usuario = new Usuario();
                datito.color = 'blanco'
            
                this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
              error => console.log(error));
                
              })
              swal.fire(`Se actualizo el color de las chicas y estan libres `,'success');
              
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

            this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

            );


          })



        }

      });
      (() => {


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
        
        
        this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
      error => console.log(error));
     
      })
      swal.fire(`Se actualizo el color de las chicas a una champaña,recordar: "son 15 minutos"`,'warning');
      
        
  
  
  
      setTimeout(() => {
        this.idemania.forEach(data => {
          let datito:Usuario = new Usuario();
          datito.color = 'blanco'
      
          this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
        error => console.log(error));
          
        })
        swal.fire(`Se actualizo el color de las chicas y estan libres `,'success');
    
      }, 9000);

     
   
    }
  }
  )
}

openTimerChica() {
 

  const initialState = {


  };
  this.modalRef = this.modalService.show(PopUpTimerComponent, { class: 'modal-lg', initialState });
}




}
