import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Usuario } from '../../models/Usuario';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  public usuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menuCtrl.enable(false);
  }

  logar() {
    this.navCtrl.setRoot(HomePage);
  }

  cadastrar() {
    this.alertCtrl.create({
      title: "Cadastro de Usuário",
      inputs: [
        {name: "login", type: "email", placeholder: "E-mail"},
        {name: "senha", type: "password", placeholder: "Senha"}
      ],
      buttons: [
        {text: "Cancelar", role: "cancel"},
        {text: "Cadastrar", handler: (dados) => {
          //dados.login
        }}
      ]
    }).present();
  }

}
