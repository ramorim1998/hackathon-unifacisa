import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { PesquisarProdutosComponent } from './components/pesquisar-produtos/pesquisar-produtos.component';
import { FmProdutosRoutingModule } from './fm-produtos-routing.module';
import { ProdutosService } from './services/produtos.service';

@NgModule({
  declarations: [PesquisarProdutosComponent],
  imports: [
    CommonModule,
    FmProdutosRoutingModule,
    SharedComponentsModule
  ],
  providers: [
    ProdutosService
  ]
})
export class FmProdutosModule { }
