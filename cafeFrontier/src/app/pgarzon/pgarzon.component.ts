import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import * as moment from 'moment';
import { CajaService } from '../api/caja.service';
import { Acciones } from '../class/classA';
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../usuarios/usuarios.service';
import jsPDF from 'jspdf';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { acciones } from '../class/acciones';
import { AccionesService } from '../api/acciones.service';
import { DatePipe } from '@angular/common';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pgarzon',
  templateUrl: './pgarzon.component.html',
  styleUrls: ['./pgarzon.component.css'],
})
export class PgarzonComponent implements OnInit {
  datosForm: FormGroup = new FormGroup({
    vSer: new FormControl(''),
  });
  datoForm: FormGroup = new FormGroup({
    adelan: new FormControl(''),
  });
  adelan!:any;
  isSubmitted = false;
  modalRef: BsModalRef = new BsModalRef();
  isLogged = false;
  acciones: Acciones[];
  bol = false;
  impf1=0;
  impf2=0;
  impf3=0;
  impf4=0;
  impf5=0;
  impf6=0;
  impf7=0;

  //
  adelantof1=0;
  adelantof2=0;
  adelantof3=0;
  adelantof4=0;
  adelantof5=0;
  adelantof6=0;
  adelantof7=0;

  graf1=0;
  graf2=0;
  graf3=0;
  graf4=0;
  graf5=0;
  graf6=0;
  graf7=0;

