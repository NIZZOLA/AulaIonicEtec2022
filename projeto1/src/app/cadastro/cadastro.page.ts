import { Component, OnInit } from '@angular/core';
import { Produtos } from '../models/produtos';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  produto: Produtos = new Produtos();

  constructor() {
    
   }

  ngOnInit() {
  }

}
