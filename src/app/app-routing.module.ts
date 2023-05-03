import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosLocalesComponent } from './components/productos-locales/productos-locales.component';
import { LocalesAdheridosComponent } from './components/locales-adheridos/locales-adheridos.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  { path: 'locales', component: LocalesAdheridosComponent },
  { path: 'productos', component: ProductosLocalesComponent },
  { path: 'pedido', component: PedidoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
