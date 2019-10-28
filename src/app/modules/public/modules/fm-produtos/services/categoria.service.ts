import { CategoriaModel } from './../models/categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }
  getCategorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>('http://localhost:3000/categorias');
  }

  cadastrar(modelo: CategoriaModel): Observable<any> {
    return this.http.post<any>('http://localhost:3000/categorias', modelo);
  }

  getById(id) {
    return this.http.get(`${'http://localhost:3000/categorias'}/${id}`);
  }

  atualizar(modelo: CategoriaModel) {
    return this.http.put(`${'http://localhost:3000/categorias'}/${modelo.id}`, modelo)
  }

  excluir(modelo: CategoriaModel): Observable<any> {
    return this.http.delete<any>(`${'http://localhost:3000/categorias'}/${modelo.id}`);
  }
}
