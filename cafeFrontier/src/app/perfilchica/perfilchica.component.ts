import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario } from '../usuarios/usuario';
import { UsuariossService } from '../api/usuarioss.service';
import { CajaService } from '../api/caja.service';
import { Acciones } from '../class/classA';

@Component({
  selector: 'app-perfilchica',
  templateUrl: './perfilchica.component.html',
  styleUrls: ['./perfilchica.component.css']
})
export class PerfilchicaComponent implements OnInit {
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
  

  constructor(private cajaservice:CajaService,private usuarioService : UsuariossService,
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
      let id = params['id']
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
      let id = params['id']
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
      let id = params['id']
      if(id){
        this.cajaservice.getEventosid(id).subscribe((usuario)=>{
        this.informe = usuario;   
},
    )
  }

})
  }
}