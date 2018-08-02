import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Tarefa } from '../../models/Tarefa';

@IonicPage()
@Component({
  selector: 'page-nova-tarefa',
  templateUrl: 'nova-tarefa.html',
})
export class NovaTarefaPage {

  tarefa: Tarefa = new Tarefa();

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaTarefaPage');
  }

  
  salvar(tarefa: Tarefa) {
    this.toastCtrl.create({
      message: "Tarefa " + tarefa.descricao + " criada com sucesso",
      duration: 3000
    }).present();

    this.navCtrl.pop();
  }

}
