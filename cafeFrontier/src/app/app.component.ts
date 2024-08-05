import { Component, OnInit } from '@angular/core';
import { TokenService } from './api/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cafeFrontier';
  isLogged = false;
  isLoginFail = false;
  roles =[];
  constructor(private tokenService: TokenService,){}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();

    }
  }

}
