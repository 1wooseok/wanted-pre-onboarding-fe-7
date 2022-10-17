import { useCallback } from "react";
import useFormData from "../../hooks/useFormData";
import Button from "../Button/Button";

export default function TodoForm({ dispatch, onCreate }) {
  const [formData, onChange, onReset] = useFormData({
    newTodo: "",
  });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onCreate(dispatch, formData.newTodo);
      onReset();
    },
    [dispatch, formData.newTodo, onCreate, onReset]
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
