import Flummox from "flummox";
import TodoActions from "./actions/todo_actions";
import TodoStore from "./stores/todo_store";

export default class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('todo', TodoActions);
    this.createStore('todo', TodoStore, this);
  }
};
