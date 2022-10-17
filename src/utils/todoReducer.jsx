export default function todoReducer(state, action) {
  switch (action.type) {
    case "GET_TODOS":
      return action.payload;
    case "CREATE_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error("Invalid action type: " + action.type);
  }
}
