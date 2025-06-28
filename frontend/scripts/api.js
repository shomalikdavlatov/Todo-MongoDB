const url = 'http://localhost:4000/api';

async function getTodos() {
    const response = await fetch(url);
    const todos = await response.json();
    return todos;
}

async function createTodo(data) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const todo = await response.json();
    console.log(data);
    return todo;
}

async function changeTodoStatus(id) {
    const response = await fetch(`${url}/${id}`, {method: "PUT"});
    const todo = await response.json();
    return todo;
}

async function deleteTodo(id) {
    await fetch(`${url}/${id}`, {method: "DELETE"});
}
