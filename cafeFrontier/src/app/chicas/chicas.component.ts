import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { TokenService } from '../api/token.service';
import { ModalAdelantosComponent } from '../modal-adelantos/modal-adelantos.component';
import { ModalComisionesComponent } from '../modal-comisiones/modal-comisiones.component';
import { ModalServiciosComponent } from '../modal-servicios/modal-servicios.component';
import { ModalTragoComponent } from '../modal-trago/modal-trago.component';
import { VentasDiariasComponent } from '../ventas-diarias/ventas-diarias.component';
import { Subscription } from 'rxjs';

import { Usuarios } from '../class/usuarios';
import { UsuariossService } from '../api/usuarioss.service';
import { NgbNav, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MenuClienteComponent } from '../menu-cliente/menu-cliente.component';
import { ModalTragoCComponent } from '../modal-trago-c/modal-trago-c.component';
import { ModalBonificacionComponent } from '../modal-bonificacion/modal-bonificacion.component';

@Component({
  selector: 'app-chicas',
  templateUrl: './chicas.component.html',
  styleUrls: ['./chicas.component.css']
})
export class ChicasComponent implements OnInit {
  modalRef: BsModalRef = new BsModalRef();
  nombre: string ='';
  id: number = 0;
  ip:number;
  i:number;
  ii: number;
  io:number;
  idecito: number;
  subscription!: Subscription;
  ids: number;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  users: Usuarios[] = [];
  @Input() menuActive: boolean = true;
  onToggleSideNav: any;
  active = 1;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  activeId: any;
  sidebarExpanded = true;
  @Input() collapsed = false;
  @ViewChild('nav', { read: NgbNav })
  nav!: ElementRef;
  handleSidebarToggle = () => this.toggleSidebar.emit(!this.menuActive);
  closeResult: string;
  constructor(private tokenService: TokenService,private route: ActivatedRoute, private router: Router,  private usuario: UsuariossService,
    private modalService: BsModalService,private offcanvasService: NgbOffcanvas) {
    this.nombre = this.route.snapshot.params['nombre'];
    this.id = this.route.snapshot.params['id'];
      this.i = this.route.snapshot.params['id'];
      this.ids = this.route.snapshot.params['id'];
      this.ii =this.route.snapshot.params['id'];
      this.idecito =this.route.snapshot.params['id'];
  }

  openEnd(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { position: 'end' });
	}

  ngOnInit(): void {
   
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    
    this.usuario.findAll().subscribe((data) => {
      this.users = data;
    });
   
  }

  cerrar() {
    this.tokenService.logOut();
  }

  atras() {
    this.router.navigate(['home',this.nombre ]);
  }

  openModalTrago() {
    const initialState = {
      idd:this.id,
      nombre: this.nombre
  };
  this.modalRef = this.modalService.show(ModalTragoComponent, {initialState});
  }



  openModalComision() {
    const initialState = {
      id:this.idecito
  };
  this.modalRef = this.modalService.show(ModalComisionesComponent, {initialState, class: 'modal-xl'});
    
  }

  openModalAdelanto() {
    const initialState = {
      idd:this.ids
  };
  this.modalRef = this.modalService.show(ModalAdelantosComponent, {initialState});
   
  }

  openModalVentas() {
    const initialState = {
      idd:this.ii
  };
  this.modalRef = this.modalService.show(VentasDiariasComponent, {initialState});
   
  }

  openModalClientes() {
    const initialState = {
      id:this.id
  };
  this.modalRef = this.modalService.show(ModalTragoCComponent, {initialState});
   
  }


  openModalBonificacion() {
    const initialState = {
      idd:this.ii
  };
  this.modalRef = this.modalService.show(ModalBonificacionComponent, {initialState});
   
  }


  openModalServicio() {
    const initialState = {
      idd:this.id
  };
  this.modalRef = this.modalService.show(ModalServiciosComponent, {initialState});
   
  }



  volver(): void {
    window.history.back();
  }

}
