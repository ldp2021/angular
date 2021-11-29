import { Component,OnInit } from '@angular/core';
import { PublicacionesService } from "./Services/publicaciones.service";
import { ShareService } from "./Services/ShereService/shereService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private publicaciones:PublicacionesService, private share: ShareService ){

  }

  ngOnInit()  {

    this.publicaciones.getPublicaciones().subscribe(res =>{
      console.log(res)
      localStorage.setItem("publicaciones",JSON.stringify(res.data))





    },e=>alert("No se obtuvieron datos."))


  }


}
