import { Todo } from "../classes";
import { todoList } from './../index';

// **** => Referencias en el HTML <= **** //
const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `<li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
                        <div class="view">
                            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
                            <label>${todo.tarea}</label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="Create a TodoMVC template">
                      </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

};

// **** => EVENTOS <= **** //
txtInput.addEventListener('keyup', (event) => { // Evento que espera a que se suelta la tecla

    if(event.keyCode === 13 && txtInput.value.length > 0) {

        const { value: tarea } = event.target;
        console.log(tarea);
        const nuevoTodo = new Todo(tarea);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
        // console.log(todoList);
    
    }

});

divTodoList.addEventListener('click', (event) => {

    // console.log('click');
    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    console.log(todoElemento);
    // console.log(todoId);

    if (nombreElemento.includes('input')) { //
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }

    console.log(todoList);

});