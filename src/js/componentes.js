import { Todo } from "../clases/todo.class";
import { todoList } from "../index";

//referencias en el Html

const divTodoList = document.querySelector(".todo-list");

const txtImput = document.querySelector(".new-todo");

const botonBorrarTodo= document.querySelector(".clear-completed");

const botonesFiltrar= document.querySelector(".filters");

const selectedFiltro= document.querySelectorAll(".filtro")



export const crearTodoHtml = (todo) => {
  const htmlTodo = `
<li class= " ${todo.completado ? "completed" : ""}" data-id=${todo.id}>
	<div class="view">
	    <input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""}>
	    <label> ${todo.tarea}</label>
	    <button class="destroy"></button>
	</div>
	<input class="edit" value="Create a TodoMVC template">
</li>  `;

  const div = document.createElement("div");

  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

//Eventos

txtImput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && txtImput.value.length > 0) {
    const nuevoTodo = new Todo(txtImput.value);
    todoList.nuevoTodo(nuevoTodo);
    crearTodoHtml(nuevoTodo);
    txtImput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  const nombreElemento = event.target.className;

  const todoElemento = event.target.parentElement.parentElement;

  const todoId = todoElemento.getAttribute("data-id");

  if (nombreElemento.includes("toggle")) {
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle("completed");
  } else if (nombreElemento.includes("destroy")) {
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
  }
});


botonBorrarTodo.addEventListener("click", ()=>{
    todoList.eliminarCompletados();

  for( let i = divTodoList.children.length -1 ; i>=0 ; i--) {

    const elemento= divTodoList.children[i];
    if (elemento.classList.contains('completed')){
      divTodoList.removeChild(elemento)
    }
  }
})


botonesFiltrar.addEventListener('click',(event)=>{
    let filtro =event.target.text;
    selectedFiltro.forEach(elem =>elem.classList.remove('selected'));
   event.target.classList.add('selected')


    if (!filtro){return };
    for (const elemento of divTodoList.children){
      elemento.classList.remove('hidden');
      const completado= elemento.classList.contains('completed');

    switch (filtro){

      case 'Pendientes':
        if(completado){
          elemento.classList.add('hidden')
        }
        break;
      case 'Completados':
        if(!completado){
          elemento.classList.add('hidden')
        }
        break;
    }
    }

})
