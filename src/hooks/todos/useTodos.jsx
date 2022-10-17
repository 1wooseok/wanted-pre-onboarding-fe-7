import { useCallback } from "react";
import { getTodos } from "../../api/actions/todoAction";

export default function useTodos() {
  const fetchTodos = useCallback(async (dispatch) => {
    try {
      const { data } = await getTodos();
      dispatch({ type: "GET_TODOS", payload: data });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return fetchTodos;
}
