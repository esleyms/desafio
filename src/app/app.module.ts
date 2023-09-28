import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitsmartComponent } from './citsmart/citsmart.component';
import { HttpClientModule } from '@angular/common/http';
import { VisualizarDadosComponent } from './citsmart/modal/visualizar-dados/visualizar-dados.component';


@NgModule({
  declarations: [
    AppComponent,
    CitsmartComponent,
    VisualizarDadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Adicione o FormsModule aqui

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
