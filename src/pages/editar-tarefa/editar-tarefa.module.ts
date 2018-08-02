import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarTarefaPage } from './editar-tarefa';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditarTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarTarefaPage),
    ComponentsModule
  ],
})
export class EditarTarefaPageModule {}
