import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {

  form: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder, private service: ProdutosService) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [ null,[Validators.required,Validators.minLength(3)]],
      categoriasId: [null,[Validators.required,Validators.max(3)]],
      desc:[null,Validators.required],
      valor:[null,Validators.required]});
  }
  errors(campo: string){
    return this.form.get(campo).errors;
  }
  onSubmit(){
    this.submited = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.service.cadastrar(this.form.value).subscribe();
      alert("seu produto foi cadastrado com sucesso")
    }
  }
  onCancel(){
    this.submited = false;
    this.form.reset();
  }
 
}
