import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracaoPage } from './configuracao';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConfiguracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracaoPage),
    TranslateModule.forChild()
  ],
})
export class ConfiguracaoPageModule {}
