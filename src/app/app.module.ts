import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { ComprarComponent } from './comprar/comprar.component';
import { RutasModule } from './Rutas';
import { InformacionesComponent } from './informaciones/informaciones.component';
import { ShareService } from './Services/ShereService/shereService';
import { PublicacionesService } from './Services/publicaciones.service';
import { HttpClientModule } from '@angular/common/http';
import { PublicacionComponent } from './publicaciones/publicacion/publicacion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PublicacionesComponent,
    BarraBusquedaComponent,
    CarritoComponent,
    LoginComponent,
    ComprarComponent,
    InformacionesComponent,
    PublicacionComponent,

  ],
  imports: [
    BrowserModule,
    RutasModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PublicacionesService,ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
