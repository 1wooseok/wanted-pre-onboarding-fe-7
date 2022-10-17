import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ dispatch, todos }) {
  return (
    <ul>
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.id} dispatch={dispatch} todoItem={todoItem} />
      ))}
    </ul>
  );
}
