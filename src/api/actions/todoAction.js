import { AuthClient } from "../config";
/**
 * 할일
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} todo
 * @property {boolean} isCompleted
 * @property {number} userId
*/

/**
 * @typedef {Object} updatedTodo
 * @property {string} todo 
 * @property {boolean} isCompleted 
*/

export function getTodos() {
  return AuthClient().get("/todos");
}
/**
 * @param { string } newTodo
 */
export async function createTodo(newTodo) {
  return AuthClient().post("/todos", { todo: newTodo });
}

/**
 * @param { number } todoId
 * @param { updatedTodo } updatedTodo
 */
export async function updateTodo(todoId, updatedTodo) {
  return AuthClient().put(`/todos/${todoId}`, updatedTodo);
}

/**
 * @param { number } todoId
 */
export async function deleteTodo(todoId) {
  return AuthClient().delete(`/todos/${todoId}`);
}