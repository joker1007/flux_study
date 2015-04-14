var React = require("react/addons");
var className = require("classname");

var TodoItemInput = require("./todo_item_input.jsx");

var TodoItem = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired
  },

  getInitialState: () => {
    return {isEditing: false};
  },

  render: function() {
    let {todo} = this.props;
    let id = `todo-${todo.id}`
    let input;
    let todoClasses = className({
      editing: this.state.isEditing,
      complete: todo.complete,
    });

    if (this.state.isEditing) {
      input = <TodoItemInput
        value={todo.text}
        onSave={this._save}
        ref="edit"
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
    this.props.flux.getActions("todo").updateText(todo.id, text);
    this.setState({isEditing: false});
  },

  _destroy: function() {
    this.props.flux.getActions("todo").destroy(this.props.todo.id);
  },

  _onDeleteClick: function(e) {
    e.preventDefault();
    if (confirm("Delete?")) {
      this._destroy();
    };
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  _onToggleComplete: function() {
    this.props.flux.getActions("todo").toggleComplete(this.props.todo.id);
  },
});

module.exports = TodoItem;
