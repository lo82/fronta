import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CajaService } from '../api/caja.service';
import { Acciones } from '../class/classA';
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../usuarios/usuarios.service';
import * as moment from 'moment';

@Component({
  selector: 'app-planilla-semanal',
  templateUrl: './planilla-semanal.component.html',
  styleUrls: ['./planilla-semanal.component.css']
})
export class PlanillaSemanalComponent implements OnInit {

  acciones: Acciones[];
  bol=false;
  fecha1:string;
  fecha2:string;
  fecha11;
  fecha22;
  comisiones;
  adelanto:number;
  totalpagar;
  totalcomisiones;
  totaladelanto;
  trago;
  servicio;
  servicioiva;
  bonificacion
  trago20:number=0;
  trago20Trans=0;
  trago20Tarjeta=0;
  informes:Acciones[];
  unificado=[];
  id;
  user:Usuario[];
  usei;
  trago30E=0;
  trago30Tar=0;
  trago30Trans=0;
  trago40E=0;
  trago40Tar=0;
  trago40Trans=0;
  serviCE=0;
  servicT=0;
  servicTran=0;
  serviBe=0;
  serviTrans=0;
  serviTar=0;
  barE=0;
  barTar=0;
  barTrans=0;
  come=0;
  comTar=0;
  comTran=0;
  totalTrago20=0;
  totalTrago30=0;
  totalTrago40=0;
  totalcomision=0;
  totalServicio=0;
  adelantos=0;
  nombre='';
  fechaaa:[]=[];
  //fechas
  fechas1:string;
  fechas2:string;
  fechas3:string;
  fechas4:string;
  fechas5:string;
  fechas6:string;
  fechas7:string;
  //fechas2
  tragoF220:number=0;
  tragoF220Trans=0;
  tragoF220Tarjeta=0;
  tragoF230E=0;
  tragoF230Tar=0;
  tragoF230Trans=0;
  tragoF240E=0;
  tragoF240Tar=0;
  tragoF240Trans=0;
  serviCF2E=0;
  servicF2T=0;
  servicTranF2=0;
  serviBeF2=0;
  serviTransF2=0;
  serviTarF2=0;
  barEF2=0;
  barTarF2=0;
  barTransF2=0;
  comeF2=0;
  comTarF2=0;
  comTranF2=0;
  adelantoF2:number=0;
  //
  totalTrago20F2=0;
  totalTrago30F2=0;
  totalTrago40F2=0;
  totalcomisionF2=0;
  totalServicioF2=0;
  adelantosF2=0;
  //f3
  tragoF320:number=0;
  tragoF320Trans=0;
  tragoF320Tarjeta=0;
  tragoF330E=0;
  tragoF330Tar=0;
  tragoF330Trans=0;
  tragoF340E=0;
  tragoF340Tar=0;
  tragoF340Trans=0;
  serviCF3E=0;
  servicF3T=0;
  servicTranF3=0;
  serviBeF3=0;
  serviTransF3=0;
  serviTarF3=0;
  barEF3=0;
  barTarF3=0;
  barTransF3=0;
  comeF3=0;
  comTarF3=0;
  comTranF3=0;
  adelantoF3:number=0;
  //
  totalTrago20F3=0;
  totalTrago30F3=0;
  totalTrago40F3=0;
  totalcomisionF3=0;
  totalServicioF3=0;
  adelantosF3=0;
  //F4
  tragoF420:number=0;
  tragoF420Trans=0;
  tragoF420Tarjeta=0;
  tragoF430E=0;
  tragoF430Tar=0;
  tragoF430Trans=0;
  tragoF440E=0;
  tragoF440Tar=0;
  tragoF440Trans=0;
  serviCF4E=0;
  servicF4T=0;
  servicTranF4=0;
  serviBeF4=0;
  serviTransF4=0;
  serviTarF4=0;
  barEF4=0;
  barTarF4=0;
  barTransF4=0;
  comeF4=0;
  comTarF4=0;
  comTranF4=0;
  adelantoF4:number=0;
  totalTrago20F4=0;
  totalTrago30F4=0;
  totalTrago40F4=0;
  totalcomisionF4=0;
  totalServicioF4=0;
  adelantosF4=0;
  //f5
  tragoF520:number=0;
  tragoF520Trans=0;
  tragoF520Tarjeta=0;
  tragoF530E=0;
  tragoF530Tar=0;
  tragoF530Trans=0;
  tragoF540E=0;
  tragoF540Tar=0;
  tragoF540Trans=0;
  serviCF5E=0;
  servicF5T=0;
  servicTranF5=0;
  serviBeF5=0;
  serviTransF5=0;
  serviTarF5=0;
  barEF5=0;
  barTarF5=0;
  barTransF5=0;
  comeF5=0;
  comTarF5=0;
  comTranF5=0;
  adelantoF5:number=0;
  totalTrago20F5=0;
  totalTrago30F5=0;
  totalTrago40F5=0;
  totalcomisionF5=0;
  totalServicioF5=0;
  adelantosF5=0;
  //F6
  tragoF620:number=0;
  tragoF620Trans=0;
  tragoF620Tarjeta=0;
  tragoF630E=0;
  tragoF630Tar=0;
  tragoF630Trans=0;
  tragoF640E=0;
  tragoF640Tar=0;
  tragoF640Trans=0;
  serviCF6E=0;
  servicF6T=0;
  servicTranF6=0;
  serviBeF6=0;
  serviTransF6=0;
  serviTarF6=0;
  barEF6=0;
  barTarF6=0;
  barTransF6=0;
  comeF6=0;
  comTarF6=0;
  comTranF6=0;
  adelantoF6:number=0;
  totalTrago20F6=0;
  totalTrago30F6=0;
  totalTrago40F6=0;
  totalcomisionF6=0;
  totalServicioF6=0;
  adelantosF6=0;
  //f7
  tragoF720:number=0;
  tragoF720Trans=0;
  tragoF720Tarjeta=0;
  tragoF730E=0;
  tragoF730Tar=0;
  tragoF730Trans=0;
  tragoF740E=0;
  tragoF740Tar=0;
  tragoF740Trans=0;
  serviCF7E=0;
  servicF7T=0;
  servicTranF7=0;
  serviBeF7=0;
  serviTransF7=0;
  serviTarF7=0;
  barEF7=0;
  barTarF7=0;
  barTransF7=0;
  comeF7=0;
  comTarF7=0;
  comTranF7=0;
  adelantoF7:number=0;
  totalTrago20F7=0;
  totalTrago30F7=0;
  totalTrago40F7=0;
  totalcomisionF7=0;
  totalServicioF7=0;
  adelantosF7=0;
  constructor(private cajaservice: CajaService,private activarRoute:ActivatedRoute, private usuario:UsuarioService) { }

