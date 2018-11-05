type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type State = {
  todos: Array<Todo>;
};

const state: State = {
  todos: [
    {
      id: 1,
      content: "Do this first",
      done: false
    }
  ]
};
