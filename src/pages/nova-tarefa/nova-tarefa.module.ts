import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaTarefaPage } from './nova-tarefa';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NovaTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaTarefaPage),
    ComponentsModule
  ],
})
export class NovaTarefaPageModule {}
