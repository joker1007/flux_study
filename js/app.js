var React = require("react");

var TodoApp = require('./components/todo_app.jsx');

window.addEventListener("DOMContentLoaded", () => {
  React.render(
    <TodoApp />,
    document.getElementById('main')
  );
});
