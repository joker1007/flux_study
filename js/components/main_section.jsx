import React from "react";
import _ from "lodash";

import TodoItem from "./todo_item.jsx";
import NewTodoInput from "./new_todo_input.jsx";
import TodoStore from "../stores/todo_store";

import FluxMixin from "flummox/mixin";

function getTodoState() {
  return {todos: TodoStore.getAll()};
}

var MainSection = React.createClass({
  mixins: [FluxMixin({
    todo: store => ({
      todos: store.getAll(),
    })
  })],

  componentDidMount: function() {
    console.log("mount");
  },

  componentWillUnmound: function() {
    console.log("unmount");
  },

  render: function() {
    let todoItems = _.map(this.state.todos, (t) => {
      return <TodoItem flux={this.flux} key={t.id} todo={t} />
    });

    return (
      <div>
        <NewTodoInput flux={this.flux} />
        <ul className="todos">
          {todoItems}
        </ul>
      </div>
    );
  },
});

module.exports = MainSection;
