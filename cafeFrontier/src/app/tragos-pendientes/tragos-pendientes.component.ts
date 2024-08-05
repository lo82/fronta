import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccionesService } from '../api/acciones.service';
import { accion } from '../class/accion';
import swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalPendienteComponent } from '../modal-pendiente/modal-pendiente.component';
import { Acciones, Boxmarcado } from '../class/classA';
import { Usuario } from '../usuarios/usuario';
import { UsuariossService } from '../api/usuarioss.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Usuarios } from '../class/usuarios';
import { ModalTragoPComponent } from '../modal-trago-p/modal-trago-p.component';
import { TimerService } from '../api/timer.service';
import { Observable } from 'rxjs';
import { ControlService } from '../api/control.service';

interface User {
  id: number;
  timer: number; // tiempo restante en segundos
}


@Component({
  selector: 'app-tragos-pendientes',
  templateUrl: './tragos-pendientes.component.html',
  styleUrls: ['./tragos-pendientes.component.css']
})
export class TragosPendientesComponent implements OnInit {
  @Output() idEmitter = new EventEmitter<number>();
  user: User = { id: 1, timer: 3600 }; // 1 hora
  duration: number = 2;
  clickCount: number = 0;
  clickLimit: number = 2;
  minute:number =0;
  second:number=0;
  timer:any;
  newdata = [];
  idemania=[];
  pagar = false;
  valor;
  e: string;
  total: number;
  users: Usuarios[] = [];
  cliente = 'cliente';
  selectAll: any;
  subscription: Subscription;
  accione: Array<Acciones>;
  categoriaSelectedArray = [];
  private acci: Acciones = new Acciones();
  modalRef: BsModalRef = new BsModalRef();
  valortotal = [];
  total2;
  ids: number;
  ii: number;
  idecito: number;
  s1
  private boxmarcado: Boxmarcado = new Boxmarcado();
  constructor(private acciones: AccionesService, private countdownService: ControlService,private elelemtos: ElementRef,private timerService:TimerService, private usuario: UsuariossService, private modalService: BsModalService,) { }

  ngOnInit(): void {
    this.seleccionid(this.ii);
    this.acciones.findAll().subscribe((data) => {

      this.accione = data;


    });
    this.subscription = this.usuario.refresh$.subscribe(() => {
      this.usuario.findAll().subscribe((data) => {
        this.users = data;
      });

      this.acciones.findAll().subscribe((data) => {

        this.accione = data;


      });

    })

  }

 startCountdown(userId: number) {
    // Verificar si el usuario existe y tiene un timer configurado
    if (this.user.id === userId && this.user.timer > 0) {
      this.user.timer = this.user.timer; // reiniciar el timer
    }
  }


  seleccion(valor) {


    this.valortotal.push(valor)
    console.log(this.valortotal);


    console.log(this.total2);


  }

  seleccionado(id: number) {

    this.ids = id;
    console.log(this.ids)
    return id;

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

  openModalPendiente(id: number) {
    const i = id;

    const initialState = {

      ids: i
    };
    this.modalRef = this.modalService.show(ModalPendienteComponent, { initialState });
  }




  actualizarColor(id: number) {
    const data = new Usuario();

    data.color = 'verde';



    this.usuario.putActualizarColor(data, id).subscribe(res => console.log(res),
      error => console.log(error));

    if (data.color === 'verde') {

    }



  }

  actualizarColorMasivo(color, id: string) {
    const colores = color;



    this.usuario.putActualizarColorMasivo(colores, id).subscribe(res => console.log(res),
      error => console.log(error));




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

  
  onCategoriaPressed(categoriaSelected: any, checked: boolean) {

    if (checked) { //Si el elemento fue seleccionado
      //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
      this.categoriaSelectedArray.push(categoriaSelected);
      this.total2 = this.categoriaSelectedArray.reduce((a, b) => a + b, 0);
      this.s1 = +this.total2;
      console.log(this.s1);

    } else { //Si el elemento fue deseleccionado
      //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
      this.total2 = -this.categoriaSelectedArray.splice(this.categoriaSelectedArray.indexOf(categoriaSelected), 1);
      this.total2 = 0;
    }
  }


  guardarTodos(categoriaSelected: any, checked: boolean) {
    for (const item of this.accione) {
      item.checked = this.selectAll;

    }

    if (checked) { //Si el elemento fue seleccionado
      //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
      this.categoriaSelectedArray.push(categoriaSelected);
      this.total2 = this.categoriaSelectedArray.reduce((a, b) => a + b, 0);
      this.s1 = +this.total2
      console.log(this.s1);

    }

    if (!checked) {

      //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
      this.total2 = 0;
      this.s1 = this.total2;

    }
  }



  openModalTragosP() {


    this.pagar = true;
  }





 

  selectAllItems() {
    for (const item of this.accione) {
      item.checked = this.selectAll;


    }

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

              this.acciones.putActualizarAccion1(this.acci, this.acci.id).subscribe(

              );
             
              swal.fire(
                'Trago pagado con tarjeta',
                ` Tragos pagados de ${this.total2} con exito.`,
                'success'
              )
        
              this.idEmitter.emit(this.ii);
              console.log('id',this.ii)
            
              
           this.startCountdown(this.ii);
         
              
            
            
      
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




  
}





