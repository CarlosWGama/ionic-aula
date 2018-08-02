import { NgModule } from '@angular/core';
import { FormularioTarefaComponent } from './formulario-tarefa/formulario-tarefa';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [FormularioTarefaComponent],
	imports: [
		IonicPageModule.forChild(FormularioTarefaComponent),
	],
	exports: [FormularioTarefaComponent]
})
export class ComponentsModule {}
