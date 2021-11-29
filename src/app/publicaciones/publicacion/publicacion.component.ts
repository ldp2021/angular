import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  @Input() item:any;
  @Input() vistaLista:any;

  carrito = new Array();

  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }


  addCarrito(item:any){
    this.carrito= [];
    var dataLocal = localStorage.getItem("carrito")
    if(dataLocal != null){

      this.carrito = JSON.parse(dataLocal)
      this.carrito.push(item)
    }else{
      this.carrito.push(item)
    }


    localStorage.setItem("carrito",JSON.stringify(this.carrito))



  }

  remCarrito(item:any){
    //this.carrito.splice()
    console.log(item)
  }
}

