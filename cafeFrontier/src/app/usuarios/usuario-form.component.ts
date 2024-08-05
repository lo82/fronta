import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchAll } from 'rxjs/operators';
import { Usuario } from './usuario';
import { UsuarioService } from './usuarios.service';
import swal from 'sweetalert2'
import {AuthenticationService} from '../api/authentication.service';
import { NuevoUsuario } from '../class/NuevoUsuario';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Usuarios } from '../class/usuarios';
import { UsuariossService } from '../api/usuarioss.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  fieldTextType: boolean = false;
  
  fecha_nacimiento = new Date();
  seleccionados:string;
  nombre_usuario:string;
  cargo:string[]=["garzon","anfritriona","bailarina"];
  datoForm: any;
  estado_civil:string;
  direccion:string;
  primer_nombre: string;
  segundo_nombre:string;
  apellido: string;
  apellido_segundo:string;
  rut:string;
  email:string;
  nombreUsuario: string; 
  password: string;
  rol: string;
  fecha_in :string; 
  tipo: string;
  afp:string;
  public usuario: Usuario  = new Usuario()
  form: any = {};
  private usuarios: any = {};
  isRegisterFail = false;
  errorMsg = '';
  open: boolean = true;
  public fotoSeleccionada: File;
  isRegister = false;

  constructor(private usuarioService:UsuarioService,
    private router: Router,
    private activarRoute:ActivatedRoute,
    public authService:AuthenticationService,
    private formBuilder: FormBuilder,
    private usu:UsuariossService

    ) { }

  ngOnInit(){
    this.cargarUsuario();
    console.log(this.cargarUsuario())
    this.datoForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('', Validators.required),
      nombre_usuario: new FormControl('',Validators.required),
      imposiciones:new FormControl('',Validators.required),
      tipo:new FormControl('', Validators.required),
     nombre_segundo:new FormControl('', Validators.required),
      estado_civil: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      apellido_segundo: new FormControl('',Validators.required),
      rut: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      direccion: new FormControl('',Validators.required),
      afp: new FormControl('',Validators.required),
      nombreUsuario: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      rol: new FormControl('',Validators.required),
      fecha_in : new FormControl('',Validators.required)
    });
 
    
  }

  cargarUsuario(): void{
    this.activarRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.usuarioService.getUsuarios(id).subscribe((usuario)=> this.usuario = usuario)
      }
    })
  }

  update():void{
    this.usuarioService.update(this.usuario)
    .subscribe( usuario => {
        this.router.navigate(['/usuario']);
        swal.fire('Usuario Actualizado',`Usuario ${usuario.nombre} actualizado con exito!`,'success')
      }
    )
  }


  volver(): void {
    window.history.back();
    }
    
    onRegister() {
      const data = new Usuarios();
      data.nombreUsuario = this.nombre_usuario;
      data.nombre = this.primer_nombre;
      data.nombre_segundo = this.segundo_nombre;
      data.apellido = this.apellido;
      data.apellido_segundo = this.apellido_segundo;
      data.rut = this.rut;
      data.email = this.email;
      data.password = this.password;
      data.estado_civil = this.estado_civil;
      data.estado = 'inactivo';
      data.tipo = this.tipo;
      data.direccion = this.direccion;
      data.fecha_nacimiento = this.fecha_nacimiento;     
      data.afp = this.afp;
      this.usu.registro(data).subscribe(data => {
  
  
        swal.fire('Nuevo Usuario', `Usuario creado con exito!`, 'success')
        this.isRegister = true;
        this.isRegisterFail = false;
        this.router.navigate(['/usuario']);
        console.log(data)
      },
        (error: any) => {
          console.log(error.error.mensaje);
          this.errorMsg = error.error.mensaje;
          this.isRegister = false;
          this.isRegisterFail = true;
        }
      );
  
    }
    create(): void{
      this.usuarioService.create(this.usuario).subscribe(
        response => {
          this.router.navigate(['/usuario']);
          
          swal.fire('Nueva Usuario',`Usuario ${response.nombre} creado con exito!`,'success')
    
        }
      );
    }


    toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
    }
  



}
