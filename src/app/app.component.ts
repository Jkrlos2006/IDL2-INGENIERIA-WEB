import { Component } from '@angular/core';
import { Tarea } from './models/tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tareaArray: Tarea[] = [
    {id:1, tarea:"tarea 1", descripcion:"descripcion 1"},
    {id:2, tarea:"tarea 2", descripcion:"descripcion 2"},
    {id:3, tarea:"tarea 3", descripcion:"descripcion 3"}
  ];

  selectedTarea: Tarea = new Tarea ();
  
  addOrEdit(){
    this.selectedTarea.id = this.tareaArray.length + 1;
    this.tareaArray.push(this.selectedTarea);

    this.selectedTarea = new Tarea();
  }

}
