import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalesAdheridosComponent } from './components/locales-adheridos/locales-adheridos.component';
import { ProductosLocalesComponent } from './components/productos-locales/productos-locales.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LocalesAdheridosComponent,
    ProductosLocalesComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LocalesAdheridosComponent,PedidoComponent]
})
export class AppModule { }
