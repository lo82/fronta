import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../api/token.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Usuarios } from '../class/usuarios';
import { UsuariossService } from '../api/usuarioss.service';
import { AccionesService } from '../api/acciones.service';
import { ClienteService } from '../api/cliente.service';
import { Clientes } from '../class/clientes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   isLogged = false;
  isLogin = false;
  roles: string[];
  authority: string;
  cliente;
  clienteForm:any;
  isRegister = false;
  isRegisterFail = false;
  errorMsg = '';
  constructor(private tokenService: TokenService,private client:ClienteService, private router: Router,private formBuilder: FormBuilder,     private acciones: AccionesService,   private usuario: UsuariossService,) { 
    this.clienteForm = this.formBuilder.group({
      cliente: new FormControl('', Validators.required),
     
    });

    this.acciones.listen().subscribe((m:any)=>{
      this.ngOnInit();
 
    
    })
  }
  

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogin = true;
      this.isLogged = true;
      this.roles = [];
      this.roles = this.tokenService.getAuthorities();
      this.roles.every(rol => {
        console.log(rol)
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        if (rol === 'ROLE_CHICA') {
          this.authority = 'chica';
          return false;
        }
        if (rol === 'ROLE_MESERO') {
          this.authority = 'mesero';
          return false;
        }else{
          return true;
        }
      });
    }
  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLogin = false;
    this.authority = '';
    this.router.navigate(['login']);
  }

  submit() {
    if (this.clienteForm.valid) {
      console.log(this.clienteForm.value)
      location.reload();
      swal.fire('Nuevo Usuario', `Usuario creado con exito!`, 'success')
    
    }
    else{
      alert("Llena el campo")
    }
  }

  
crearCliente() {
  const data = new Clientes();
  data.nombre_cliente = this.cliente;
  data.estado = true;

  

  this.client.registro(data).subscribe(data => {


 
    
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

}
