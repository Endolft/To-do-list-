export class Todo {
    
static fromJson({ id, tarea, completado, creado }) {
    const tempTodo = new Todo();
    tempTodo.tarea=tarea;
    tempTodo.completado=completado;
    tempTodo.creado=creado;
    tempTodo.id =id;


   return tempTodo
  }

constructor(
  tarea,
  id =new Date().getTime(),
  completado = false,
  creado = new Date) 
  {

    this.tarea = tarea;

    this.id = id;

    this.completado = completado;

    this.creado = creado;
  }

}
