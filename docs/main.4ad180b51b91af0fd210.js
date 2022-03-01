(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.d({},{L:()=>h});var n=function(){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).getTime(),o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Date;t(this,e),this.tarea=r,this.id=n,this.completado=o,this.creado=a}var n,o,a;return n=e,a=[{key:"fromJson",value:function(t){var r=t.id,n=t.tarea,o=t.completado,a=t.creado,i=new e;return i.tarea=n,i.completado=o,i.creado=a,i.id=r,i}}],(o=null)&&r(n.prototype,o),a&&r(n,a),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var l=function(){function e(){var t,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=[],(r="todos")in(t=this)?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,this.cargarLocalStorage()}var t,r,a;return t=e,(r=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t,r=o(this.todos);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(console.log(n,n.id),n.id==e){n.completado=!n.completado;break}}}catch(e){r.e(e)}finally{r.f()}this.guardarLocalStorage()}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],console.log(),this.todos=this.todos.map((function(e){return n.fromJson(e)}))}}])&&i(t.prototype,r),a&&i(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=document.querySelector(".todo-list"),d=document.querySelector(".new-todo"),f=document.querySelector(".clear-completed"),v=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),y=function(e){var t='\n<li class= " '.concat(e.completado?"completed":"",'" data-id=').concat(e.id,'>\n\t<div class="view">\n\t    <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n\t    <label> ").concat(e.tarea,'</label>\n\t    <button class="destroy"></button>\n\t</div>\n\t<input class="edit" value="Create a TodoMVC template">\n</li>  '),r=document.createElement("div");return r.innerHTML=t,s.append(r.firstElementChild),r.firstElementChild};d.addEventListener("keyup",(function(e){if(13===e.keyCode&&d.value.length>0){var t=new n(d.value);h.nuevoTodo(t),y(t),d.value=""}})),s.addEventListener("click",(function(e){var t=e.target.className,r=e.target.parentElement.parentElement,n=r.getAttribute("data-id");t.includes("toggle")?(h.marcarCompletado(n),r.classList.toggle("completed")):t.includes("destroy")&&(h.eliminarTodo(n),s.removeChild(r))})),f.addEventListener("click",(function(){h.eliminarCompletados();for(var e=s.children.length-1;e>=0;e--){var t=s.children[e];t.classList.contains("completed")&&s.removeChild(t)}})),v.addEventListener("click",(function(e){var t=e.target.text;if(m.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected"),t){var r,n=c(s.children);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(e){n.e(e)}finally{n.f()}}}));var h=new l;h.todos.forEach(y)})();