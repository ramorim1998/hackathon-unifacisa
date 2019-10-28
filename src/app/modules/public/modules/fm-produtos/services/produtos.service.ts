import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutosModel } from '../models/produto.model';

@Injectable()
export class ProdutosService {

  constructor(
    private http: HttpClient
  ) { }

  getProdutos(): Observable<ProdutosModel[]> {
    return this.http.get<ProdutosModel[]>('http://localhost:3000/produtos');
  }

  cadastrar(modelo: ProdutosModel): Observable<any> {
    return this.http.post<any>('http://localhost:3000/produtos', modelo);
  }

  excluir(modelo: ProdutosModel): Observable<any>{
    return this.http.delete<any>(`${'http://localhost:3000/produtos'}/${modelo.id}`);
  }  

}
