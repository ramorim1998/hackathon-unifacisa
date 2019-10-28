import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from '../../models/produto.model';
import { ProdutosService } from '../../services/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pesquisar-produtos',
  templateUrl: './pesquisar-produtos.component.html',
  styleUrls: ['./pesquisar-produtos.component.css']
})
export class PesquisarProdutosComponent implements OnInit {

  produtos: ProdutosModel[] = [];

  constructor(
    private produtosService: ProdutosService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.produtosService.getProdutos().subscribe(listaProdutos => {
      this.produtos = listaProdutos;
    });
  }
  excluir(produto: ProdutosModel) {
    this.produtosService.excluir(produto).subscribe(sucess => console.log('removido'));
    alert('produto removido')
  }
  editar(id){
    this.router.navigate(['//hackathon-unifacisa/editar-prod'],id),{relativeTo: this.route};
  }
}


