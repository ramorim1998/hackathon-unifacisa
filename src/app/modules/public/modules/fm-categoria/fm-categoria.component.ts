import { CategoriaModel } from './../fm-produtos/models/categoria.model';
import { CategoriaService } from './../fm-produtos/services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fm-categoria',
  templateUrl: './fm-categoria.component.html',
  styleUrls: ['./fm-categoria.component.css']
})
export class FmCategoriaComponent implements OnInit {

  categorias: CategoriaModel[] = [];

  constructor(private service: CategoriaService) { }

  ngOnInit() {
    this.service.getCategorias().subscribe(listaCategoria =>{
      this.categorias = listaCategoria;
    }); 
  }
  excluir(categoria:CategoriaModel) {
    this.service.excluir(categoria).subscribe(sucess => console.log('removido'));
    alert('categoria removida')
  }

}
