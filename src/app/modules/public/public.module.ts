import { CategoriaService } from './modules/fm-produtos/services/categoria.service';
import { ProdutosService } from './modules/fm-produtos/services/produtos.service';
import { ProdutosFormComponent } from './modules/fm-produtos/components/produtos-form/produtos-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { HomeComponent } from './components/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { HomeButtonsComponent } from './components/home-buttons/home-buttons.component';
import { InfoComponent } from './components/info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FmCategoriaComponent } from './modules/fm-categoria/fm-categoria.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeButtonsComponent,
    ProdutosFormComponent,
    InfoComponent,
    FmCategoriaComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ],
  providers:[ProdutosService,CategoriaService],
})
export class PublicModule { }
