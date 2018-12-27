import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { CursosModule } from './cursos/cursos.module';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { TestePropertiesComponent } from './teste-properties/teste-properties.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    InputPropertiesComponent,
    TestePropertiesComponent,
    OutputPropertiesComponent,
    DiretivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
