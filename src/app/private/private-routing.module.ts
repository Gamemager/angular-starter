import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentaComponent } from './Componentes/cuenta/cuenta.component';
import { CambioPasswordComponent } from './Componentes/cambio-password/cambio-password.component';
import { ComprasComponent } from './Componentes/compras/compras.component';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './Componentes/home/home.component';
import { MasComponent } from './Componentes/mas/mas.component';
import { CategoriasComponent } from './Componentes/categorias/categorias.component';


const routes: Routes = [ 
{path: '', component:PrivateComponent,children:
[{path: 'cuenta', component: CuentaComponent},
{path: 'cambioContraseña', component: CambioPasswordComponent},
{path: 'MisCompras', component: ComprasComponent},
{path: "home", component:HomeComponent}, 
{path:"Mas", component:MasComponent},
{path:"Categorias", component:CategoriasComponent},
]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
