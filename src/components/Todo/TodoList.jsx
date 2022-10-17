import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ dispatch, todos, onDelete, onUpdate }) {
  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          dispatch={dispatch}
          todoItem={todoItem}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
