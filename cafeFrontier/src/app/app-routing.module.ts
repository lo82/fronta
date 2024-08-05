import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChicasComponent } from './chicas/chicas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuarios/usuarios.component';
import { UsuarioFormComponent } from './usuarios/usuario-form.component';
import { CajaComponent } from './caja/caja.component';
import { BarComponent } from './bar/bar.component';
import { PerfilchicaComponent } from './perfilchica/perfilchica.component';
import { InformesComponent } from './informes/informes.component';
import { InformeChicasComponent } from './informe-chicas/informe-chicas.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { UsauriochicaComponent } from './usauriochica/usauriochica.component';
import {ClientePagoComponent} from './cliente-pago/cliente-pago.component'
import { GarzonesComponent } from './garzones/garzones.component';
import { PlanillaSemanalComponent } from './planilla-semanal/planilla-semanal.component';
import { PgarzonComponent } from './pgarzon/pgarzon.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'chicas/:id/:nombre', component: ChicasComponent },
  { path: 'home/:nombreUsuario', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuario', component: UsuarioComponent},
  { path: 'usuarios/form',component: UsuarioFormComponent},
  { path: 'usuarios/form/:id',component :UsuarioFormComponent},
  { path: 'caja', component:CajaComponent},
  { path: 'bar', component:BarComponent},
  { path: 'vistas',component:PerfilchicaComponent},
  { path: 'vistas/:id',component:PerfilchicaComponent},
  { path: 'informes',component:InformesComponent},
  { path: 'infocmechica', component:InformeChicasComponent},
  { path: 'asistencia', component:AsistenciaComponent},
  { path: 'usuariochica', component:UsauriochicaComponent},
  {path:'clientes',component:ClientePagoComponent},
  {path:'garzones/:nombreUsuario/:id',component:GarzonesComponent},
  {path:'planilladep',component:PlanillaSemanalComponent},
  {path:'pgarzon/:nombreUsuario/:id', component:PgarzonComponent},
  {path:'prueba',component:PruebaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
