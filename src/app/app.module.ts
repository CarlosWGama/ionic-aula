import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ConfiguracaoPageModule } from '../pages/configuracao/configuracao.module';
import { NovaTarefaPageModule } from '../pages/nova-tarefa/nova-tarefa.module';
import { EditarTarefaPageModule } from '../pages/editar-tarefa/editar-tarefa.module';
import { PipesModule } from '../pipes/pipes.module';
import { HttpClientModule, HttpClient } from '../../node_modules/@angular/common/http';
import { createTranslateLoader } from './translate';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ConfiguracaoPageModule,
    NovaTarefaPageModule,
    EditarTarefaPageModule,
    PipesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
