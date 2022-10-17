import { useState, useCallback } from "react";
import useFormData from "../../hooks/useFormData";
import onDelete from "../../api/todos/onDelete";
import onUpdate from "../../api/todos/onUpdate";
import Button from "../Button/Button";

export default function TodoItem({ dispatch, todoItem }) {
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
  }, [dispatch, id]);

  const updateTodo = useCallback(
    (e) => {
      e.preventDefault();
      onUpdate(dispatch, id, {
        todo: formData.newTodo,
        isCompleted,
      });
      setEditable(false);
    },
    [dispatch, id, formData.newTodo, isCompleted]
  );

  const toggleCheck = useCallback(() => {
    onUpdate(dispatch, id, {
      todo: formData.newTodo,
      isCompleted: !isCompleted,
    });
  }, [dispatch, formData.newTodo, id, isCompleted]);

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
          <Button onClick={toggleEditable}>수정</Button>
          <Button onClick={deleteTodo}>삭제</Button>
        </>
      ) : (
        <>
          <Button onClick={toggleEditable}>취소</Button>
          <Button onClick={updateTodo}>제출</Button>
        </>
      )}
    </li>
  );
}
