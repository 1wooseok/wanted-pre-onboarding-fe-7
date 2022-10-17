import { createTodo } from "./todoApi";

export default async function onCreate(dispatch, newTodo) {
  try {
    const { data } = await createTodo(newTodo);
    dispatch({ type: "CREATE_TODO", payload: data });
  } catch (err) {
    console.error(err);
  }
}
