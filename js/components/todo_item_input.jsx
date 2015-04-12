var React = require("react");

var TodoItemInput = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    onSave: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {value: this.props.value};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    return (
      <input
        type="text" value={this.state.value}
        className="edit"
        onBlur={this._save}
        onKeyDown={this._onInputKeyDown}
        onChange={this.handleChange}
      />
    )
  },

  _save: function() {
    this.props.onSave(this.state.value);
  },

  _onInputKeyDown: function (e) {
    if (e.KeyCode === 13) {
      this._save();
    }
  },
});

module.exports = TodoItemInput;
