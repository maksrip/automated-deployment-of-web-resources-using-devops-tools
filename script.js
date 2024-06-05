const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

function displayTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      deleteTodo(index);
    });
    
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function addTodo(event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    todos.push(todoText);
    displayTodos();
    todoInput.value = '';
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}

todoForm.addEventListener('submit', addTodo);

displayTodos();
