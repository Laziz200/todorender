    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function renderTodos() {
      const todoList = document.getElementById('todoList');
      todoList.innerHTML = '';
      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${index})">
          <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
          <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
      });
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    function addTodo() {
      const input = document.getElementById('todoInput');
      const text = input.value.trim();
      if (text) {
        todos.push({ text, completed: false });
        input.value = '';
        renderTodos();
      }
    }

    function toggleTodo(index) {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    }

    function deleteTodo(index) {
      todos.splice(index, 1);
      renderTodos();
    }

    document.getElementById('todoInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTodo();
    });

    renderTodos();