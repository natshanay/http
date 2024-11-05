const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// In-memory store for todos (can be replaced with a database later)
let todos = [
  { id: 1, task: 'Learn Node.js' },
  { id: 2, task: 'Build a simple project' }
];

// Route to display all todos
app.get('/', (req, res) => {
  let todoListHtml = '<h1>Todo List</h1><ul>';
  todos.forEach(todo => {
    todoListHtml += `<li>${todo.task} <a href="/delete/${todo.id}">Delete</a></li>`;
  });
  todoListHtml += '</ul>';
  todoListHtml += `
    <form action="/add" method="POST">
      <input type="text" name="task" placeholder="New Todo" required>
      <button type="submit">Add Todo</button>
    </form>
  `;
  res.send(todoListHtml);
});

// Route to add a new todo
app.post('/add', (req, res) => {
  const newTodo = { id: todos.length + 1, task: req.body.task };
  todos.push(newTodo);
  res.redirect('/');
});

// Route to delete a todo
app.get('/delete/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== todoId);
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
