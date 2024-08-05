import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccionesService } from '../api/acciones.service';
import { accion } from '../class/accion';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { AsistenciaService } from '../api/asistencia.service';
import { UsuariossService } from '../api/usuarioss.service';
import { ModalAsistenciaComponent } from '../modal-asistencia/modal-asistencia.component';
import { Usuario } from '../usuarios/usuario';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { CajaService } from '../api/caja.service';
import { Acciones } from '../class/classA';

@Component({
  selector: 'app-modal-comisiones',
  templateUrl: './modal-comisiones.component.html',
  styleUrls: ['./modal-comisiones.component.css']
})
export class ModalComisionesComponent implements OnInit {
  fecha=new Date();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  @Input() public id: any;
  public today: Date = new Date();
  usuario:Usuario;
  acciones:Acciones[];
  informe:Acciones[];
  caja;
  comisiones;
  totalganado;
  totaltrago;
  ivatrago;
  ivaservicio;
  totalservicio;
  adelanto;
  totalcaja;
  totalpagar;
  bdcaja;
  public fotoSeleccionada: File;
  

  constructor(private cajaservice:CajaService,private miDatePipe: DatePipe,private usuarioService : UsuariossService,
    private router:Router,private activarRoute:ActivatedRoute) { }
  
  

  ngOnInit(): void {
    this.cargarchica();
    console.log(this.today);
    this.traerinformechica();
    this.traerinformechicaid();
    this.bccaja();
  }

  bccaja() {
    this.cajaservice.bcaja().subscribe(
      bcaja => {
        this.bdcaja = bcaja
      }

    )
  }

  cargarchica(): void{
    this.activarRoute.params.subscribe(params =>{
      let id = this.id
      if(id){
        this.usuarioService.getUsuarios(id).subscribe((usuario)=> 
        this.usuario = usuario)
        console.log(id);
      }
    })

  }

  seleccionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error Seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada=null;
    }
  }

  subirFoto(){
    if(!this.fotoSeleccionada){
      Swal.fire('Error Upload: ', 'Debe seleccionar una foto', 'error');
    }else{
    this.usuarioService.subirFoto(this.fotoSeleccionada,this.usuario.id)
    .subscribe(chica =>{
      this.usuario = chica;
      Swal.fire('La foto se ha subido correctamente', `La foto se ha subido con exito : ${this.usuario.foto}`, 'success');
      
    })
    }
  }
  traerinformechica(){
    this.activarRoute.params.subscribe(params =>{
      let id = this.id;
      if(id){
        this.cajaservice.getInformesusuario(id).subscribe(usuario=>{ 
        this.acciones = usuario;
        this.acciones.forEach(elem => {
          
          this.comisiones = elem[(1)];
          this.adelanto = elem[(7)];
          this.totalpagar =elem[(1)] + elem[(7)];
        })
      },
    )
  }
    
})
  }

  traerinformechicaid(){
    this.activarRoute.params.subscribe(params =>{
      let id = this.id
      if(id){
        this.cajaservice.getEventosid(id).subscribe((usuario)=>{
        this.informe = usuario;   
},
    )
  }

})
  }
}
