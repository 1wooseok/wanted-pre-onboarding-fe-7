import { useCallback } from "react";
import { deleteTodo } from "../../api/actions/todoAction";

export default function useDelete() {
  const onDelete = useCallback(async (dispatch, todoId) => {
    if (!window.confirm("삭제하시겠습니까?")) {
      return;
    }
    try {
      await deleteTodo(todoId);
      dispatch({ type: "DELETE_TODO", payload: todoId });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return onDelete;
}