  ngOnInit(): void {
    //this.cargarcaja();
    this.usuario.getUsuario().subscribe(dat =>{
      this.user = dat;

    })
  }


  informe(){
    this.bol = true;
    this.trago20=0;
    this.trago20Trans=0;
    this.trago20Tarjeta=0;
    this.trago30E=0;
    this.trago30Tar=0;
    this.trago30Trans=0;
    this.trago40E=0;
    this.trago40Tar=0;
    this.trago40Trans=0;
    this.serviCE=0;
    this.servicT=0;
    this.servicTran=0;
    this.serviBe=0;
    this.serviTrans=0;
    this.serviTar=0;
    this.barE=0;
    this.barTar=0;
    this.barTrans=0;
    this.come=0;
    this.comTar=0;
    this.comTran=0;
    this.tragoF220=0;
    this.tragoF220Trans=0;
    this.tragoF220Tarjeta=0;
    this.tragoF230E=0;
    this.tragoF230Tar=0;
    this.tragoF230Trans=0;
    this.tragoF240E=0;
    this.tragoF240Tar=0;
    this.tragoF240Trans=0;
    this.serviCF2E=0;
    this.servicF2T=0;
    this.servicTranF2=0;
    this.serviBeF2=0;
    this.serviTransF2=0;
    this.serviTarF2=0;
    this.barEF2=0;
    this.barTarF2=0;
    this.barTransF2=0;
    this.comeF2=0;
    this.comTarF2=0;
    this.comTranF2=0;
    this.adelantoF2=0;

    this.tragoF320=0;
  this.tragoF320Trans=0;
  this.tragoF320Tarjeta=0;
  this.tragoF330E=0;
  this.tragoF330Tar=0;
  this.tragoF330Trans=0;
  this.tragoF340E=0;
  this.tragoF340Tar=0;
  this.tragoF340Trans=0;
  this.serviCF3E=0;
  this.servicF3T=0;
  this.servicTranF3=0;
  this.serviBeF3=0;
  this.serviTransF3=0;
  this.serviTarF3=0;
  this.barEF3=0;
  this.barTarF3=0;
  this.barTransF3=0;
  this.comeF3=0;
  this.comTarF3=0;
  this.comTranF3=0;
  this.adelantoF3=0;
  this.totalTrago20F3=0;
  this.totalTrago30F3=0;
  this.totalTrago40F3=0;
  this.totalcomisionF3=0;
  this.totalServicioF3=0;
  this.adelantosF3=0;

  this.tragoF420=0;
  this.tragoF420Trans=0;
  this.tragoF420Tarjeta=0;
  this.tragoF430E=0;
  this.tragoF430Tar=0;
  this.tragoF430Trans=0;
  this.tragoF440E=0;
  this.tragoF440Tar=0;
  this.tragoF440Trans=0;
  this.serviCF4E=0;
  this.servicF4T=0;
  this.servicTranF4=0;
  this.serviBeF4=0;
  this.serviTransF4=0;
  this.serviTarF4=0;
  this.barEF4=0;
  this.barTarF4=0;
  this.barTransF4=0;
  this.comeF4=0;
  this.comTarF4=0;
  this.comTranF4=0;
  this.adelantoF4=0;
  this.totalTrago20F4=0;
  this.totalTrago30F4=0;
  this.totalTrago40F4=0;
  this.totalcomisionF4=0;
  this.totalServicioF4=0;
  this.adelantosF4=0;
  this.tragoF520=0;
  this.tragoF520Trans=0;
  this.tragoF520Tarjeta=0;
  this.tragoF530E=0;
  this.tragoF530Tar=0;
  this.tragoF530Trans=0;
  this.tragoF540E=0;
  this.tragoF540Tar=0;
  this.tragoF540Trans=0;
  this.serviCF5E=0;
  this.servicF5T=0;
  this.servicTranF5=0;
  this.serviBeF5=0;
  this.serviTransF5=0;
  this.serviTarF5=0;
  this.barEF5=0;
  this.barTarF5=0;
  this.barTransF5=0;
  this.comeF5=0;
  this.comTarF5=0;
  this.comTranF5=0;
  this.adelantoF5=0;
  this.totalTrago20F5=0;
  this.totalTrago30F5=0;
  this.totalTrago40F5=0;
  this.totalcomisionF5=0;
  this.totalServicioF5=0;
  this.adelantosF5=0;
  this.tragoF620=0;
  this.tragoF620Trans=0;
  this.tragoF620Tarjeta=0;
  this.tragoF630E=0;
  this.tragoF630Tar=0;
  this.tragoF630Trans=0;
  this.tragoF640E=0;
  this.tragoF640Tar=0;
  this.tragoF640Trans=0;
  this.serviCF6E=0;
  this.servicF6T=0;
  this.servicTranF6=0;
  this.serviBeF6=0;
  this.serviTransF6=0;
  this.serviTarF6=0;
  this.barEF6=0;
  this.barTarF6=0;
  this.barTransF6=0;
  this.comeF6=0;
  this.comTarF6=0;
  this.comTranF6=0;
  this.adelantoF6=0;
  this.totalTrago20F6=0;
  this.totalTrago30F6=0;
  this.totalTrago40F6=0;
  this.totalcomisionF6=0;
  this.totalServicioF6=0;
  this.adelantosF6=0;  
  this.tragoF720=0;
  this.tragoF720Trans=0;
  this.tragoF720Tarjeta=0;
  this.tragoF730E=0;
  this.tragoF730Tar=0;
  this.tragoF730Trans=0;
  this.tragoF740E=0;
  this.tragoF740Tar=0;
  this.tragoF740Trans=0;
  this.serviCF7E=0;
  this.servicF7T=0;
  this.servicTranF7=0;
  this.serviBeF7=0;
  this.serviTransF7=0;
  this.serviTarF7=0;
  this.barEF7=0;
  this.barTarF7=0;
  this.barTransF7=0;
  this.comeF7=0;
  this.comTarF7=0;
  this.comTranF7=0;
  this.adelantoF7=0;
  this.totalTrago20F7=0;
  this.totalTrago30F7=0;
  this.totalTrago40F7=0;
  this.totalcomisionF7=0;
  this.totalServicioF7=0;
  this.adelantosF7=0;
    this.totalTrago20=0;
  this.totalTrago30=0;
  this.totalTrago40=0;
  this.totalcomision =0;
  this.totalServicio=0;
  this.adelanto=0;
  this.nombre='';
    this.cargarcaja();

    this.cajaservice.getInformesusuariosemana(this.usei,this.fecha1,this.fecha2).subscribe(data=>{
      this.acciones=data;
     
      const ini = moment(this.fecha1);
        const fin = moment(this.fecha2);
    
        if (ini.isValid() && fin.isValid()) {
          
          const fechas: string[] = [];
    
          while (ini.isSameOrBefore(fin)) {
            fechas.push(ini.format('YYYY-MM-DD'));
            ini.add(1, 'days');
          }
          
          console.log(fechas[0])
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




      this.acciones.forEach(ele =>{
        console.log(ele)
     
        





        if(ele.usuario.id === this.usei){
          this.nombre = ele.usuario.nombreUsuario
          console.log(this.nombre)
        }

    
        if(ele.dia_activo===this.fechas1  ){

        if(ele.dia_activo===this.fechas1 && ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 20 mil'){
          
          this.trago20 +=ele.comisiones
      
         
        }

        if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 20 mil'){
          
          this.trago20Trans +=ele.comisiones
       
         
        }
       
        if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 20 mil'){
          
          this.trago20Tarjeta +=ele.comisiones
        
         
        }
       
       
    

      if(ele.tipo_accion==='comision_champana' && ele.tipo_pago=== 'efectivo'){
        this.come +=ele.comisiones;

      }
      
      if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='tarjeta'){
        this.comTar +=ele.comisiones;
     
      }

      if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='transferencia'){
        this.comTran +=ele.comisiones;
       
      }


      if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 30 mil'){
          
        this.trago30Tar +=ele.comisiones
      
       
      }
      if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 30 mil'){
          
        this.trago30E +=ele.comisiones
    
       
      }

      if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 30 mil'){
          
        this.trago30Trans +=ele.comisiones
     
       
      }

