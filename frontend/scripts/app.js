const todosContainer = document.getElementById("todos-container");
const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.todo-add-btn');


async function addHandler() {
    if (!todoInput.value) return;
    const todo = await createTodo({name: todoInput.value});
    renderTodo(todo);
    todoInput.value = "";
}

async function deleteHandler(todo) {
    await deleteTodo(todo.getAttribute('data-id'));
    todosContainer.removeChild(todo);
}

async function checkboxHandler(input, p, todo) {
    await changeTodoStatus(todo.getAttribute('data-id'));
    input.hasAttribute('checked') ? input.removeAttribute('checked') : input.setAttribute('checked', null);
    p.classList.contains('checked') ? p.classList.remove('checked') : p.classList.add('checked');
}

async function renderTodo(data) {
    const todo = document.createElement('li');
    todo.setAttribute('data-id', data._id);
    todo.classList.add("todos-container-item");
    const input = document.createElement('input');
    input.type = 'checkbox';
    if (data.isDone) input.setAttribute('checked', null);
    const span = document.createElement('span');
    span.classList.add('todo-checkbox');
    const p = document.createElement('p');
    p.classList.add('todo-text');
    if (data.isDone) p.classList.add('checked');
    p.textContent = data.name;
    const button = document.createElement('button');
    button.classList.add('todo-delete-btn');
    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-xmark');
    button.appendChild(i);
    todo.append(input, span, p, button);
    button.onclick = deleteHandler.bind(button, todo);
    input.onclick = checkboxHandler.bind(input, input, p, todo);
    todosContainer.appendChild(todo);
}

async function renderPage() {
    const todos = await getTodos();
    for (const todo of todos) {
        await renderTodo(todo);
    }
}

addBtn.onclick = addHandler;



renderPage();