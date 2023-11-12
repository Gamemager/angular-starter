import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PublicRoutingModule } from './public-routing.module';
import { AccederComponent } from './componentes/acceder/acceder.component';
import { HomeComponent } from './componentes/home/home.component';
import { AccesoriosComponent } from './componentes/accesorios/accesorios.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { MasComponent } from './componentes/mas/mas.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { SoporteTecnicoComponent } from './componentes/soporte-tecnico/soporte-tecnico.component';
import { AppleComponent } from './componentes/categorias-telefonos/apple/apple.component';
import { SamsungComponent } from './componentes/categorias-telefonos/samsung/samsung.component';
import { XiaomiComponent } from './componentes/categorias-telefonos/xiaomi/xiaomi.component';
import { OppoComponent } from './componentes/categorias-telefonos/oppo/oppo.component';
import { HuaweiComponent } from './componentes/categorias-telefonos/huawei/huawei.component';
import { MotorolaComponent } from './componentes/categorias-telefonos/motorola/motorola.component';
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [AccederComponent, HomeComponent, AccesoriosComponent, CategoriasComponent, MasComponent, RegistroComponent, SoporteTecnicoComponent, AppleComponent, SamsungComponent, XiaomiComponent, OppoComponent, HuaweiComponent, MotorolaComponent, PublicComponent],
  imports: [CommonModule, PublicRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
})
export class PublicModule {}
