
import './styles.css';

import {Todo, TodoList} from './clases/Index.js';
import { crearTodoHtml } from './js/componentes';

export const todoList= new TodoList();

todoList.todos.forEach(crearTodoHtml);




