var React = require("react");

var TodoApp = require('./components/todo_app');

window.addEventListener("DOMContentLoaded", () => {
  React.render(
    <TodoApp />,
    document.getElementById('main')
  );
});
