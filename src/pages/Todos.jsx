import { useEffect, useReducer } from "react";
import { Navigate } from "react-router-dom";
import { useLoginState } from "../context/LoginContext";
import todoReducer from "../utils/todoReducer";
// hooks
import useTodos from "../hooks/todos/useTodos";
import useCreate from "../hooks/todos/useCreate";
import useDelete from "../hooks/todos/useDelete";
import useUpdate from "../hooks/todos/useUpdate";
// Component
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";

export default function Todos() {
  const [todos, dispatch] = useReducer(todoReducer, null);
  const loginState = useLoginState();
  const fetchTodos = useTodos();
  const onCreate = useCreate();
  const onDelete = useDelete();
  const onUpdate = useUpdate();

  // init
  useEffect(() => {
    fetchTodos(dispatch);
  }, [fetchTodos]);

  if (!todos) return <h4>로딩중...</h4>;

  return (
    <>
      {!loginState && <Navigate to="/" />}

      {todos.length ? (
        <TodoList
          todos={todos}
          dispatch={dispatch}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ) : (
        <h4>할일 목록을 추가해보세요.</h4>
      )}
      <TodoForm dispatch={dispatch} onCreate={onCreate} />
    </>
  );
}
