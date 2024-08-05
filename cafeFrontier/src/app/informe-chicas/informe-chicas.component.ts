import { Component, OnInit } from '@angular/core';
import { CajaService } from '../api/caja.service';
import { Acciones } from '../class/classA';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuario } from '../usuarios/usuario';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-informe-chicas',
  templateUrl: './informe-chicas.component.html',
  styleUrls: ['./informe-chicas.component.css']
})
export class InformeChicasComponent implements OnInit {
  acciones: Acciones[];
  fecha1;
  fecha2;
  id;
  comisiones;
  adelanto;
  totalpagar;
  usuarios: Usuario[];
  constructor(private cajaservice: CajaService,private usuarioService: UsuariossService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(
      (usuarios) => this.usuarios = usuarios
    );
  }


  traerinformechica(){

    this.cajaservice.getInformesusuariosemana(this.id,this.fecha1,this.fecha2).subscribe(usuario=>{ 
    this.acciones = usuario;
    this.acciones.forEach(elem => {
      
      this.comisiones = elem[(1)];
      this.adelanto = elem[(7)];
      this.totalpagar =elem[(1)] + elem[(7)];
    })
  },
)

}
volver(): void {
  window.history.back();
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
