import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { TopoComponent } from './topo/topo.component';
import { TentativasComponent } from './tentativas/tentativas.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    ProgressoComponent,
    TopoComponent,
    TentativasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
