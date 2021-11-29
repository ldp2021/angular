import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {
@Input() data:any;
@Output() dataFiltrada = new EventEmitter<any>()

datosFiltrados =[];
inputBuscar:any ='';
  constructor() { }

  ngOnInit(): void {
  }

  outDataFilter(event:any){
    const query = this.inputBuscar.toLowerCase();

    console.log(query);

    if(query===''){
          this.datosFiltrados = this.data
          this.dataFiltrada.emit(this.datosFiltrados)
    }
    else{
      this.datosFiltrados =this.data.filter(function (e: any) {
          return e.titulo.toLowerCase().includes(query);
        } );
    }
    //logica de filtro

    this.dataFiltrada.emit(this.datosFiltrados)

  }





}