  //
  propinaf1E = 0;
  propinaf1T = 0;
  propinaf2E = 0;
  propinaf2T = 0;
  propinaf3E = 0;
  propinaf3T = 0;
  propinaf4E = 0;
  propinaf4T = 0;
  propinaf5E = 0;
  propinaf5T = 0;
  propinaf6E = 0;
  propinaf6T = 0;
  propinaf7E = 0;
  propinaf7T = 0;
  //
  fecha1: string;
  fecha2: string;
  fecha11;
  fecha22;
  comisiones;
  adelanto: number;
  totalpagar;
  totalcomisiones;
  totaladelanto;
  trago;
  servicio;
  servicioiva;
  bonificacion;
  trago20: number = 0;
  trago20Trans = 0;
  trago20Tarjeta = 0;
  informes: Acciones[];
  unificado = [];
  id;
  user: Usuario[];
  usei;
  trago30E = 0;
  trago30Tar = 0;
  trago30Trans = 0;
  trago40E = 0;
  trago40Tar = 0;
  trago40Trans = 0;
  serviCE = 0;
  servicT = 0;
  servicTran = 0;
  serviBe = 0;
  serviTrans = 0;
  serviTar = 0;
  barE = 0;
  barTar = 0;
  barTrans = 0;
  come = 0;
  comTar = 0;
  comTran = 0;
  totalTrago20 = 0;
  totalTrago30 = 0;
  totalTrago40 = 0;
  totalcomision = 0;
  totalServicio = 0;
  adelantos = 0;
  nombre = '';
  fechaaa: [] = [];
  //fechas
  fechas1: string;
  fechas2: string;
  fechas3: string;
  fechas4: string;
  fechas5: string;
  fechas6: string;
  fechas7: string;
  //fechas2
  tragoF220: number = 0;
  tragoF220Trans = 0;
  tragoF220Tarjeta = 0;
  tragoF230E = 0;
  tragoF230Tar = 0;
  tragoF230Trans = 0;
  tragoF240E = 0;
  tragoF240Tar = 0;
  tragoF240Trans = 0;
  serviCF2E = 0;
  servicF2T = 0;
  servicTranF2 = 0;
  serviBeF2 = 0;
  serviTransF2 = 0;
  serviTarF2 = 0;
  barEF2 = 0;
  barTarF2 = 0;
  barTransF2 = 0;
  comeF2 = 0;
  comTarF2 = 0;
  comTranF2 = 0;
  adelantoF2: number = 0;
  //
  totalTrago20F2 = 0;
  totalTrago30F2 = 0;
  totalTrago40F2 = 0;
  totalcomisionF2 = 0;
  totalServicioF2 = 0;
  adelantosF2 = 0;
  //f3
  tragoF320: number = 0;
  tragoF320Trans = 0;
  tragoF320Tarjeta = 0;
  tragoF330E = 0;
  tragoF330Tar = 0;
  tragoF330Trans = 0;
  tragoF340E = 0;
  tragoF340Tar = 0;
  tragoF340Trans = 0;
  serviCF3E = 0;
  servicF3T = 0;
  servicTranF3 = 0;
  serviBeF3 = 0;
  serviTransF3 = 0;
  serviTarF3 = 0;
  barEF3 = 0;
  barTarF3 = 0;
  barTransF3 = 0;
  comeF3 = 0;
  comTarF3 = 0;
  comTranF3 = 0;
  adelantoF3: number = 0;
  //
  totalTrago20F3 = 0;
  totalTrago30F3 = 0;
  totalTrago40F3 = 0;
  totalcomisionF3 = 0;
  totalServicioF3 = 0;
  adelantosF3 = 0;
  //F4
  tragoF420: number = 0;
  tragoF420Trans = 0;
  tragoF420Tarjeta = 0;
  tragoF430E = 0;
  tragoF430Tar = 0;
  tragoF430Trans = 0;
  tragoF440E = 0;
  tragoF440Tar = 0;
  tragoF440Trans = 0;
  serviCF4E = 0;
  servicF4T = 0;
  servicTranF4 = 0;
  serviBeF4 = 0;
  serviTransF4 = 0;
  serviTarF4 = 0;
  barEF4 = 0;
  barTarF4 = 0;
  barTransF4 = 0;
  comeF4 = 0;
  comTarF4 = 0;
  comTranF4 = 0;
  adelantoF4: number = 0;
  totalTrago20F4 = 0;
  totalTrago30F4 = 0;
  totalTrago40F4 = 0;
  totalcomisionF4 = 0;
  totalServicioF4 = 0;
  adelantosF4 = 0;
  //f5
  tragoF520: number = 0;
  tragoF520Trans = 0;
  tragoF520Tarjeta = 0;
  tragoF530E = 0;
  tragoF530Tar = 0;
  tragoF530Trans = 0;
  tragoF540E = 0;
  tragoF540Tar = 0;
  tragoF540Trans = 0;
  serviCF5E = 0;
  servicF5T = 0;
  servicTranF5 = 0;
  serviBeF5 = 0;
  serviTransF5 = 0;
  serviTarF5 = 0;
  barEF5 = 0;
  barTarF5 = 0;
  barTransF5 = 0;
  comeF5 = 0;
  comTarF5 = 0;
  comTranF5 = 0;
  adelantoF5: number = 0;
  totalTrago20F5 = 0;
  totalTrago30F5 = 0;
  totalTrago40F5 = 0;
  totalcomisionF5 = 0;
  totalServicioF5 = 0;
  adelantosF5 = 0;
  //F6
  tragoF620: number = 0;
  tragoF620Trans = 0;
  tragoF620Tarjeta = 0;
  tragoF630E = 0;
  tragoF630Tar = 0;
  tragoF630Trans = 0;
  tragoF640E = 0;
  tragoF640Tar = 0;
  tragoF640Trans = 0;
  serviCF6E = 0;
  servicF6T = 0;
  servicTranF6 = 0;
  serviBeF6 = 0;
  serviTransF6 = 0;
  serviTarF6 = 0;
  barEF6 = 0;
  barTarF6 = 0;
  barTransF6 = 0;
  comeF6 = 0;
  comTarF6 = 0;
  comTranF6 = 0;
  adelantoF6: number = 0;
  totalTrago20F6 = 0;
  totalTrago30F6 = 0;
  totalTrago40F6 = 0;
  totalcomisionF6 = 0;
  totalServicioF6 = 0;
  adelantosF6 = 0;
  //f7
  tragoF720: number = 0;
  tragoF720Trans = 0;
  tragoF720Tarjeta = 0;
  tragoF730E = 0;
  tragoF730Tar = 0;
  tragoF730Trans = 0;
  tragoF740E = 0;
  tragoF740Tar = 0;
  tragoF740Trans = 0;
  serviCF7E = 0;
  servicF7T = 0;
  servicTranF7 = 0;
  serviBeF7 = 0;
  serviTransF7 = 0;
  serviTarF7 = 0;
  barEF7 = 0;
  barTarF7 = 0;
  barTransF7 = 0;
  comeF7 = 0;
  comTarF7 = 0;
  comTranF7 = 0;
  adelantoF7: number = 0;
  totalTrago20F7 = 0;
  totalTrago30F7 = 0;
  totalTrago40F7 = 0;
  totalcomisionF7 = 0;
  totalServicioF7 = 0;
  adelantosF7 = 0;

