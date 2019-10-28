import { CategoriaModel } from './../models/categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService {

  constructor(
    private http : HttpClient
  ) { }
  getProdutos(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>('http://localhost:3000/categorias');
  }
}
