import { useState, useCallback } from "react";
import useFormData from "../../hooks/useFormData";

export default function TodoItem({ dispatch, todoItem, onDelete, onUpdate }) {
  const { todo, id, isCompleted } = todoItem;
  const [editable, setEditable] = useState(false);
  const [formData, onChange] = useFormData({
    newTodo: todo,
  });

  const toggleEditable = useCallback(() => {
    onChange({
      target: {
        name: "newTodo",
        value: todo,
      },
    });
    setEditable((prev) => !prev);
  }, [todo, onChange]);

  const deleteTodo = useCallback(() => {
    onDelete(dispatch, id);
  }, [dispatch, id, onDelete]);

  const updateTodo = useCallback(
    (e, checked = isCompleted) => {
      e.preventDefault();
      onUpdate(dispatch, id, {
        todo: formData.newTodo,
        isCompleted: checked,
      });
      setEditable(false);
    },
    [dispatch, onUpdate, id, formData.newTodo, isCompleted]
  );

  const toggleCheck = useCallback(() => {
    updateTodo(!isCompleted);
  }, [updateTodo, isCompleted]);

  return (
    <li>
      <input
        type="checkbox"
        value={isCompleted}
        onChange={toggleCheck}
        checked={isCompleted}
      />
      <input
        name="newTodo"
        value={formData.newTodo}
        onChange={onChange}
        disabled={!editable}
      />
      {!editable ? (
        <>
          <button onClick={toggleEditable}>수정</button>
          <button onClick={deleteTodo}>삭제</button>
        </>
      ) : (
        <>
          <button onClick={toggleEditable}>취소</button>
          <button onClick={updateTodo}>제출</button>
        </>
      )}
    </li>
  );
}
