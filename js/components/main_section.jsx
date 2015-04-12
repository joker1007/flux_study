var React = require("react");

var TodoItem = require("./todo_item.jsx");
var NewTodoInput = require("./new_todo_input.jsx");
var TodoStore = require("../stores/todo_store");

function getTodoState() {
  return {todos: TodoStore.getAll()};
}

var MainSection = React.createClass({
  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    console.log("mount");
    TodoStore.addChangeListener(this._onUpdate);
  },

  componentWillUnmound: function() {
    console.log("unmount");
    TodoStore.removeChangeListener(this._onUpdate);
  },

  render: function() {
    let todoItems = this.state.todos.map((t) => {
      return <TodoItem key={t.id} todo={t} />
    });

    return (
      <div>
        <NewTodoInput />
        <ul className="todos">
          {todoItems}
        </ul>
      </div>
    );
  },

  _onUpdate: function() {
    console.log("state update");
    this.setState(getTodoState());
  },
});

module.exports = MainSection;