  vSer: any;
  fecha = new Date();
  fechaf1 = this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  constructor(
    private cajaservice: CajaService,
    private accionService: AccionesService,
    private miDatePipe: DatePipe,
    private modalService: BsModalService,
    private activarRoute: ActivatedRoute,
    private usuario: UsuarioService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.nombre = this.route.snapshot.params['nombreUsuario'];
  }

  ngOnInit(): void {
    //this.cargarcaja();
    this.usuario.getUsuario().subscribe((dat) => {
      this.user = dat;
    });

  
  }

  informe() {
    this.adelantof1=0;
    this.adelantof2=0;
    this.adelantof3=0;
    this.adelantof4=0;
    this.adelantof5=0;
    this.adelantof6=0;
    this.adelantof7=0;
    //  
  this.impf1=0;
  this.impf2=0;
  this.impf3=0;
  this.impf4=0;
  this.impf5=0;
  this.impf6=0;
  this.impf7=0;
  //
  this.graf1=0;
  this.graf2=0;
  this.graf3=0;
  this.graf4=0;
  this.graf5=0;
  this.graf6=0;
  this.graf7=0;
    //
    this.propinaf1E = 0;
    this.propinaf1T = 0;
    this.propinaf2E = 0;
    this.propinaf2T = 0;
    this.propinaf3E = 0;
    this.propinaf3T = 0;
    this.propinaf4E = 0;
    this.propinaf4T = 0;
    this.propinaf5E = 0;
    this.propinaf5T = 0;
    this.propinaf6E = 0;
    this.propinaf6T = 0;
    this.propinaf7E = 0;
    this.propinaf7T = 0;
    //
    this.bol = true;
    this.trago20 = 0;
    this.trago20Trans = 0;
    this.trago20Tarjeta = 0;
    this.trago30E = 0;
    this.trago30Tar = 0;
    this.trago30Trans = 0;
    this.trago40E = 0;
    this.trago40Tar = 0;
    this.trago40Trans = 0;
    this.serviCE = 0;
    this.servicT = 0;
    this.servicTran = 0;
    this.serviBe = 0;
    this.serviTrans = 0;
    this.serviTar = 0;
    this.barE = 0;
    this.barTar = 0;
    this.barTrans = 0;
    this.come = 0;
    this.comTar = 0;
    this.comTran = 0;
    this.tragoF220 = 0;
    this.tragoF220Trans = 0;
    this.tragoF220Tarjeta = 0;
    this.tragoF230E = 0;
    this.tragoF230Tar = 0;
    this.tragoF230Trans = 0;
    this.tragoF240E = 0;
    this.tragoF240Tar = 0;
    this.tragoF240Trans = 0;
    this.serviCF2E = 0;
    this.servicF2T = 0;
    this.servicTranF2 = 0;
    this.serviBeF2 = 0;
    this.serviTransF2 = 0;
    this.serviTarF2 = 0;
    this.barEF2 = 0;
    this.barTarF2 = 0;
    this.barTransF2 = 0;
    this.comeF2 = 0;
    this.comTarF2 = 0;
    this.comTranF2 = 0;
    this.adelantoF2 = 0;

    this.tragoF320 = 0;
    this.tragoF320Trans = 0;
    this.tragoF320Tarjeta = 0;
    this.tragoF330E = 0;
    this.tragoF330Tar = 0;
    this.tragoF330Trans = 0;
    this.tragoF340E = 0;
    this.tragoF340Tar = 0;
    this.tragoF340Trans = 0;
    this.serviCF3E = 0;
    this.servicF3T = 0;
    this.servicTranF3 = 0;
    this.serviBeF3 = 0;
    this.serviTransF3 = 0;
    this.serviTarF3 = 0;
    this.barEF3 = 0;
    this.barTarF3 = 0;
    this.barTransF3 = 0;
    this.comeF3 = 0;
    this.comTarF3 = 0;
    this.comTranF3 = 0;
    this.adelantoF3 = 0;
    this.totalTrago20F3 = 0;
    this.totalTrago30F3 = 0;
    this.totalTrago40F3 = 0;
    this.totalcomisionF3 = 0;
    this.totalServicioF3 = 0;
    this.adelantosF3 = 0;

    this.tragoF420 = 0;
    this.tragoF420Trans = 0;
    this.tragoF420Tarjeta = 0;
    this.tragoF430E = 0;
    this.tragoF430Tar = 0;
    this.tragoF430Trans = 0;
    this.tragoF440E = 0;
    this.tragoF440Tar = 0;
    this.tragoF440Trans = 0;
    this.serviCF4E = 0;
    this.servicF4T = 0;
    this.servicTranF4 = 0;
    this.serviBeF4 = 0;
    this.serviTransF4 = 0;
    this.serviTarF4 = 0;
    this.barEF4 = 0;
    this.barTarF4 = 0;
    this.barTransF4 = 0;
    this.comeF4 = 0;
    this.comTarF4 = 0;
    this.comTranF4 = 0;
    this.adelantoF4 = 0;
    this.totalTrago20F4 = 0;
    this.totalTrago30F4 = 0;
    this.totalTrago40F4 = 0;
    this.totalcomisionF4 = 0;
    this.totalServicioF4 = 0;
    this.adelantosF4 = 0;
    this.tragoF520 = 0;
    this.tragoF520Trans = 0;
    this.tragoF520Tarjeta = 0;
    this.tragoF530E = 0;
    this.tragoF530Tar = 0;
    this.tragoF530Trans = 0;
    this.tragoF540E = 0;
    this.tragoF540Tar = 0;
    this.tragoF540Trans = 0;
    this.serviCF5E = 0;
    this.servicF5T = 0;
    this.servicTranF5 = 0;
    this.serviBeF5 = 0;
    this.serviTransF5 = 0;
    this.serviTarF5 = 0;
    this.barEF5 = 0;
    this.barTarF5 = 0;
    this.barTransF5 = 0;
    this.comeF5 = 0;
    this.comTarF5 = 0;
    this.comTranF5 = 0;
    this.adelantoF5 = 0;
    this.totalTrago20F5 = 0;
    this.totalTrago30F5 = 0;
    this.totalTrago40F5 = 0;
    this.totalcomisionF5 = 0;
    this.totalServicioF5 = 0;
    this.adelantosF5 = 0;
    this.tragoF620 = 0;
    this.tragoF620Trans = 0;
    this.tragoF620Tarjeta = 0;
    this.tragoF630E = 0;
    this.tragoF630Tar = 0;
    this.tragoF630Trans = 0;
    this.tragoF640E = 0;
    this.tragoF640Tar = 0;
    this.tragoF640Trans = 0;
    this.serviCF6E = 0;
    this.servicF6T = 0;
    this.servicTranF6 = 0;
    this.serviBeF6 = 0;
    this.serviTransF6 = 0;
    this.serviTarF6 = 0;
    this.barEF6 = 0;
    this.barTarF6 = 0;
    this.barTransF6 = 0;
    this.comeF6 = 0;
    this.comTarF6 = 0;
    this.comTranF6 = 0;
    this.adelantoF6 = 0;
    this.totalTrago20F6 = 0;
    this.totalTrago30F6 = 0;
    this.totalTrago40F6 = 0;
    this.totalcomisionF6 = 0;
    this.totalServicioF6 = 0;
    this.adelantosF6 = 0;
    this.tragoF720 = 0;
    this.tragoF720Trans = 0;
    this.tragoF720Tarjeta = 0;
    this.tragoF730E = 0;
    this.tragoF730Tar = 0;
    this.tragoF730Trans = 0;
    this.tragoF740E = 0;
    this.tragoF740Tar = 0;
    this.tragoF740Trans = 0;
    this.serviCF7E = 0;
    this.servicF7T = 0;
    this.servicTranF7 = 0;
    this.serviBeF7 = 0;
    this.serviTransF7 = 0;
    this.serviTarF7 = 0;
    this.barEF7 = 0;
    this.barTarF7 = 0;
    this.barTransF7 = 0;
    this.comeF7 = 0;
    this.comTarF7 = 0;
    this.comTranF7 = 0;
    this.adelantoF7 = 0;
    this.totalTrago20F7 = 0;
    this.totalTrago30F7 = 0;
    this.totalTrago40F7 = 0;
    this.totalcomisionF7 = 0;
    this.totalServicioF7 = 0;
    this.adelantosF7 = 0;
    this.totalTrago20 = 0;
    this.totalTrago30 = 0;
    this.totalTrago40 = 0;
    this.totalcomision = 0;
    this.totalServicio = 0;
    this.adelanto = 0;

    this.cargarcaja();

    this.cajaservice
      .getInformesusuariosemana(this.id, this.fecha1, this.fecha2)
      .subscribe((data) => {
        this.acciones = data;

        const ini = moment(this.fecha1);
        const fin = moment(this.fecha2);

        if (ini.isValid() && fin.isValid()) {
          const fechas: string[] = [];

          while (ini.isSameOrBefore(fin)) {
            fechas.push(ini.format('YYYY-MM-DD'));
            ini.add(1, 'days');
          }

          console.log(fechas[0]);
          this.fechas1 = fechas[0];
          this.fechas2 = fechas[1];
          this.fechas3 = fechas[2];
          this.fechas4 = fechas[3];
          this.fechas5 = fechas[4];
          this.fechas6 = fechas[5];
          this.fechas7 = fechas[6];
          /* fechas.forEach(v => {
            const d = moment(v).format('DD/MM/YYYY');
             [this.fechas1, this.fechas2, this.fechas3,this.fechas4,this.fechas5,this.fechas6] = d;
             
          }
      
          
          );
             */
        }

        this.acciones.forEach((ele) => {
          console.log(ele);

          if (ele.dia_activo === this.fechas1) {
            if (
              ele.dia_activo === this.fechas1 &&
              ele.tipo_accion === 'propina' &&
              ele.tipo_pago === 'efectivo'
            ) {
              this.propinaf1E += ele.propina;
            }

            if (ele.tipo_accion === 'propina' && ele.tipo_pago === 'tarjeta') {
              this.propinaf1T += ele.propina;
            }
            if (ele.tipo_accion === 'adelanto') {
              this.adelantof1 += ele.adelanto;
            }
            if (ele.tipo_accion === 'bono') {
              this.graf1 += ele.bonificacion;
            }
            if (ele.usuario.estado === 'activo') {
              this.impf1 += ele.usuario.imposiciones;
            }
          }
          if (ele.dia_activo === this.fechas2) {
            if (
              ele.dia_activo === this.fechas2 &&
              ele.tipo_accion === 'propina' &&
              ele.tipo_pago === 'efectivo'
            ) {
              this.propinaf2E += ele.propina;
            }

            if (ele.tipo_accion === 'propina' && ele.tipo_pago === 'tarjeta') {
              this.propinaf2T += ele.propina;
            }
            if (ele.tipo_accion === 'adelanto') {
              this.adelantof2 += ele.adelanto;
            }
            if (ele.tipo_accion === 'bono') {
              this.graf2 += ele.bonificacion;
            }
            if (ele.usuario.estado === 'activo') {
              this.impf2 += ele.usuario.imposiciones;
            }
            
          }
          if (ele.dia_activo === this.fechas3) {
            if (
              ele.dia_activo === this.fechas3 &&
              ele.tipo_accion === 'propina' &&
              ele.tipo_pago === 'efectivo'
            ) {
              this.propinaf3E += ele.propina;
            }

            if (ele.tipo_accion === 'propina' && ele.tipo_pago === 'tarjeta') {
              this.propinaf3T += ele.propina;
            }
            if (ele.tipo_accion === 'adelanto') {
              this.adelantof3 += ele.adelanto;
            }
            if (ele.tipo_accion === 'bono') {
              this.graf3 += ele.bonificacion;
            }
            if (ele.usuario.estado === 'activo') {
              this.impf3 += ele.usuario.imposiciones;
            }
          }
          if (ele.dia_activo === this.fechas4) {
            if (
              ele.dia_activo === this.fechas1 &&
              ele.tipo_accion === 'propina' &&
              ele.tipo_pago === 'efectivo'
            ) {
              this.propinaf4E += ele.propina;
            }

            if (ele.tipo_accion === 'propina' && ele.tipo_pago === 'tarjeta') {
              this.propinaf4T += ele.propina;
            }

            if (ele.tipo_accion === 'adelanto') {
              this.adelantof4 += ele.adelanto;
            }
            if (ele.tipo_accion === 'bono') {
              this.graf4 += ele.bonificacion;
            }
            if (ele.usuario.estado === 'activo') {
              this.impf4 += ele.usuario.imposiciones;
            }
          }
          if (ele.dia_activo === this.fechas5) {
            if (
              ele.dia_activo === this.fechas1 &&
              ele.tipo_accion === 'propina' &&
              ele.tipo_pago === 'efectivo'
            ) {
              this.propinaf5E += ele.propina;
            }

            if (ele.tipo_accion === 'propina' && ele.tipo_pago === 'tarjeta') {
              this.propinaf5T += ele.propina;
            }

            if (ele.tipo_accion === 'adelanto') {
              this.adelantof5 += ele.adelanto;
            }
            if (ele.tipo_accion === 'bono') {
              this.graf5 += ele.bonificacion;
            }
            if (ele.usuario.estado === 'activo') {
              this.impf5 += ele.usuario.imposiciones;
            }
          }
          if (ele.dia_activo === this.fechas6) {
            if (
              ele.dia_activo === this.fechas1 &&
              ele.tipo_accion === 'propina' &&
              ele.tipo_pago === 'efectivo'
            ) {
              this.propinaf6E += ele.propina;
            }

            if (ele.tipo_accion === 'propina' && ele.tipo_pago === 'tarjeta') {
              this.propinaf6T += ele.propina;
            }

            if (ele.tipo_accion === 'adelanto') {
              this.adelantof6 += ele.adelanto;
            }
            if (ele.tipo_accion === 'bono') {
              this.graf6 += ele.bonificacion;
            }
            if (ele.usuario.estado === 'activo') {
              this.impf6 += ele.usuario.imposiciones;
            }
          }

          if (ele.dia_activo === this.fechas7) {
            if (
              ele.dia_activo === this.fechas1 &&
              ele.tipo_accion === 'propina' &&
              ele.tipo_pago === 'efectivo'
            ) {
              this.propinaf7E += ele.propina;
            }

            if (ele.tipo_accion === 'propina' && ele.tipo_pago === 'tarjeta') {
              this.propinaf7T += ele.propina;
            }

            if (ele.tipo_accion === 'adelanto') {
              this.adelantof7 += ele.adelanto;
            }
            if (ele.tipo_accion === 'bono') {
              this.graf7 += ele.bonificacion;
            }
            if (ele.usuario.estado === 'activo') {
              this.impf7 += ele.usuario.imposiciones;
            }
          }
        });
        this.totalTrago20 =
          this.trago20 + this.trago20Trans + this.trago20Tarjeta;
        this.totalTrago30 = this.trago30Tar + this.trago30E + this.trago30Trans;
        this.totalTrago40 = this.trago40Tar + this.trago40E + this.trago40Trans;
        this.totalcomision = this.come + this.comTar + this.comTran;
        this.totalServicio =
          this.servicT +
          this.serviCE +
          this.serviTrans +
          this.serviTar +
          this.serviBe +
          this.servicTran;
      });
  }