      if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 40 mil'){
          
        this.trago40Tar +=ele.comisiones
      
       
      }
      if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 40 mil'){
          
        this.trago40E +=ele.comisiones
      
       
      }

      if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 40 mil'){
          
        this.trago40Trans +=ele.comisiones
        
       
      }

      if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='tarjeta' ){
          
        this.servicT +=ele.total_ganado
     
       
      }
      if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='efectivo'){
          
        this.serviCE +=ele.total_ganado
        
       
      }

      if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='transferencia'){
          
        this.serviTrans +=ele.total_ganado
       
       
      }
      if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='tarjeta' ){
          
        this.serviTar +=ele.total_ganado
     
       
      }
      if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='efectivo'){
          
        this.serviBe +=ele.total_ganado
        
       
      }

      if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='transferencia'){
          
        this.servicTran +=ele.total_ganado
       
       
      }

      if(ele.tipo_accion==='bar' && ele.tipo_pago=== 'efectivo'){
        this.barE +=ele.total_ganado;

      }
      
      if(ele.tipo_accion==='bar' && ele.tipo_pago==='tarjeta'){
        this.barTar +=ele.total_ganado;
       
      }

      if(ele.tipo_accion==='bar' && ele.tipo_pago==='transferencia'){
        this.barTrans +=ele.total_ganado;
       
      }

      if(ele.tipo_accion==='adelanto' ){
        this.adelanto +=ele.adelanto;
       
      }
    



    }
    if(ele.dia_activo===this.fechas2  ){

      if(ele.dia_activo===this.fechas2 && ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 20 mil'){
        
        this.tragoF220 +=ele.comisiones
    
       
      }

      if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 20 mil'){
        
        this.tragoF220Trans +=ele.comisiones
     
       
      }
     
      if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 20 mil'){
        
        this.tragoF220Tarjeta +=ele.comisiones
      
       
      }
     
     
  

    if(ele.tipo_accion==='comision_champana' && ele.tipo_pago=== 'efectivo'){
      this.comeF2 +=ele.comisiones;

    }
    
    if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='tarjeta'){
      this.comTarF2 +=ele.comisiones;
   
    }

    if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='transferencia'){
      this.comTranF2 +=ele.comisiones;
     
    }


    if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 30 mil'){
        
      this.tragoF230Tar +=ele.comisiones
    
     
    }
    if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 30 mil'){
        
      this.tragoF230E +=ele.comisiones
  
     
    }

    if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 30 mil'){
        
      this.tragoF230Trans +=ele.comisiones
   
     
    }

    if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 40 mil'){
        
      this.tragoF240Tar +=ele.comisiones
    
     
    }
    if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 40 mil'){
        
      this.tragoF240E +=ele.comisiones
    
     
    }

    if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 40 mil'){
        
      this.tragoF240Trans +=ele.comisiones
      
     
    }

    if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='tarjeta' ){
        
      this.servicF2T +=ele.total_ganado
   
     
    }
    if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='efectivo'){
        
      this.serviCF2E +=ele.total_ganado
      
     
    }

    if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='transferencia'){
        
      this.servicTranF2 +=ele.total_ganado
     
     
    }
    if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='tarjeta' ){
        
      this.serviTarF2 +=ele.total_ganado
   
     
    }
    if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='efectivo'){
        
      this.serviBeF2 +=ele.total_ganado
      
     
    }

    if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='transferencia'){
        
      this.servicTranF2 +=ele.total_ganado
     
     
    }

    if(ele.tipo_accion==='bar' && ele.tipo_pago=== 'efectivo'){
      this.barEF2 +=ele.total_ganado;

    }
    
    if(ele.tipo_accion==='bar' && ele.tipo_pago==='tarjeta'){
      this.barTarF2 +=ele.total_ganado;
     
    }

    if(ele.tipo_accion==='bar' && ele.tipo_pago==='transferencia'){
      this.barTransF2 +=ele.total_ganado;
     
    }

    if(ele.tipo_accion==='adelanto' ){
      this.adelantoF2 +=ele.adelanto;
     
    }
    this.totalTrago20F2 = this.tragoF220 + this.tragoF220Trans+ this.tragoF220Tarjeta;
    this.totalTrago30F2 =  this.tragoF230Tar + this.tragoF230E + this.tragoF230Trans;
    this.totalTrago40F2 =   this.tragoF240Trans +  this.tragoF240Tar + this.tragoF240E;
    this.totalcomisionF2 = this.comeF2 +  + this.comTarF2 + this.comTarF2;
    this.totalServicioF2 = this.servicF2T + this.serviCF2E + this.servicTranF2 + this.serviTarF2 + this.servicTranF2 + this.serviBeF2;


  }
  if(ele.dia_activo===this.fechas3  ){

    if(ele.dia_activo===this.fechas3 && ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 20 mil'){
      
      this.tragoF320 +=ele.comisiones
  
     
    }

    if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 20 mil'){
      
      this.tragoF320Trans +=ele.comisiones
   
     
    }
   
    if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 20 mil'){
      
      this.tragoF320Tarjeta +=ele.comisiones
    
     
    }
   
   


  if(ele.tipo_accion==='comision_champana' && ele.tipo_pago=== 'efectivo'){
    this.comeF3 +=ele.comisiones;

  }
  
  if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='tarjeta'){
    this.comTarF3 +=ele.comisiones;
 
  }

  if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='transferencia'){
    this.comTranF3 +=ele.comisiones;
   
  }


  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 30 mil'){
      
    this.tragoF330Tar +=ele.comisiones
  
   
  }
  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 30 mil'){
      
    this.tragoF330E +=ele.comisiones

   
  }

  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 30 mil'){
      
    this.tragoF330Trans +=ele.comisiones
 
   
  }

  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 40 mil'){
      
    this.tragoF340Tar +=ele.comisiones
  
   
  }
  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 40 mil'){
      
    this.tragoF340E +=ele.comisiones
  
   
  }

  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 40 mil'){
      
    this.tragoF340Trans +=ele.comisiones
    
   
  }

  if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='tarjeta' ){
      
    this.servicF3T +=ele.total_ganado
 
   
  }
  if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='efectivo'){
      
    this.serviCF3E +=ele.total_ganado
    
   
  }

  if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='transferencia'){
      
    this.servicTranF3 +=ele.total_ganado
   
   
  }
  if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='tarjeta' ){
      
    this.serviTarF3 +=ele.total_ganado
 
   
  }
  if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='efectivo'){
      
    this.serviBeF3 +=ele.total_ganado
    
   
  }

  if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='transferencia'){
      
    this.servicTranF3 +=ele.total_ganado
   
   
  }

  if(ele.tipo_accion==='bar' && ele.tipo_pago=== 'efectivo'){
    this.barEF3 +=ele.total_ganado;

  }
  
  if(ele.tipo_accion==='bar' && ele.tipo_pago==='tarjeta'){
    this.barTarF3 +=ele.total_ganado;
   
  }

  if(ele.tipo_accion==='bar' && ele.tipo_pago==='transferencia'){
    this.barTransF3 +=ele.total_ganado;
   
  }

  if(ele.tipo_accion==='adelanto' ){
    this.adelantoF3 +=ele.adelanto;
   
  }
  this.totalTrago20F3 = this.tragoF320 + this.tragoF320Trans+ this.tragoF320Tarjeta;
  this.totalTrago30F3 =  this.tragoF330Tar + this.tragoF330E + this.tragoF330Trans;
  this.totalTrago40F3 =   this.tragoF340Trans +  this.tragoF340Tar + this.tragoF340E;
  this.totalcomisionF3 = this.comeF3 +  + this.comTarF3 + this.comTarF3;
  this.totalServicioF3 = this.servicF3T + this.serviCF3E + this.servicTranF3 + this.serviTarF3 + this.servicTranF3 + this.serviBeF3;


}
if(ele.dia_activo===this.fechas4  ){

  if(ele.dia_activo===this.fechas4 && ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF420 +=ele.comisiones

   
  }

  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF420Trans +=ele.comisiones
 
   
  }
 
  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF420Tarjeta +=ele.comisiones
  
   
  }
 
 


