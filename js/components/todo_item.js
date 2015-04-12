var React = require("react/addons");
var className = require("classname");

var TodoActions = require("../actions/todo_actions");

var TodoItemInput = require("./todo_item_input");

var TodoItem = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  getInitialState: () => {
    return {isEditing: false};
  },

  render: function() {
    let todo = this.props.todo;
    let id = `todo-${this.props.todo.id}`
    let input;
    let todoClasses = className({
      editing: this.state.isEditing,
      complete: todo.complete,
    });

    if (this.state.isEditing) {
      input = <TodoItemInput
        value={todo.text}
        onSave={this._save}
      />
    }

    return (
      <li key={todo.id} id={id} className={todoClasses}>
        <div>
          <input type="checkbox" checked={todo.complete} onChange={this._onToggleComplete} />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
         &nbsp;
          <a href="#" onClick={this._onDeleteClick}>Delete</a>
        </div>
        {input}
      </li>
    );
  },

  _save: function(text) {
    let todo = this.props.todo;
    TodoActions.updateText(todo.id, text);
    this.setState({isEditing: false});
  },

  _destroy: function() {
    TodoActions.destroy(this.props.todo.id);
  },

  _onDeleteClick: function(e) {
    e.preventDefault();
    this._destroy();
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  _onToggleComplete: function() {
    TodoActions.toggleComplete(this.props.todo.id);
  },
});

module.exports = TodoItem;
