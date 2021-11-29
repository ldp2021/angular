import { Component, OnInit,OnChanges,DoCheck } from '@angular/core';
import { ShareService } from '../Services/ShereService/shereService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnChanges,DoCheck {

  constructor(private ShareService:ShareService) { }
  totalCarrito:any ;

  carritoCantidadItems:number =0;

  carrito:any;

  ngOnInit(): void {
    this.carrito = localStorage.getItem("carrito");
    this.carritoCantidadItems = JSON.parse(this.carrito).length
  }

  ngOnChanges(){

  }

  ngDoCheck(){
    this.carrito = localStorage.getItem("carrito");
    this.carritoCantidadItems = JSON.parse(this.carrito).length
    this.total();
  }

  total(){
    this.totalCarrito =0
    for (const data of JSON.parse(this.carrito)) {
      console.log(data.precio)
      this.totalCarrito +=data.precio


    }

    this.totalCarrito.toFixed(2)


  }

}
