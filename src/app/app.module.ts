import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { IngresoTareasComponent } from './componentes/ingreso-tareas/ingreso-tareas.component';
import { ListarTareasComponent } from './componentes/listar-tareas/listar-tareas.component';
import { TemplateComponent } from './template/template/template.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    IngresoTareasComponent,
    ListarTareasComponent,
    TemplateComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
