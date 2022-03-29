import { Component, OnInit } from '@angular/core';
import { Produtos } from '../models/produtos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  produto: Produtos = new Produtos();
  formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
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

  async SalvarCadastro() {
    
    console.log(this.formCadastro.valid);
    
    if (this.formCadastro.valid) {
      console.log('Form submetido: ', this.formCadastro.valid);

      this.produto.descricao = this.formCadastro.value.descricao;
      this.produto.venda = this.formCadastro.value.venda;
      this.produto.custo = this.formCadastro.value.custo;
      this.produto.estoque = this.formCadastro.value.estoque;
      this.produto.unidade = this.formCadastro.value.unidade;
      this.produto.ativo = this.formCadastro.value.ativo;
      this.produto.id = Guid.create().toString();

      await this.storageService.set(this.produto.id, this.produto);
      this.route.navigateByUrl('/listagem');
    }
    else {
      alert("Formulário inválido !");
    }
  }

  ShowPageListagem() {
    this.route.navigateByUrl('/listagem');
  }
}
