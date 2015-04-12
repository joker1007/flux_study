var EventEmitter = require("events").EventEmitter;
var AppDispatcher = require("../dispatchers/app_dispatcher")
var _ = require("lodash");
var CHANGE_EVENT = "change";

var _todos = [
  {id: 1, text: "todo1", complete: false},
  {id: 2, text: "todo2", complete: true},
  {id: 3, text: "todo3", complete: false},
];

function create(text) {
  let maxId = _.max(_todos, "id").id;
  let newTodo = {id: maxId + 1, text: text, complete: false};
  console.log(newTodo);
  _todos.push(newTodo);
}

function update(id, text) {
  let todo = _.find(_todos, "id", id);
  todo.text = text;
}

function destroy(id) {
  _todos = _.reject(_todos, "id", id);
}

function toggleComplete(id) {
  let todo = _.find(_todos, "id", id);
  todo.complete = !todo.complete;
}

var TodoStore = Object.assign({}, EventEmitter.prototype, {
  getAll: () => {
    return _todos;
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
});

AppDispatcher.register(function(action) {
  console.log(action);
  switch (action.actionType) {
    case "update":
      let text = action.text.trim();
      if (text !== "") {
        update(action.id, action.text);
        TodoStore.emitChange();
      }
      break;
    case "toggleComplete":
      toggleComplete(action.id);
      TodoStore.emitChange();
      break;
    case "create":
      create(action.text);
      TodoStore.emitChange();
      break;
    case "destroy":
      destroy(action.id);
      TodoStore.emitChange();
    default:
  }
});

module.exports = TodoStore;