if(ele.tipo_accion==='comision_champana' && ele.tipo_pago=== 'efectivo'){
  this.comeF4 +=ele.comisiones;

}

if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='tarjeta'){
  this.comTarF4 +=ele.comisiones;

}

if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='transferencia'){
  this.comTranF4 +=ele.comisiones;
 
}


if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF430Tar +=ele.comisiones

 
}
if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF430E +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF430Trans +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF440Tar +=ele.comisiones

 
}
if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF440E +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF440Trans +=ele.comisiones
  
 
}

if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='tarjeta' ){
    
  this.servicF4T +=ele.total_ganado

 
}
if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='efectivo'){
    
  this.serviCF4E +=ele.total_ganado
  
 
}

if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='transferencia'){
    
  this.servicTranF4 +=ele.total_ganado
 
 
}
if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='tarjeta' ){
    
  this.serviTarF4 +=ele.total_ganado

 
}
if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='efectivo'){
    
  this.serviBeF4 +=ele.total_ganado
  
 
}

if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='transferencia'){
    
  this.servicTranF4 +=ele.total_ganado
 
 
}

if(ele.tipo_accion==='bar' && ele.tipo_pago=== 'efectivo'){
  this.barEF4 +=ele.total_ganado;

}

if(ele.tipo_accion==='bar' && ele.tipo_pago==='tarjeta'){
  this.barTarF4 +=ele.total_ganado;
 
}

