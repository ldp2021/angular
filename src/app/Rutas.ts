import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { InformacionesComponent } from './informaciones/informaciones.component';
import { LoginComponent } from './login/login.component';
import { ComprarComponent } from './comprar/comprar.component';
const rutas: Routes = [
  { path: 'home', component: PublicacionesComponent },
  { path: 'informacion', component: InformacionesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'compra', component: ComprarComponent },

 { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      rutas,
      { enableTracing: false }
    )
  ],
  declarations: [],
  exports :[
    RouterModule
  ],
})
export class RutasModule {

 }
