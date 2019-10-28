import { FmCategoriaComponent } from './modules/fm-categoria/fm-categoria.component';
import { InfoComponent } from './components/info/info.component';
import { ProdutosFormComponent } from './modules/fm-produtos/components/produtos-form/produtos-form.component';
import { HomeButtonsComponent } from './components/home-buttons/home-buttons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'hackathon-unifacisa',
    component: HomeComponent,
    children: [
      {
        path: 'contribuintes',
        loadChildren: './modules/fm-contribuintes/fm-contribuintes.module#FmContribuintesModule'
      },
      {
        path: 'produtos',
        loadChildren: './modules/fm-produtos/fm-produtos.module#FmProdutosModule'
      }, {
        path: 'home-button', component: HomeButtonsComponent
      },
      { path: 'novo-prod', component: ProdutosFormComponent },
      { path: 'editar-prod/:id', component: ProdutosFormComponent },
      { path: 'info', component: InfoComponent },
      { path: 'categoria', component: FmCategoriaComponent }


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
