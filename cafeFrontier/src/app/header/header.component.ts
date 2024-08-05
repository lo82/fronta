import { Component, OnInit } from '@angular/core';
import { TokenService } from '../api/token.service';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuarios } from '../class/usuarios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  users: Usuarios[] = [];

  constructor(private tokenService: TokenService,private usuario: UsuariossService,) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();

    }
    this.tokenService.getUserName();
    this.usuario.findAll().subscribe((data) => {
      this.users = data;
    });
  }



}
