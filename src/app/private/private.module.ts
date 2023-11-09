import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';  
import { CuentaComponent } from './Componentes/cuenta/cuenta.component';
import { CambioPasswordComponent } from './Componentes/cambio-password/cambio-password.component';
import { ComprasComponent } from './Componentes/compras/compras.component';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './Componentes/home/home.component';
import { MasComponent } from './Componentes/mas/mas.component';
import { CategoriasComponent } from './Componentes/categorias/categorias.component';



@NgModule({
  declarations: [
    CuentaComponent,
    CambioPasswordComponent,
    ComprasComponent,
    PrivateComponent,
    HomeComponent,
    MasComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
