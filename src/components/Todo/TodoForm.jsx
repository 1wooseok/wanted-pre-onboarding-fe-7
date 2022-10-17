import { useCallback } from "react";
import useFormData from "../../hooks/useFormData";

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
      <input name="newTodo" value={formData.newTodo} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}
