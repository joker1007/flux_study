var AppDispatcher = require("../dispatchers/app_dispatcher");

var TodoActions = {
  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: "update",
      id: id,
      text: text,
    });
  },

  toggleComplete: function(id) {
    AppDispatcher.dispatch({
      actionType: "toggleComplete",
      id: id,
    });
  },

  create: function (text) {
    AppDispatcher.dispatch({
      actionType: "create",
      text: text,
    });
  },

  destroy: function (id) {
    AppDispatcher.dispatch({
      actionType: "destroy",
      id: id,
    });
  }
}

module.exports = TodoActions;
