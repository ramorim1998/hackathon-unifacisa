import { CategoriaService } from './../../fm-produtos/services/categoria.service';
import { FmCategoriaComponent } from './../fm-categoria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FmCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], 
  providers: [CategoriaService]
})
export class FmCategoriaRoutingModule { }
