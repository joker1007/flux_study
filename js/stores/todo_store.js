import {Store} from "flummox";
import _ from "lodash";

export default class TodoStore extends Store {
  constructor(flux) {
    super();
    const todoActions = flux.getActions('todo');
    this.register(todoActions.updateText     , this.update);
    this.register(todoActions.toggleComplete , this.toggleComplete);
    this.register(todoActions.create         , this.create);
    this.register(todoActions.destroy        , this.destroy);
    let initialTodos = {}
    initialTodos[1] = {id: 1, text: "todo1", complete: false};
    initialTodos[2] = {id: 2, text: "todo2", complete: false};
    initialTodos[3] = {id: 3, text: "todo3", complete: false};
    this.state = {
      todos: initialTodos
    };
  }

  getAll() {
    return this.state.todos;
  }

  create(text) {
    let todos = Object.assign({}, this.state.todos);
    let maxId = _.max(todos, "id").id;
    console.log(maxId);
    let newTodo = {id: maxId + 1, text: text, complete: false};
    todos[newTodo.id] = newTodo;
    console.log(todos);
    this.setState({todos: todos});
  }

  update({id: id, text: text}) {
    let todos = Object.assign({}, this.state.todos);
    let todo = Object.assign({}, todos[id], {text: text});
    todos[id] = todo;
    this.setState({todos: todos});
  }

  destroy(id) {
    let todos = Object.assign({}, this.state.todos);
    delete todos[id];
    this.setState({todos: todos});
  }

  toggleComplete(id) {
    let todos = Object.assign({}, this.state.todos);
    let todo = Object.assign({}, todos[id], {complete: !todos[id].complete});
    todos[id] = todo;
    this.setState({todos: todos});
  }
}
