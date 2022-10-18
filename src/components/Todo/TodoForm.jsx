import { useCallback } from "react";
import useFormData from "../../hooks/useFormData";
import Button from "../Button/Button";
import onCreate from "../../api/todos/onCreate";

export default function TodoForm({ dispatch }) {
  const [formData, onChange, onReset] = useFormData({
    newTodo: "",
  });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onCreate(dispatch, formData.newTodo);
      onReset();
    },
    [dispatch, formData.newTodo, onReset]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        name="newTodo"
        value={formData.newTodo}
        onChange={onChange}
        placeholder="할일을 추가해보세요"
      />
      <Button type="submit">추가</Button>
    </form>
  );
}
