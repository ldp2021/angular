import { Component, OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit,DoCheck {
  carrito:any;
  constructor() { }

  ngOnInit(): void {
    this.carrito = localStorage.getItem("carrito")
    this.carrito = JSON.parse(this.carrito);

  }

ngDoCheck(){
  this.carrito = localStorage.getItem("carrito")
  this.carrito = JSON.parse(this.carrito);

}

eliminaItemCarrito(index:number){
  this.carrito = localStorage.getItem("carrito")
  this.carrito = JSON.parse(this.carrito);
  this.carrito.splice(index,1)
  this.carrito = JSON.stringify( this.carrito)
  localStorage.setItem("carrito",this.carrito);

}





}
