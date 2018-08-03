import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild("conteudo_principal")
  nav: NavController;

  paginas: {descricao: String, page: any, icon: String}[] = [
    {descricao: 'Tarefas', page: HomePage, icon: "done-all"},
    {descricao: 'Configuração', page: ConfiguracaoPage, icon: "settings" }
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translate: TranslateService) {
    
    translate.setDefaultLang("en");

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  /** Abre uma página do menu */
  abrirPagina(pagina) {
    this.nav.setRoot(pagina);
  }

  /** Desloga do sistema */
  sair() {
    console.log("Clicou");
    this.nav.setRoot(LoginPage);
  }
}

