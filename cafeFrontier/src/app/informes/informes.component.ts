import { Component, OnInit } from '@angular/core';
import { CajaService } from '../api/caja.service';
import { Acciones } from '../class/classA';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { servicios } from '../class/servicios';
import { UsuarioService } from '../usuarios/usuarios.service';
import { Usuario } from '../usuarios/usuario';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {
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
     
      this.acciones.forEach(ele =>{
        console.log(ele)
     
        if(ele.usuario.id === this.usei){
          this.nombre = ele.usuario.nombreUsuario

        }


        if(ele.dia_activo===this.fecha1  ){

        if(ele.tipo_accion ==='trago' && ele.tipo_pago==='efectivo' && ele.tragos.nombre_trago==='trago 20 mil'){
          
          this.trago20 +=ele.comisiones
      
         
        }

        if(ele.tipo_accion ==='trago' && ele.tipo_pago==='transferencia' && ele.tragos.nombre_trago==='trago 20 mil'){
          
          this.trago20Trans +=ele.comisiones
       
         
        }
       
        if(ele.tipo_accion ==='trago' && ele.tipo_pago==='tarjeta' && ele.tragos.nombre_trago==='trago 20 mil'){
          
          this.trago20Tarjeta +=ele.comisiones
        
         
        }
       
       
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
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
  
      const img = canvas.toDataURL('image/PNG');
  
      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
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