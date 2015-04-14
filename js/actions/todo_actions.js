import {Actions} from "flummox";

export default class TodoActions extends Actions {
  updateText(id, text) {
    return {id: id, text: text};
  }

  toggleComplete(id) {
    return id
  }

  create(text) {
    return text;
  }

  destroy(id) {
    return id;
  }
}

module.exports = TodoActions;
