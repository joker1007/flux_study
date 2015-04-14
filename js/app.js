require("babel/polyfill");

import React from "react";
import Flux from "./flux";
import TodoApp from "./components/todo_app.jsx";

var flux = new Flux();

window.addEventListener("DOMContentLoaded", () => {
  React.render(
    <TodoApp flux={flux} />,
    document.getElementById('main')
  );
});
