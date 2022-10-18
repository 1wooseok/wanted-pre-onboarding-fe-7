import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginState } from "../context/LoginContext";
import todoReducer from "../utils/todoReducer";
import fetchTodos from "../api/todos/fetchTodos";
import TodoForm from "../components/Todo/TodoForm";
import TodoList from "../components/Todo/TodoList";

export default function Todos() {
  const navigate = useNavigate();
  const [todos, dispatch] = useReducer(todoReducer, null);
  const loginState = useLoginState();

  useEffect(() => {
    if (!loginState) {
      navigate("/");
      return;
    }
    fetchTodos(dispatch);
  }, [navigate, loginState]);

  if (!todos) return <h4>로딩중...</h4>;

  return (
    <>
      {todos.length ? (
        <TodoList todos={todos} dispatch={dispatch} />
      ) : (
        <h4>할 일을 추가해보세요.</h4>
      )}
      <TodoForm dispatch={dispatch} />
    </>
  );
}
