import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  form: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder, private service: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      const produto$ = this.service.getById(id);
      produto$.subscribe(produto => {
        this.update(produto)

      })
    })

    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      categoriasId: [null, [Validators.required, Validators.max(3)]],
      desc: [null, Validators.required],
      valor: [null, Validators.required]
    });
  }

  update(produto) {
    this.form.patchValue({
      id: produto.id,
      nome: produto.nome,
      desc: produto.desc,
      valor: produto.valor,
      categoriaId: produto.categoriaId
    })
  }
  errors(campo: string) {
    return this.form.get(campo).errors;
  }
  onSubmit() {
    this.submited = true;
    console.log(this.form.value);
    if (this.form.valid) {
      if (this.form.value.id  ) {
        this.service.atualizar(this.form.value).subscribe();
        alert("seu produto foi atualizado com sucesso");
      } else {
        this.service.cadastrar(this.form.value).subscribe();
        alert("seu produto foi cadastrado com sucesso")
      }
    }
  }
  onCancel() {
    this.submited = false;
    this.form.reset();
  }

}
