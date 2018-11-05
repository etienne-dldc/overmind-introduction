import * as React from "react";
import { connect, Connect } from "../../app";

const AddTodo: React.SFC<Connect> = ({ app }) => (
  <div>
    <form
      onSubmit={event => {
        event.preventDefault();
        app.actions.addTodo();
      }}
    >
      <input
        placeholder="I need to..."
        value={app.state.newTodoTitle}
        onChange={app.actions.changeNewTodoTitle}
      />
      <button disabled={!app.state.newTodoTitle}>
        add
      </button>
    </form>
  </div>
);

export default connect(AddTodo);