if(ele.tipo_accion==='bar' && ele.tipo_pago==='transferencia'){
  this.barTransF4 +=ele.total_ganado;
 
}

if(ele.tipo_accion==='adelanto' ){
  this.adelantoF4 +=ele.adelanto;
 
}
this.totalTrago20F4 = this.tragoF420 + this.tragoF420Trans+ this.tragoF420Tarjeta;
this.totalTrago30F4 =  this.tragoF430Tar + this.tragoF430E + this.tragoF430Trans;
this.totalTrago40F4 =   this.tragoF440Trans +  this.tragoF440Tar + this.tragoF440E;
this.totalcomisionF4 = this.comeF4 +  + this.comTarF4 + this.comTarF4;
this.totalServicioF4 = this.servicF4T + this.serviCF4E + this.servicTranF4 + this.serviTarF4 + this.servicTranF4 + this.serviBeF4;


}
if(ele.dia_activo===this.fechas5  ){

  if(ele.dia_activo===this.fechas5 && ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF520 +=ele.comisiones

   
  }

  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF520Trans +=ele.comisiones
 
   
  }
 
  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF520Tarjeta +=ele.comisiones
  
   
  }
 
 


if(ele.tipo_accion==='comision_champana' && ele.tipo_pago=== 'efectivo'){
  this.comeF5 +=ele.comisiones;

}

