import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';


@Component({
  selector: 'app-ingreso-tareas',
  templateUrl: './ingreso-tareas.component.html',
  styleUrls: ['./ingreso-tareas.component.css']
})
export class IngresoTareasComponent {

  tareaArray: Tarea[] = [
    {id:1, tarea:"Tarea 1", descripcion:"Descripcion 1"},
    {id:2, tarea:"Tarea 2", descripcion:"Descripcion 2"},
    {id:3, tarea:"Tarea 3", descripcion:"Descripcion 3"}
  ];

  selectedTarea: Tarea = new Tarea ();
  
  addOrEdit(){
    this.selectedTarea.id = this.tareaArray.length + 1;
    this.tareaArray.push(this.selectedTarea);

    this.selectedTarea = new Tarea();
  }

}
