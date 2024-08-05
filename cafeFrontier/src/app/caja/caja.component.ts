import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../api/acciones.service';
import { Acciones } from '../class/classA';
import { Total_dia } from '../class/classA';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { TotaldiaService } from '../api/totaldia.service';
import { CajaService } from '../api/caja.service';
import swal from 'sweetalert2'
import { acciones } from '../class/acciones';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  cie:Acciones[];
  acciones: Acciones[];
  cierre: Acciones[];
  cierreDatos:Acciones[];
  tdia: Total_dia[];
  bdcaja:Total_dia[];
  public totaldia: Total_dia = new Total_dia()
  public acion: Acciones = new Acciones()
  caja;
  tipo_pago;
  comisiones;
  totalganado;
  totaltrago;
  ivatrago;
  ivaservicio;
  totalservicio;
  adelanto;
  ctotaltrago;
  civatrago;
  civaservicio;
  ctotalservicio;
  nombretrago;
  nombreservicio;
  nombre: string;
  fecha = new Date();
  fechaf1 = this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fechatitulo = this.miDatePipe.transform(this.fecha, 'dd-MM-yyyy');
  totalcaja: number;
  efectivoTrago:number =0;
  tarjetaTrago:number =0;
  transferenciaT:number =0;
  efectivoS:number=0;
  tarjetaS:number=0;
  transferenciaS:number=0;
  champaE:number=0;
  champaTar:number=0;
  champaTrans:number=0;
  propinaE:number =0;
  propinaT:number=0;
  bono:number =0;
  barE:number=0;
  barTrans:number=0;
  barTar:number=0;
  totalE:number=0;
  totalTar:number=0;
  totalTrs:number=0;
  totalSer:number=0;
  ivaTar:number =0;
  totalSTAR:number=0;
  serBar:number=0;
  serBare:number=0;
  serChice:number =0;
  serBarTrans:number=0;
  serChicTrans:number=0;
  //bdcaja;
  ingresoscajadia = 0;
  ingresoscajadia2;
  versidiaocupado;
  estado
  trago: any = 1;
  
  constructor(private cajaservice: CajaService, private totalservice: TotaldiaService, private router: Router, private accionservice: AccionesService, private miDatePipe: DatePipe) { }


  ngOnInit(): void {
    this.cargarcaja();
    //this.cargartotal();
    this.calculocaja();
    //this.cargartotaldia();
    this.bccaja();
  }

  volver(): void {
    window.history.back();
  }

  bccaja() {
    this.cajaservice.bcaja().subscribe(
      bcaja => {
        this.bdcaja = bcaja
        this.bdcaja.forEach(element =>{
          this.estado=element.estado
          console.log(this.bdcaja)
        }


        )

        //var numberValue = Number(this.bdcaja)
        var numberValue2 = Number(this.totalcaja)
        this.totalcaja = + numberValue2
        console.log(this.totalcaja)
      }

    )
  }

  cargarcaja() {
    this.cajaservice.cierrecaja().subscribe((data) => {
      this.acciones = data;

    },
    )
  }

  creardia() {
    const data = new acciones();
    this.totaldia.fechadia = this.fechaf1
    this.totaldia.estado = 'activo'
    data.caja= this.totaldia.ingreso_caja
    data.fecha_dia = this.fechaf1
    data.dia_activo = this.fechaf1
    data.tipo_accion = 'inicio caja'
    data.estado = 'pagado'
    data.tragos ={ id: this.trago };
    data.servicio={ id: this.trago };
    data.usuario = { id: this.trago };
    this.accionservice.createser(data).subscribe(
      response => {})
    
    this.totalservice.crear(this.totaldia).subscribe(
      response => {

        window.location.reload();
      }

    );

  }

  calculocaja() {
  this.efectivoTrago = 0;
  this.transferenciaT = 0;
  this.tarjetaTrago = 0;
  this.efectivoS=0;
  this.tarjetaS=0;
  this.transferenciaS=0;
  this.champaE=0;
  this.champaTar=0;
  this.champaTrans=0;
  this.propinaE =0;
  this.propinaT=0;
  this.bono =0;
  this.barE =0;
  this.barTar=0;
  this.barTrans=0;
  this.totalTar=0;
  this.totalTrs =0;
  this.totalSer=0;
  this.ivaTar =0;
  this.totalSTAR =0;
  this.serBar=0;
  this.serBare=0;
  this.serChice=0;
  this.serBarTrans=0;
  this.serChicTrans=0;
    this.cajaservice.cajatotalDatos().subscribe(dato =>{
      this.cierreDatos = dato;
      this.cierreDatos.forEach(elemen =>{
        console.log(elemen)
        if(elemen.tipo_accion ==='servicio_bar' && elemen.tipo_pago==='tarjeta'){
          this.serBar +=elemen.total_ganado;
        
         
        }

        if(elemen.tipo_accion ==='servicio_chica' && elemen.tipo_pago==='tarjeta'){
          this.ivaTar +=elemen.iva;
       
        }
        if(elemen.tipo_accion ==='servicio_chica' && elemen.tipo_pago==='tarjeta'){
          this.totalSTAR +=elemen.total_ganado;
           
         
        }

   
        if(elemen.tipo_accion ==='servicio_bar' && elemen.tipo_pago==='efectivo'){
          this.serBare +=elemen.total_ganado;
       
         
        }

        if(elemen.tipo_accion ==='servicio_chica' && elemen.tipo_pago==='efectivo'){
          this.serChice +=elemen.total_ganado;
       
         
         
        }

        if(elemen.tipo_accion ==='servicio_bar' && elemen.tipo_pago==='transferencia'){
          this.serBarTrans +=elemen.total_ganado;
       
         
         
        }

        if(elemen.tipo_accion ==='servicio_chica' && elemen.tipo_pago==='transferencia'){
          this.serChicTrans +=elemen.total_ganado;
     
         
        }




        if(elemen.tipo_accion==='bar' && elemen.tipo_pago=== 'efectivo'){
          this.barE +=elemen.total_ganado;
    
        }
        
        if(elemen.tipo_accion==='bar' && elemen.tipo_pago==='tarjeta'){
          this.barTar +=elemen.total_ganado;
          
        }

        if(elemen.tipo_accion==='bar' && elemen.tipo_pago==='transferencia'){
          this.barTrans +=elemen.total_ganado;
         
        }


        if(elemen.tipo_pago==='efectivo' && elemen.tipo_accion==='trago'){
          this.efectivoTrago +=  elemen.total_ganado;
         
          
        }else if(elemen.tipo_pago==='transferencia' && elemen.tipo_accion==='trago'){
          this.transferenciaT += elemen.total_ganado

        }else if(elemen.tipo_pago==='tarjeta' && elemen.tipo_accion==='trago'){
          this.tarjetaTrago += elemen.total_ganado 
         
        }
          
        
      

        if(elemen.tipo_accion==='propina' && elemen.tipo_pago==='efectivo'){
          this.propinaE += elemen.propina
          
        }else if( elemen.tipo_pago==='tarjeta'){
          this.propinaT += elemen.propina
          
        }
        if(elemen.tipo_accion==='adelanto'){
          this.bono +=elemen.adelanto
         
        }

      

       
        this.totalE= this.efectivoTrago + this.barE + this.caja;
        this.totalTar =  this.tarjetaTrago + this.barTar + this.ivaTar;
   
        this.totalTrs = this.transferenciaT +this.barTrans;

        this.totalSer =  this.serBar +  this.totalSTAR + this.serBare + this.serChice + this.serBarTrans +  this.serChicTrans ; 
      
        this.totalcaja =  this.totalTar + this.totalE + this.totalTrs + this.totalSer + this.caja
      })
       


    })



    this.cajaservice.cajatotal().subscribe(data => {
      this.cierre = data;
      this.cierre.forEach(elem => {
    
  

        this.caja = elem[(0)];
        this.tipo_pago = elem[(1)];
       
        this.totalganado = elem[(2)];
        this.ivatrago = elem[(3)];
        this.totaltrago = elem[(4)];
        this.ivaservicio = elem[(5)];
        this.totalservicio = elem[(6)];
        this.adelanto = elem[(7)];

        
        
      })

    },

    )

  }
  findia(){
    swal.fire({
      title: 'Esta seguro?',
      text: `¿Quiere Finalizar el dia ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, finalizar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.cajaservice.findia().subscribe(data=>{
          this.cie=data;

  
        })
        window.location.reload();
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
      docResult.save(`${new Date().toISOString()}_caja.pdf`);
    });
  }



}
