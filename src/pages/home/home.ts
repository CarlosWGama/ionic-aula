import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
import { NovaTarefaPage } from '../nova-tarefa/nova-tarefa';
import { EditarTarefaPage } from '../editar-tarefa/editar-tarefa';
import { Tarefa } from '../../models/Tarefa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tarefas: Tarefa[] = [
    new Tarefa(1, "Realizar prova", "2018-01-01"),
    new Tarefa(2, "Estudar", "2018-01-02"),
    new Tarefa(3, "Entregar notas", "2018-01-03")
  ]

  constructor(public navCtrl: NavController, private menuCtrl: MenuController, private alertCtrl: AlertController) {
  }

  ionViewWillLoad() {
    this.menuCtrl.enable(true);
  }

  novo() {
    this.navCtrl.push(NovaTarefaPage);
  }

  editar(tarefa: Tarefa) {
    this.navCtrl.push(EditarTarefaPage, {tarefa: tarefa});
  }

  excluir(tarefa: Tarefa) {
    this.alertCtrl.create({
      message: "Deseja realmente apagar esse conteúdo", 
      buttons: [
        {text: "Cancelar", role: "cancel"},
        {text: "Deletar", handler: () => {      
          let index = this.tarefas.indexOf(tarefa);
          this.tarefas.splice(index, 1);
        }}
      ]
    }).present();

  }

}
