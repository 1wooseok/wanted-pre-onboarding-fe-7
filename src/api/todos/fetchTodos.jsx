import { getTodos } from "./todoApi";

export default async function fetchTodos(dispatch) {
  try {
    const { data } = await getTodos();
    dispatch({ type: "GET_TODOS", payload: data });
  } catch (err) {
    console.error(err);
  }
}
