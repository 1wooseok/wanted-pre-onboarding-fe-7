import { useCallback } from "react";
import { updateTodo } from "../../api/actions/todoAction";

export default function useUpdate() {
  const onUpdate = useCallback(async (dispatch, todoId, newTodo) => {
    try {
      const { data } = await updateTodo(todoId, newTodo);
      dispatch({ type: "UPDATE_TODO", payload: data });
    } catch (err) {
      console.error(err.response);
    }
  }, []);

  return onUpdate;
}
