import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../api/acciones.service';
import { acciones } from '../class/acciones';
import { DatePipe } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { ModalServiciosComponent } from '../modal-servicios/modal-servicios.component';
import { ActivasComponent } from '../activas/activas.component';
import { Acciones } from '../class/classA';
import { ModalTresMilComponent } from '../modal-tres-mil/modal-tres-mil.component';
import { ModalCuatroMilComponent } from '../modal-cuatro-mil/modal-cuatro-mil.component';
import { ModalCincoMilComponent } from '../modal-cinco-mil/modal-cinco-mil.component';
import { ModalDiezMilComponent } from '../modal-diez-mil/modal-diez-mil.component';
import { ModalDoceMilComponent } from '../modal-doce-mil/modal-doce-mil.component';
import { ModalQuinceMilComponent } from '../modal-quince-mil/modal-quince-mil.component';
import { ModalDieciochoMilComponent } from '../modal-dieciocho-mil/modal-dieciocho-mil.component';
import { ModalVienteMilComponent } from '../modal-viente-mil/modal-viente-mil.component';
import { ModalTrintaMilComponent } from '../modal-trinta-mil/modal-trinta-mil.component';
import { ModalCuarentaMilComponent } from '../modal-cuarenta-mil/modal-cuarenta-mil.component';
import { ModalCincuentaMilComponent } from '../modal-cincuenta-mil/modal-cincuenta-mil.component';
import { ModalSesentaMilComponent } from '../modal-sesenta-mil/modal-sesenta-mil.component';
import { ModalOchentaMilComponent } from '../modal-ochenta-mil/modal-ochenta-mil.component';
import { ModalCientoVeinteMilComponent } from '../modal-ciento-veinte-mil/modal-ciento-veinte-mil.component';
import { ModalCientoCincuentaMilComponent } from '../modal-ciento-cincuenta-mil/modal-ciento-cincuenta-mil.component';
import { ModalCientoOchentaMilComponent } from '../modal-ciento-ochenta-mil/modal-ciento-ochenta-mil.component';
import { ModalOchecientosMilComponent } from '../modal-ochecientos-mil/modal-ochecientos-mil.component';
import { accion } from '../class/accion';
import { ModalC2Component } from '../modal-c2/modal-c2.component';
import { ModalC3Component } from '../modal-c3/modal-c3.component';
import { ModalC4Component } from '../modal-c4/modal-c4.component';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  //valores
  total:number;
  ids: number;
  ii: number;
  idecito: number;
  accione: Array<Acciones>;
  open: boolean = false;
  openi:boolean = false;
  opens:boolean = false;
  modalRef: BsModalRef = new BsModalRef();
  constructor(private acciones: AccionesService, private miDatePipe: DatePipe,private modalService: BsModalService,) { }
  fecha=new Date();
  categoriaSelectedArray = [];
  total2;
  s1;
  fechaf1= this.miDatePipe.transform(this.fecha, 'yyyy-MM-dd');
  fech = this.miDatePipe.transform(this.fecha, 'hh:mm');
  ngOnInit(): void {
    this.accion();

  }
  volver(): void {
    window.history.back();
  }


  accion() {
    this.acciones.findAll().subscribe((data) => {

      this.accione = data;
      this.acciones.filter('registrado');

    });


  }


  onCategoriaPressed(categoriaSelected: any, checked: boolean) {

    if (checked) { //Si el elemento fue seleccionado
      //Agregamos la categoría seleccionada al arreglo de categorías seleccionadas
      this.categoriaSelectedArray.push(categoriaSelected);
      this.total2 = this.categoriaSelectedArray.reduce((a, b) => a + b, 0);
      this.s1 = +this.total2;
      console.log(this.s1);

    } else { //Si el elemento fue deseleccionado
      //Removemos la categoría seleccionada del arreglo de categorías seleccionadas
      this.total2=-this.categoriaSelectedArray.splice(this.categoriaSelectedArray.indexOf(categoriaSelected), 1);
      this.total2= 0;
    }
  }

  openModal() {
    const initialState = {

  };
  this.modalRef = this.modalService.show(ModalComponent, {initialState});
  }

  openModal2() {
    const initialState = {

  };
  this.modalRef = this.modalService.show( ModalC2Component, {initialState});
  }


  openModal3() {
    const initialState = {

  };
  this.modalRef = this.modalService.show(ModalC3Component, {initialState});
  }

  openModal4() {
    const initialState = {

  };
  this.modalRef = this.modalService.show(ModalC4Component, {initialState});
  }


  openModalServicio() {
    const initialState = {

  };
  this.modalRef = this.modalService.show(ModalServiciosComponent, {initialState});
  }

  modalActivas(){

    this.modalRef = this.modalService.show(ActivasComponent);

  }

  //valores


//modales


seleccionado(id: number) {
  this.ids = id;
  console.log(this.ids)
  return id;

}


openModalTresMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalTresMilComponent, {initialState});

}

openModaCuatroMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalCuatroMilComponent, {initialState});

}

openModalCincoMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalCincoMilComponent, {initialState});

}

openModaDiezMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalDiezMilComponent, {initialState});

}

openModalDoceMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalDoceMilComponent, {initialState});

}

openModaQuinceMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalQuinceMilComponent, {initialState});

}

openModalDieciochoMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalDieciochoMilComponent, {initialState});

}

openModalVeinteMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalVienteMilComponent, {initialState});

}

openModalTreintaMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalTrintaMilComponent, {initialState});

}



openModalCincuentail() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalCincuentaMilComponent, {initialState});

}

openModalSesentaMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalSesentaMilComponent, {initialState});

}

openModalOchentaMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalOchentaMilComponent, {initialState});

}

openModalCientoVeinteMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalCientoVeinteMilComponent, {initialState});

}

openModalCientoCincuentaMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalCientoCincuentaMilComponent, {initialState});

}

openModalCientoOchentaMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalCientoOchentaMilComponent, {initialState});

}

openModalOchocientosMil() {
  const initialState = {


};
this.modalRef = this.modalService.show(ModalOchecientosMilComponent, {initialState});

}

calcularTotal() {
  this.total2
}


seleccionid(id: number) {
  this.ii = id;
  console.log(id);
  return id
}

}
