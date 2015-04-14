var React = require("react");

var MainSection = require("./main_section.jsx")

var TodoApp = React.createClass({
  render: function() {
    let {flux} = this.props;

    return (
      <div>
        <MainSection flux={flux} />
      </div>
    );
  }
});

module.exports = TodoApp;