if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='tarjeta'){
  this.comTarF5 +=ele.comisiones;

}

if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='transferencia'){
  this.comTranF5 +=ele.comisiones;
 
}


if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF530Tar +=ele.comisiones

 
}
if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF530E +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF530Trans +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF540Tar +=ele.comisiones

 
}
if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF540E +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF540Trans +=ele.comisiones
  
 
}

if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='tarjeta' ){
    
  this.servicF5T +=ele.total_ganado

 
}
if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='efectivo'){
    
  this.serviCF5E +=ele.total_ganado
  
 
}

if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='transferencia'){
    
  this.servicTranF5 +=ele.total_ganado
 
 
}
if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='tarjeta' ){
    
  this.serviTarF5 +=ele.total_ganado

 
}
if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='efectivo'){
    
  this.serviBeF5 +=ele.total_ganado
  
 
}

if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='transferencia'){
    
  this.servicTranF5 +=ele.total_ganado
 
 
}

if(ele.tipo_accion==='bar' && ele.tipo_pago=== 'efectivo'){
  this.barEF5 +=ele.total_ganado;

}

if(ele.tipo_accion==='bar' && ele.tipo_pago==='tarjeta'){
  this.barTarF5 +=ele.total_ganado;
 
}

if(ele.tipo_accion==='bar' && ele.tipo_pago==='transferencia'){
  this.barTransF5 +=ele.total_ganado;
 
}

