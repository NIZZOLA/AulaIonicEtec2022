import { Component, OnInit } from '@angular/core';
import { Produtos } from '../models/produtos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  produto: Produtos = new Produtos();
  formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder ) {
      this.formCadastro = this.formBuilder.group({
        descricao: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        venda: ['0', Validators.required],
        custo: ['0', Validators.required],
        estoque: ['0', Validators.required],
        unidade: ['', Validators.required],
        ativo: ['', Validators.required]
      });
   }

  ngOnInit() {
  }
  
  SalvarCadastro() {
    console.log('Form submetido: ', this.formCadastro.valid);
  }
}
