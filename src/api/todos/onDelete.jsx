import { deleteTodo } from "./todoApi";

export default async function onDelete(dispatch, todoId) {
  if (!window.confirm("삭제하시겠습니까?")) {
    return;
  }
  try {
    await deleteTodo(todoId);
    dispatch({ type: "DELETE_TODO", payload: todoId });
  } catch (err) {
    console.error(err);
  }
}
