var React = require("react");

var TodoActions = require("../actions/todo_actions");

var NewTodoInput = React.createClass({
  getInitialState: function() {
    return {value: ""};
  },

  handleChange: function(e) {
    this.setState({value: e.target.value});
  },

  render: function() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this._save}>Save</button>
      </div>
    );
  },

  _save: function() {
    TodoActions.create(this.state.value);
    this.setState({value: ""});
  },
});

module.exports = NewTodoInput;