  cargarcaja() {
    this.cajaservice.cierrecaja().subscribe((data) => {
      this.acciones = data;
    });
  }

  volver(): void {
    window.history.back();
  }

  traerinformechica() {
    this.cajaservice
      .getInformesusuariosemana(this.id, this.fecha11, this.fecha22)
      .subscribe((usuario) => {
        this.acciones = usuario;
        this.acciones.forEach((elem) => {
          this.comisiones = elem[1];
          this.adelanto = elem[7];
          this.totalpagar = elem[1] + elem[7];
        });
      });
  }

  traerinformechicaid() {
    this.activarRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.cajaservice.getEventosid(id).subscribe((usuario) => {
          this.informes = usuario;
        });
      }
    });
  }

  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF({
      orientation: 'l', // landscape
      unit: 'pt', // points, pixels won't work properly
      format: 'letter', // set needed dimensions for any element
    });
    const options = {
      background: 'white',
      scale: 3,
    };
    html2canvas(DATA, options)
      .then((canvas) => {
        const img = canvas.toDataURL('image/PNG');

        // Add image Canvas to PDF
        const bufferX = 10;
        const bufferY = 10;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) => {
        docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
      });
  }

  openModalGratificacion(templates: TemplateRef<void>) {
    this.modalRef = this.modalService.show(templates);
  }

  openModalAdelanto(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.datosForm.valid) {
      false;
    } else {
    }
  }

  onSub(): void {
    this.isSubmitted = true;
    if (!this.datoForm.valid) {
      false;
    } 
  }

  crearBono() {
    const data = new acciones();
    data.servicio = { id: 1 };
    data.estado = 'pagado';
    data.fecha_dia = this.fechaf1;
    data.bonificacion = this.vSer;
    data.tipo_accion = 'bono';
    data.estado_de_pago = 'pagado';
    data.usuario = { id: this.id };
    data.dia_activo = this.fechaf1;

    swal
      .fire({
        title: 'Esta seguro de:?',
        text: `¿Que quiere dar gratificación?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero!',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.value) {
          this.accionService.postCrearAcciones3(data).subscribe(
            (res) => console.log(res),

            (error) => console.log(error)
          );
          this.modalRef.hide();
        }
      });
  }

  adelantt() {
    const data = new acciones();
    data.servicio = { id: 1 };
    data.estado = 'pagado';
    data.fecha_dia = this.fechaf1;
    data.adelanto = this.adelan;
    data.tipo_accion = 'adelanto';
    data.estado_de_pago = 'pagado';
    data.usuario = { id: this.id };
    data.dia_activo = this.fechaf1;

    swal
      .fire({
        title: 'Esta seguro de dar adelanto?',
        text: `¿Que quiere dar adelanto?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero!',
        cancelButtonText: 'Cancelar',
      })
      .then((result) => {
        if (result.value) {
          this.accionService.postCrearAcciones3(data).subscribe(
            (res) => console.log(res),

            (error) => console.log(error)
          );
          this.modalRef.hide();
        }
      });
  }
}
