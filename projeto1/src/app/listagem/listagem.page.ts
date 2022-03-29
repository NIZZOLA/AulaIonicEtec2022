import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Produtos } from '../models/produtos';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

   listaProdutos : Produtos[] = [];
   prod : Produtos;
   
  constructor(private navCtrl: NavController, private storageService: StorageService) { }

  ngOnInit() {
  }

  async buscarProdutos() {
    this.listaProdutos = await this.storageService.getAll();
  }

  ionViewDidEnter() {
    this.buscarProdutos();
  }

  ShowPageHome() {
    this.navCtrl.navigateForward('');
  }

  ShowPageCadastro() {
    this.navCtrl.navigateForward('cadastro');
  }

  async edit(id) {
    console.log("Edit:" + id);

    this.prod  = await this.storageService.get(id.toString());

    alert('Id:' + this.prod.id + '\nDescricao:' + this.prod.descricao + '\n Custo:' + this.prod.custo + '\n Preço:' + this.prod.venda +
    '\nEstoque:' + this.prod.estoque + " \nAtivo:" + this.prod.ativo );
    
    //this.navCtrl.navigateForward('cadastro');
  }

  async delete(id) {
    //console.log("Delete:" + id);
    await this.storageService.remove(id);
    this.buscarProdutos();
  }

}
