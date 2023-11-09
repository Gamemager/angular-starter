import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AccederComponent } from './componentes/acceder/acceder.component';
import { AccesoriosComponent } from './componentes/accesorios/accesorios.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { MasComponent } from './componentes/mas/mas.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SoporteTecnicoComponent } from './componentes/soporte-tecnico/soporte-tecnico.component';
import { AppleComponent } from './componentes/categorias-telefonos/apple/apple.component';
import { HuaweiComponent } from './componentes/categorias-telefonos/huawei/huawei.component';
import { MotorolaComponent } from './componentes/categorias-telefonos/motorola/motorola.component';
import { OppoComponent } from './componentes/categorias-telefonos/oppo/oppo.component';
import { SamsungComponent } from './componentes/categorias-telefonos/samsung/samsung.component';
import { XiaomiComponent } from './componentes/categorias-telefonos/xiaomi/xiaomi.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', redirectTo: '/public/home', pathMatch: 'full'}, { path:'', component: PublicComponent, children:[

    { path: 'home', component: HomeComponent },
    { path: 'acceder', component: AccederComponent },
    { path: 'accesorios', component: AccesoriosComponent}, 
    { path: 'categorias', component: CategoriasComponent},
    { path: 'mas', component: MasComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'soporte_tecnico', component: SoporteTecnicoComponent},
    { path: 'apple', component: AppleComponent},
    { path: 'huawei', component: HuaweiComponent},
    { path: 'motorola', component: MotorolaComponent},
    { path: 'oppo', component: OppoComponent},
    { path: 'samsung', component: SamsungComponent},
    { path: 'xiaomi', component: XiaomiComponent}
  ] },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
