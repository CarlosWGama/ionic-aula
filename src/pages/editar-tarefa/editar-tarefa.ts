import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Tarefa } from '../../models/Tarefa';

@IonicPage()
@Component({
  selector: 'page-editar-tarefa',
  templateUrl: 'editar-tarefa.html',
})
export class EditarTarefaPage {

  tarefa: Tarefa;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.tarefa = this.navParams.get("tarefa") as Tarefa;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarTarefaPage');
  }

  salvar(tarefa: Tarefa) {
    this.toastCtrl.create({
      message: "Tarefa " + tarefa.descricao + " editada com sucesso",
      duration: 3000
    }).present();

    this.navCtrl.pop();
  }

}
