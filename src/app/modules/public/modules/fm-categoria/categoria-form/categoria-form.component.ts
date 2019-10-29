import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../fm-produtos/services/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  form: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder, private service: CategoriaService, private route: ActivatedRoute) { }

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
      
      descricao: [null, Validators.required],
     
    });
  }

  update(categoria) {
    this.form.patchValue({
      id: categoria.id,
      descricao: categoria.descricao,
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
        alert("sua categoria foi atualizada com sucesso");
      } else {
        this.service.cadastrar(this.form.value).subscribe();
        alert("sua categoria foi cadastrada com sucesso")
      }
    }
  }
  onCancel() {
    this.submited = false;
    this.form.reset();
  }

}