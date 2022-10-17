import { updateTodo } from "./todoApi";

export default async function onUpdate(dispatch, todoId, newTodo) {
  try {
    const { data } = await updateTodo(todoId, newTodo);
    dispatch({ type: "UPDATE_TODO", payload: data });
  } catch (err) {
    console.error(err.response);
  }
}
