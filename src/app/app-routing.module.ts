import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosLocalesComponent } from './components/productos-locales/productos-locales.component';
import { LocalesAdheridosComponent } from './components/locales-adheridos/locales-adheridos.component';

const routes: Routes = [
  { path: '', redirectTo: '/locales', pathMatch: 'full' },
  { path: 'locales', component: LocalesAdheridosComponent },
  { path: 'productos/:id', component: ProductosLocalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