if(ele.tipo_accion==='adelanto' ){
  this.adelantoF5 +=ele.adelanto;
 
}
this.totalTrago20F5 = this.tragoF520 + this.tragoF520Trans+ this.tragoF520Tarjeta;
this.totalTrago30F5 =  this.tragoF530Tar + this.tragoF530E + this.tragoF530Trans;
this.totalTrago40F5 =   this.tragoF540Trans +  this.tragoF540Tar + this.tragoF540E;
this.totalcomisionF5 = this.comeF5 +  + this.comTarF5 + this.comTarF5;
this.totalServicioF5 = this.servicF5T + this.serviCF5E + this.servicTranF5 + this.serviTarF5 + this.servicTranF5 + this.serviBeF5;


}
if(ele.dia_activo===this.fechas6  ){

  if(ele.dia_activo===this.fechas6 && ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF620 +=ele.comisiones

   
  }

  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF620Trans +=ele.comisiones
 
   
  }
 
  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF620Tarjeta +=ele.comisiones
  
   
  }
 
 


if(ele.tipo_accion==='comision_champana' && ele.tipo_pago=== 'efectivo'){
  this.comeF6 +=ele.comisiones;

}

if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='tarjeta'){
  this.comTarF6 +=ele.comisiones;

}

if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='transferencia'){
  this.comTranF6 +=ele.comisiones;
 
}


if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF630Tar +=ele.comisiones

 
}
if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF630E +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF630Trans +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF640Tar +=ele.comisiones

 
}
if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF640E +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF640Trans +=ele.comisiones
  
 
}

if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='tarjeta' ){
    
  this.servicF6T +=ele.total_ganado

 
}
if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='efectivo'){
    
  this.serviCF6E +=ele.total_ganado
  
 
}

if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='transferencia'){
    
  this.servicTranF6 +=ele.total_ganado
 
 
}
if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='tarjeta' ){
    
  this.serviTarF6 +=ele.total_ganado

 
}
if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='efectivo'){
    
  this.serviBeF6 +=ele.total_ganado
  
 
}

if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='transferencia'){
    
  this.servicTranF6 +=ele.total_ganado
 
 
}

if(ele.tipo_accion==='bar' && ele.tipo_pago=== 'efectivo'){
  this.barEF6 +=ele.total_ganado;

}

if(ele.tipo_accion==='bar' && ele.tipo_pago==='tarjeta'){
  this.barTarF6 +=ele.total_ganado;
 
}

if(ele.tipo_accion==='bar' && ele.tipo_pago==='transferencia'){
  this.barTransF6 +=ele.total_ganado;
 
}

if(ele.tipo_accion==='adelanto' ){
  this.adelantoF6 +=ele.adelanto;
 
}
this.totalTrago20F6 = this.tragoF620 + this.tragoF620Trans+ this.tragoF620Tarjeta;
this.totalTrago30F6 =  this.tragoF630Tar + this.tragoF630E + this.tragoF630Trans;
this.totalTrago40F6 =   this.tragoF640Trans +  this.tragoF640Tar + this.tragoF640E;
this.totalcomisionF6 = this.comeF6 +  + this.comTarF6 + this.comTarF6;
this.totalServicioF6 = this.servicF6T + this.serviCF6E + this.servicTranF6 + this.serviTarF6 + this.servicTranF6 + this.serviBeF6;


}

if(ele.dia_activo===this.fechas7  ){

  if(ele.dia_activo===this.fechas7 && ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF720 +=ele.comisiones

   
  }

  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF720Trans +=ele.comisiones
 
   
  }
 
  if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 20 mil'){
    
    this.tragoF720Tarjeta +=ele.comisiones
  
   
  }
 
 


