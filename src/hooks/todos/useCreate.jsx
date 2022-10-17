import { useCallback } from "react";
import { createTodo } from "../../api/actions/todoAction";

export default function useCreate() {
  const onCreate = useCallback(async (dispatch, newTodo) => {
    try {
      const { data } = await createTodo(newTodo);
      dispatch({ type: "CREATE_TODO", payload: data });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return onCreate;
}
