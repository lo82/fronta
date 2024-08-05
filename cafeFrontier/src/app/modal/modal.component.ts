import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TokenService } from '../api/token.service';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuarios } from '../class/usuarios';
import { Boxmarcado } from '../class/classA';
import { acciones } from '../class/acciones';
import { DatePipe } from '@angular/common';
import { AccionesService } from '../api/acciones.service';
import swal from 'sweetalert2';
import { accion } from '../class/accion';
import { acci } from '../class/acci';
import { ClienteService } from '../api/cliente.service';
import { Clientes } from '../class/clientes';
import { Usuario } from '../usuarios/usuario';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class  ModalComponent implements OnInit {
  clickCount: number = 0;
  clickLimit: number = 2;
  pie:any;
  listaNumeros: number[] = [1, 2, 3, 4, 5, 6];
  piezas: any;
  ids:number[]=[];
  client:Clientes[]=[];
  selecc: string = '';
  seleccionados: string = '';
  registros: accion[] = [];
  registrosSeleccionados: accion[] = [];
  newdata = [];
  lista: string[] = ['tarjeta', 'efectivo', 'transferencia'];
  users: Usuarios[] = [];
  modalRef: BsModalRef = new BsModalRef();
  idd: number;
  iiii: number[] = [];
  private acci: acciones = new acciones();
  private boxmarcado: Boxmarcado = new Boxmarcado();
  categoriaSelectedArray = [];
  valor = 120000;
  fecha = new Date();
  fechaf1 = this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  valorChic: number;
  id: any = 1;
  constructor(private tokenService: TokenService,private clientess:ClienteService, private route: ActivatedRoute, private router: Router, private usuario: UsuariossService, private elelemtos: ElementRef,
    private modalService: BsModalService, private miDatePipe: DatePipe, private accioness: AccionesService) { }

  ngOnInit(): void {
    this.usuario.findAll().subscribe((data) => {
      this.users = data;
    });
    this.clientess.findAll().subscribe((data) => {
      this.client = data;
      
    
  
    });
  }

  onCategoriaPressed(categoriaSelected: any, checked: boolean) {
    if (checked) { //Si el elemento fue seleccionado
      //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
      this.categoriaSelectedArray.push(categoriaSelected);
      this.newdata.push(categoriaSelected);

    } else { //Si el elemento fue deseleccionado
      //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
      this.categoriaSelectedArray.splice(this.categoriaSelectedArray.indexOf(categoriaSelected), 1);
    }


  }


  seleccionado(id: number) {
    this.ids.push(id);

    console.log(this.ids);
    if (this.clickCount < this.clickLimit) {
      this.clickCount++;
    }

    return id;

  }


  valorPantalla(cantidadChicas: number, pago: string) {
    this.valorChic = 40000 / cantidadChicas
    let valor = this.valorChic.toFixed();
    let dat: acci = new acci();

    dat.estado = 'pagado';
    dat.tipo_pago = pago;
    dat.tipo_accion = 'bar';
    dat.estado_de_pago = 'pagado';
    dat.usuario = { id: 4 };
    dat.pieza = this.pie;
    dat.tragos = { id: 46 };
    /// cambie formato fecha
    dat.servicio = { id: 1 };
    dat.total_ganado = 80000;
    dat.dia_activo = this.fechaf1;
    dat.fecha_dia = this.fechaf1 + ' H ' + this.fech;
    dat.cantidad =1;

    this.accioness.filter('registrado');
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere pagar la transaccion en:` + pago + `?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desea pagar la transaccion!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {


        /////

        this.accioness.postCrearAccioness(dat).subscribe(
          

        );

        this.pagar();
       

      }
      this.accioness.filter('registrado');
      this.router.navigate(['home']);

    }

    )


  }












  pagar() {
    this.newdata.forEach(data => {
      if (this.clickLimit==2) {
        
        swal.fire('solamente hasta dos chicas')
      }
        

          this.acci.tipo_pago = this.seleccionados;
          this.acci.estado = 'pendiente';
          this.acci.estado_de_pago = 'pendiente';
          this.acci.tragos = { id: 46 };
          this.acci.cliente ={id:this.selecc}
          this.acci.tipo_accion = 'comision_champana';
          this.acci.comisiones = this.valorChic;
          this.acci.usuario = { id: data };
          this.acci.fecha_dia = this.fechaf1 + ' H ' + this.fech;
          this.acci.dia_activo = this.fechaf1;
          this.accioness.postCrearAcciones3(this.acci).subscribe(res => console.log(res),
            error => console.log(error));

        })

        this.modalRef.hide();
        this.newdata.forEach(data => {
          let datito:Usuario = new Usuario();
          datito.color = 'rosado';
          
          
          this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
        error => console.log(error));
       
        })
        swal.fire(`Se actualizo el color de las chicas a una champaña,recordar: "son 30 minutos"`, `la pieza en que se encuentran es el numero: ${this.pie} `,'warning');
        
    


        setTimeout(() => {
          this.newdata.forEach(data => {
            let datito:Usuario = new Usuario();
            datito.color = 'blanco'
        
            this.usuario.putActualizarColor(datito,data).subscribe(res => console.log(res),
          error => console.log(error));
            
          })
          swal.fire(`Se actualizo el color de las chicas y estan libres `, `la pieza en que se encontraban es el numero: ${this.pie} `,'success');
          
        }, 9000);


      }



}



 



