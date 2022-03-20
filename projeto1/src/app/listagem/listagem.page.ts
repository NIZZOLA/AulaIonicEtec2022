import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  ShowPageHome() {
    this.navCtrl.navigateForward('');
  }

  ShowPageCadastro() {
    this.navCtrl.navigateForward('cadastro');
  }

  edit(item) {
    this.navCtrl.navigateForward('cadastro');
  }

  delete(item) {
    console.log(item);
  }

}