if(ele.tipo_accion==='comision_champana' && ele.tipo_pago=== 'efectivo'){
  this.comeF7 +=ele.comisiones;

}

if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='tarjeta'){
  this.comTarF7 +=ele.comisiones;

}

if(ele.tipo_accion==='comision_champana' && ele.tipo_pago==='transferencia'){
  this.comTranF7 +=ele.comisiones;
 
}


if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF730Tar +=ele.comisiones

 
}
if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF730E +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 30 mil'){
    
  this.tragoF730Trans +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF740Tar +=ele.comisiones

 
}
if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF740E +=ele.comisiones

 
}

if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 40 mil'){
    
  this.tragoF740Trans +=ele.comisiones
  
 
}

if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='tarjeta' ){
    
  this.servicF7T +=ele.total_ganado

 
}
if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='efectivo'){
    
  this.serviCF7E +=ele.total_ganado
  
 
}

if(ele.tipo_accion ==='servicio_chica' && ele.tipo_pago==='transferencia'){
    
  this.servicTranF7 +=ele.total_ganado
 
 
}
if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='tarjeta' ){
    
  this.serviTarF7 +=ele.total_ganado

 
}
if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='efectivo'){
    
  this.serviBeF7 +=ele.total_ganado
  
 
}

if(ele.tipo_accion ==='servicio_bar' && ele.tipo_pago==='transferencia'){
    
  this.servicTranF7 +=ele.total_ganado
 
 
}

if(ele.tipo_accion==='bar' && ele.tipo_pago=== 'efectivo'){
  this.barEF7 +=ele.total_ganado;

}

if(ele.tipo_accion==='bar' && ele.tipo_pago==='tarjeta'){
  this.barTarF7 +=ele.total_ganado;
 
}

if(ele.tipo_accion==='bar' && ele.tipo_pago==='transferencia'){
  this.barTransF7 +=ele.total_ganado;
 
}

if(ele.tipo_accion==='adelanto' ){
  this.adelantoF7 +=ele.adelanto;
 
}
this.totalTrago20F7 = this.tragoF720 + this.tragoF720Trans+ this.tragoF720Tarjeta;
this.totalTrago30F7 =  this.tragoF730Tar + this.tragoF730E + this.tragoF730Trans;
this.totalTrago40F7 =   this.tragoF740Trans +  this.tragoF740Tar + this.tragoF740E;
this.totalcomisionF7 = this.comeF7 +  + this.comTarF7 + this.comTarF7;
this.totalServicioF7 = this.servicF7T + this.serviCF7E + this.servicTranF7 + this.serviTarF7 + this.servicTranF7 + this.serviBeF7;


}



      }
      )
      this.totalTrago20 = this.trago20 + this.trago20Trans+ this.trago20Tarjeta;
      this.totalTrago30 =  this.trago30Tar + this.trago30E + this.trago30Trans;
      this.totalTrago40 =  this.trago40Tar +   this.trago40E + this.trago40Trans;
      this.totalcomision = this.come + this.comTar + this.comTran;
      this.totalServicio = this.servicT + this.serviCE + this.serviTrans +  this.serviTar + this.serviBe +  this.servicTran;

    });
 
  }

  cargarcaja() {
    this.cajaservice.cierrecaja().subscribe((data) => {
      this.acciones = data;


    },
    )
  }

  volver(): void {
    window.history.back();
  }

  traerinformechica(){



        this.cajaservice.getInformesusuariosemana(this.id,this.fecha11,this.fecha22).subscribe(usuario=>{ 
        this.acciones = usuario;
        this.acciones.forEach(elem => {
          
          this.comisiones = elem[(1)];
          this.adelanto = elem[(7)];
          this.totalpagar =elem[(1)] + elem[(7)];
        })
      },
    )
  
    

  }

  traerinformechicaid(){
    this.activarRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.cajaservice.getEventosid(id).subscribe((usuario)=>{
        this.informes = usuario;   
},
    )
  }

})
  }

  downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF({
      orientation: 'l', // landscape
      unit: 'pt', // points, pixels won't work properly
      format: 'letter' // set needed dimensions for any element
});
    const options = {
      background: 'white',
      scale: 2
    };
    html2canvas(DATA, options).then((canvas) => {
  
      const img = canvas.toDataURL('image/PNG');
  
      // Add image Canvas to PDF
      const bufferX = 10;
      const bufferY = 10;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }

}
