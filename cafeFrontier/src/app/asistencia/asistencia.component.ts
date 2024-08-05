import { Component, ElementRef, OnInit } from '@angular/core';
import { AsistenciaService } from '../api/asistencia.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlService } from '../api/control.service';
import { Asistecia_component, Boxmarcado } from '../class/classA';
import swal from 'sweetalert2';
import { UsuariossService } from '../api/usuarioss.service';
import { Usuarios } from '../class/usuarios';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  myForm: FormGroup;
  asistencia;
  caja
 date;
 fecha:any;
 total2;
 valortotal=[];
 asi:Asistecia_component = new Asistecia_component();
 private boxmarcado : Boxmarcado = new Boxmarcado();
 users: Usuarios[] = [];
asistenciaform:any;
  dias= this.cargaDias();
p: string|number;
  constructor(private asistservice:AsistenciaService, private elelemtos: ElementRef,private fb: FormBuilder,private control:ControlService, private usuario:UsuariossService,   private formBuilder: FormBuilder,) { 
    this.asistenciaform = this.formBuilder.group({
      fecha: new FormControl('', Validators.required),
     
    });
  }

  ngOnInit(): void {

    this.cargarasistencia();
    this.myForm = this.fb.group({
      date: null,
      range: null
    });
    this.usuario.findAll().subscribe((data) => {
      this.users = data;
  

    });

  }


  cargarasistencia() {
    this.asistservice.getAsi().subscribe((data) => {
      this.asistencia = data;

    },
    )
  }
  cargaDias(){
    var actual = this.convertUTCDateToLocalDate(new Date());
    var dias=[{id:1,txt:'Lunes'},{id:2,txt:'Martes'},{id:3,txt:'Miercoles'},{id:4,txt:'Jueves'},{id:5,txt:'Viernes'},{id:6,txt:'Sábado'},{id:0,txt:'Domingo'}];
    var data2=[];
    dias.forEach(element=>{
      var sel=false; if(element.id==(actual.getDay())){sel=true;}
      data2.push({id:element.id,text:element.txt,selected:sel})
    });
    return data2;
  }

  convertUTCDateToLocalDate(date){
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();
    newDate.setHours(hours - offset);
    return newDate;   
  }


  onRegister() {
    const data = new Asistecia_component();
    data.fecha = this.fecha;
    data.total_horaextra = '8.000';
   
   /*

    this.usu.registro(data).subscribe(data => {


      swal.fire('Nuevo Usuario', `Usuario creado con exito!`, 'success')
     
      //console.log(this.usuario)
    },
      (error: any) => {
        console.log(error.error.mensaje);
       
      }
    );
*/
  }
  
  guardar(){


    //  const selectedRecords = this.accione.filter((record) => record.total_ganado);
     //x console.log(selectedRecords);
          
          
           
   
  
  
      swal.fire({
       closeButtonHtml:'x',
        title: 'Esta seguro?',
        text: `Asignar asistencia a estas chicas? ` ,
        icon: 'warning',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        showCancelButton: true,
    
        closeButtonAriaLabel:'',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        denyButtonColor: 'blue',
        confirmButtonText: 'si!',
        allowOutsideClick: false,
        cancelButtonText: 'cancelar',
        buttonsStyling:true,
        showCloseButton:true,
       
        
      }).then((result) => {
        if (result.isConfirmed) {
          
      let chk=this.elelemtos.nativeElement.querySelectorAll(".chk_sel_box"); let newdata:number[]=[];
      chk.forEach(data=>{ if(data['checked']){newdata.push(data['value']);
        
          //this.boxmarcado.box=newdata;
          this.boxmarcado.box.forEach(element=>{
            
            
            //this.acci.tragos.valor_trago= element.valor_trago
          this.asi.fecha = this.fecha;
             this.asi.total_horaextra= '8000';
             //this.asi.id=element.id
    
          
            this.asistservice.create(this.asi).subscribe(
          
              );
              swal.fire(
                'Trago pagado con efectivo',
                ` trago pagado con exito.`,
                'success'
              )
         
              
          })
          
          
           
           } 
  
          });
          ((response: any) => {
           
        
          });
          
        }
        
   
        
      })
  
  
  
          
  
    }
  


    seleccion(valor){

      this.valortotal.push(valor)

    
      
  this.total2 = this.valortotal.reduce((a, b) => a );

  console.log(this.total2);
  
    
    
    }
    
    


}
