import { Component, OnInit ,Input,OnChanges } from '@angular/core';
import { ShareService } from '../Services/ShereService/shereService';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit,OnChanges {

  dataOriginal:any;
  data:any;
  vistaLista:boolean = false;
  constructor(private share:ShareService) { }

  ngOnInit(): void {
    this.dataOriginal = localStorage.getItem("publicaciones")
    this.dataOriginal = JSON.parse(this.dataOriginal);
    this.data = this.dataOriginal
    console.log(this.dataOriginal)


  }

  ngOnChanges(){

  }

  cambioVista(){
    if(this.vistaLista){
      this.vistaLista = false
    }else{
      this.vistaLista= true
    }
  }

  outFiltro(data:any){

    this.data = data;



  }






}
