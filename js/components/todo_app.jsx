var React = require("react");

var MainSection = require("./main_section.jsx")

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <MainSection />
      </div>
    );
  }
});

module.exports = TodoApp;
