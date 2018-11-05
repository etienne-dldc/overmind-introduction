import { Action } from "overmind";

export const createTodo: Action<string> = async ({
  value,
  createId,
  state,
  getRandomColorAsync
}) => {
  const color = await getRandomColorAsync();
  const newTodo = {
    id: createId(),
    color,
    content: value,
    done: false
  };
  state.todos.push(newTodo);
};

const actions = {
  createTodo
};
