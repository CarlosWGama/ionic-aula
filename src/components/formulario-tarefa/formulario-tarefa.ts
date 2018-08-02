import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../models/Tarefa';


@Component({
  selector: 'formulario-tarefa',
  templateUrl: 'formulario-tarefa.html'
})
export class FormularioTarefaComponent {

  @Input()
  tarefa: Tarefa;

  @Input()
  botao: String;

  @Output()
  tarefaEvent = new EventEmitter<Tarefa>();

  text: string;

  constructor() {
    console.log('Hello FormularioTarefaComponent Component');
  }

  salvar() {
    this.tarefaEvent.emit(this.tarefa);
  }

}
