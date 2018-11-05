import { Derive } from "overmind";

const todoCount: Derive<number> = state =>
  state.todos.length;

type State = {
  todos: Array<Todo>;
  todoCount: Derive<number>;
};

const state: State = {
  todos: [],
  todoCount
};
