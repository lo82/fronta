import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChicasComponent } from './chicas/chicas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModalAdelantosComponent } from './modal-adelantos/modal-adelantos.component';
import { ModalComisionesComponent } from './modal-comisiones/modal-comisiones.component';
import { ModalPendienteComponent } from './modal-pendiente/modal-pendiente.component';
import { ModalServiciosComponent } from './modal-servicios/modal-servicios.component';
import { ModalTragoComponent } from './modal-trago/modal-trago.component';
import { UsuarioFormComponent } from './usuarios/usuario-form.component';
import { UsuarioComponent } from './usuarios/usuarios.component';
import { VentasDiariasComponent } from './ventas-diarias/ventas-diarias.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BasicAuthInterceptorServiceService } from './api/basic-auth-interceptor-service.service';
import { BsDatepickerModule, BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { NgbCustomDateParserFormatter } from './api/ngb-custom-date-parser-formatter';
import { CajaComponent } from './caja/caja.component';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BarComponent } from './bar/bar.component';
import { ModalComponent } from './modal/modal.component';
import { PerfilchicaComponent } from './perfilchica/perfilchica.component';
import { InformesComponent } from './informes/informes.component';
import { NavComponent } from './nav/nav.component';
import { InformeChicasComponent } from './informe-chicas/informe-chicas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalAsistenciaComponent } from './modal-asistencia/modal-asistencia.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { ModalTragoCComponent } from './modal-trago-c/modal-trago-c.component';
import { MenuClientessComponent } from './menu-clientess/menu-clientess.component';
import { MenuClientComponent } from './menu-client/menu-client.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ActivasComponent } from './activas/activas.component';
import { ModalTragosMasivosComponent } from './modal-tragos-masivos/modal-tragos-masivos.component';
import { ModalBonificacionComponent } from './modal-bonificacion/modal-bonificacion.component';
import { RecargaDirective } from './directives/recarga.directive';
import { ModalTresMilComponent } from './modal-tres-mil/modal-tres-mil.component';
import { ModalCuatroMilComponent } from './modal-cuatro-mil/modal-cuatro-mil.component';
import { ModalCincoMilComponent } from './modal-cinco-mil/modal-cinco-mil.component';
import { ModalDiezMilComponent } from './modal-diez-mil/modal-diez-mil.component';
import { ModalDoceMilComponent } from './modal-doce-mil/modal-doce-mil.component';
import { ModalQuinceMilComponent } from './modal-quince-mil/modal-quince-mil.component';
import { ModalDieciochoMilComponent } from './modal-dieciocho-mil/modal-dieciocho-mil.component';
import { ModalVienteMilComponent } from './modal-viente-mil/modal-viente-mil.component';
import { ModalTrintaMilComponent } from './modal-trinta-mil/modal-trinta-mil.component';
import { ModalCincuentaMilComponent } from './modal-cincuenta-mil/modal-cincuenta-mil.component';
import { ModalSesentaMilComponent } from './modal-sesenta-mil/modal-sesenta-mil.component';
import { ModalOchentaMilComponent } from './modal-ochenta-mil/modal-ochenta-mil.component';
import { ModalCientoCincuentaMilComponent } from './modal-ciento-cincuenta-mil/modal-ciento-cincuenta-mil.component';
import { ModalCientoOchentaMilComponent } from './modal-ciento-ochenta-mil/modal-ciento-ochenta-mil.component';
import { ModalOchecientosMilComponent } from './modal-ochecientos-mil/modal-ochecientos-mil.component';
import { ModalCuarentaMilComponent } from './modal-cuarenta-mil/modal-cuarenta-mil.component';
import { ModalCientoVeinteMilComponent } from './modal-ciento-veinte-mil/modal-ciento-veinte-mil.component';
import { UsauriochicaComponent } from './usauriochica/usauriochica.component';
import { ModalC2Component } from './modal-c2/modal-c2.component';
import { ModalC3Component } from './modal-c3/modal-c3.component';
import { ModalC4Component } from './modal-c4/modal-c4.component';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { ClientePagoComponent } from './cliente-pago/cliente-pago.component';
import { ClienteMComponent } from './cliente-m/cliente-m.component';
import { TragosPendientesComponent } from './tragos-pendientes/tragos-pendientes.component';
import { ModalPagoComponent } from './modal-pago/modal-pago.component';
import { GarzonesComponent } from './garzones/garzones.component';
import { ModalTragoPComponent } from './modal-trago-p/modal-trago-p.component';
defineLocale('es', esLocale)

import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { PlanillaSemanalComponent } from './planilla-semanal/planilla-semanal.component';
import { PgarzonComponent } from './pgarzon/pgarzon.component';
import { TimercontrolComponent } from './timercontrol/timercontrol.component';
import { TimerPaneComponent } from './timer-pane/timer-pane.component';
import { TimeManagerComponent } from './time-manager/time-manager.component';
import { CountdownComponent } from 'ngx-countdown';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChicasComponent,
    ModalTragoComponent,
    ModalServiciosComponent,
    ModalComisionesComponent,
    ModalAdelantosComponent,
    VentasDiariasComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    ModalPendienteComponent,
    CajaComponent,
    HeaderComponent,
    BarComponent,
    ModalComponent,
    PerfilchicaComponent,
    InformesComponent,
    NavComponent,
    InformeChicasComponent,
    ClientesComponent,
    AsistenciaComponent,
    ModalAsistenciaComponent,
    MenuClienteComponent,
    ModalTragoCComponent,
    MenuClientessComponent,
    MenuClientComponent,
    CuentaComponent,
    ActivasComponent,
    ModalTragosMasivosComponent,
    ModalBonificacionComponent,
    RecargaDirective,
    ModalTresMilComponent,
    ModalCuatroMilComponent,
    ModalCincoMilComponent,
    ModalDiezMilComponent,
    ModalDoceMilComponent,
    ModalQuinceMilComponent,
    ModalDieciochoMilComponent,
    ModalVienteMilComponent,
    ModalTrintaMilComponent,
    ModalCincuentaMilComponent,
    ModalSesentaMilComponent,
    ModalOchentaMilComponent,
    ModalCientoCincuentaMilComponent,
    ModalCientoOchentaMilComponent,
    ModalOchecientosMilComponent,
    ModalCuarentaMilComponent,
    ModalCientoVeinteMilComponent,
    UsauriochicaComponent,
    ModalC2Component,
    ModalC3Component,
    ModalC4Component,
    ClientePagoComponent,
    ClienteMComponent,
    TragosPendientesComponent,
    ModalPagoComponent,
    GarzonesComponent,
    ModalTragoPComponent,
    PlanillaSemanalComponent,
    PgarzonComponent,
    TimercontrolComponent,
    TimerPaneComponent,
    TimeManagerComponent,

  ],
  imports: [
  
    CountdownComponent,
    BrowserModule,
    NgxPaginationModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
        DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
        ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
        ToastNotificationConfigModule.forRoot() 
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorServiceService, multi: true },BsDatepickerConfig,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor( private bsLocaleService: BsLocaleService){
    this.bsLocaleService.use('es');//fecha en español, datepicker
    
  }

}
