import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuarios.service';
import swal from 'sweetalert2';
import { UsuariossService } from '../api/usuarioss.service';
import Swal from 'sweetalert2';
import { AsistenciaService } from '../api/asistencia.service';
import { Asistecia_component } from '../class/classA';
import { DatePipe } from '@angular/common';
import { control } from '../class/control';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VentasDiariasComponent } from '../ventas-diarias/ventas-diarias.component';
import { ModalAsistenciaComponent } from '../modal-asistencia/modal-asistencia.component';
import { TokenService } from '../api/token.service';
//import {FingerprintReader,SampleFormat,DeviceConnected,DeviceDisconnected,SamplesAcquired,AcquisitionStarted,AcquisitionStopped} from "@digitalpersona/devices"
//import '../core/modules/websdk';

@Component({
selector: 'app-usuario',
templateUrl: './usuarios.component.html',
styleUrls: ['./usuarios.component.css']
})
export class UsuarioComponent implements OnInit {
  ListaFingerprintReader:any;
  InfoFingerprintReader:any;
  ListaSamplesFingerPrints:any;
  currentImageFinger:any;

  //private reader:FingerprintReader;
  fecha=new Date();
  modalRef: BsModalRef = new BsModalRef();
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  usuarios: Usuario[];
  public usuario: Usuario  = new Usuario()
  @Input() user!: string;
  public fotoSeleccionada: File;
  roles;

  constructor(private tokenService: TokenService,private usuarioService: UsuariossService,private modalService: BsModalService,private miDatePipe: DatePipe,private asistencia:AsistenciaService, private elelemtos: ElementRef) { 
   // this.reader = new FingerprintReader();
  }

  ngOnInit() {
    this.users()
    this.usuarioService.getUsuario().subscribe(
      (usuarios) => this.usuarios = usuarios
    );
    //$(".lista_usuarios").DataTable();
   /* this.reader = new FingerprintReader();
    this.reader.on("DeviceConnected",this.OnDeviceConnected);
    this.reader.on("DeviceDisconnected",this.onDeviceDisconnected);
    this.reader.on("AcquisitionStarted",this.onAcquisitionStarted);
    this.reader.on("AcquisitionStopped",this.onAcquisitionStopped);
    this.reader.on("SampleAcquired",this.onSamplesAcquired);
*/

  }

 /* ngOnDestroy(){
    this.reader.off("DeviceConnected",this.OnDeviceConnected);
    this.reader.off("DeviceDisconnected",this.onDeviceDisconnected);
    this.reader.off("AcquisitionStarted",this.onAcquisitionStarted);
    this.reader.off("AcquisitionStopped",this.onAcquisitionStopped);
    this.reader.off("SampleAcquired",this.onSamplesAcquired);



  }
*/
  delete(usuario: Usuario): void {
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere Eliminar el usuario ${usuario.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.delete(usuario.id).subscribe
          (response => {
            this.usuarios = this.usuarios.filter(usu => usu !== usuario)
            swal.fire(
              'Usuario Eliminado!',
              `Usuario ${usuario.nombre} eliminado con exito.`,
              'success'
            )
          });
      }
    })
  }
  
  volver(): void {
    window.history.back();
  }




  actualizar(id: number) {
   
    const data = new Usuario();
    data.estado = 'activo';
   
   
    //dat.usuario.id = id;


    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere activar la anfritriona?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desea activar la anfritriona!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        this.usuarioService.putActualizar(data, id).subscribe(

        );

        const dat:control = new control();
        dat.hora_entrada = this.fechaf1 +' H '+ this.fech;
        dat.total_horaextra= '8000';
        dat.usuario ={id:id};;
          this.asistencia.create2(dat).subscribe(
          
            );
            
            swal.fire(
              ` guardada con exito.`,
              'success'
            )
            
      

        location.reload();
       
      }

    }

    )


  }
  seleccionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error Seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      this.fotoSeleccionada;
    }
  }

  subirFoto(){
    if(!this.fotoSeleccionada){
      Swal.fire('Error Upload: ', 'Debe seleccionar una foto', 'error');
    }else{
    this.usuarioService.subirFoto(this.fotoSeleccionada,this.usuario.id)
    
    .subscribe(usuario =>{
      console.log(this.usuario.id)
      this.usuario = usuario;
      Swal.fire('La foto se ha subido correctamente', `La foto se ha subido con exito : ${this.usuario.foto}`, 'success');
    })
    }
  }

  aceptar(id: number){
    const data = new Usuario();
    data.estado = 'inactivo';
   
   
    //dat.usuario.id = id;


    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere desactivar chica?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        this.usuarioService.putActualizar(data, id).subscribe(

        );

        const dat:control = new control();
        dat.hora_entrada = this.fechaf1 +' H '+ this.fech;
        dat.total_horaextra='0';
        dat.usuario ={id:id};;
          this.asistencia.create2(dat).subscribe(
          
            );
            
            swal.fire(
              
              ` guardada con exito.`,
              'success'
            )
            
      

        location.reload();
       
      }

    }

    )


  }

  users(){

    this.roles = this.tokenService.getUserName();
    console.log(this.roles)
  }

/*
  //funciones de digitalpersona
  private OnDeviceConnected = (event:DeviceConnected) =>{};
  private onDeviceDisconnected = (event:DeviceDisconnected)=>{};

  private onAcquisitionStarted =(event:AcquisitionStarted) =>{
    console.log("en el evento acquiStarted");
    console.log(event);
  }

  private onAcquisitionStopped =(event:AcquisitionStopped) =>{
    console.log("en el evento acquiStopped");
    console.log(event);
  }

  private onSamplesAcquired = (event:SamplesAcquired)=>{
    console.log("en el evento: adquisicion de imagen");
    console.log(event);
    this.ListaSamplesFingerPrints = event;
  }

  fn_listaDispositivos(){
    Promise.all([
      this.reader.enumerateDevices()
    ]).then(results => {
      this.ListaFingerprintReader = results[0];
      console.log("Dato dispositivos");
      console.log(this.ListaFingerprintReader);
    }).catch((error)=>{
      console.log(error)
    });

  }

  fn_DeviceInfo(){
    Promise.all([
      this.reader.getDeviceInfo(this.ListaFingerprintReader[0])
    ]).then(results=>{
      this.InfoFingerprintReader = results[0];
      console.log("info FingerReader");
      console.log(this.InfoFingerprintReader);
    }
      )
  }

  fn_StartCaptureFP(){
    this.reader.startAcquisition(SampleFormat.PngImage,this.InfoFingerprintReader['DeviceID']).then
    ((response)=>{
      console.log("tu puedes comenzar a capturar");
      console.log(response);

    }).catch((error)=>{
      console.log(error);
    })

  }

  fn_EndCaptureFP(){
    this.reader.stopAcquisition(this.InfoFingerprintReader['DeviceID']).then
    ((response)=>{
      console.log("tu puedes parar de capturar");
      console.log(response);

    }).catch((error)=>{
      console.log(error);
    })

  }


  fn_capturaFP(){
    var ListImages = this.ListaSamplesFingerPrints['samples'];
    var lsize = Object.keys(ListImages).length;
    if(ListImages!=null && ListImages !=undefined){
      if(lsize>0){
        this.currentImageFinger = ListImages[0];
      }
    }
  }

*/

  }



