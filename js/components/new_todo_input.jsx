var React = require("react");

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
    this.props.flux.getActions("todo").create(this.state.value);
    this.setState({value: ""});
  },
});

module.exports = NewTodoInput;
