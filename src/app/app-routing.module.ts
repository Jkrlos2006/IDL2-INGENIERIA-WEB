import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template/template.component';
import { IngresoTareasComponent } from './componentes/ingreso-tareas/ingreso-tareas.component';
import { ListarTareasComponent } from './componentes/listar-tareas/listar-tareas.component';

const routes: Routes = [
  {
    path: '', component: TemplateComponent,

     children: [
      {
        path: 'ingreso-tareas', component: IngresoTareasComponent
      },

      {
        path: 'listar-tareas', component: ListarTareasComponent
      }
    ] 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
