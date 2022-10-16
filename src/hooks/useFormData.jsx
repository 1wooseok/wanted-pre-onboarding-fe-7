import { useState, useCallback } from "react";

export default function useFormData(initialForm) {
  const [formData, setFormData] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onReset = useCallback(() => {
    setFormData(initialForm);
  }, [initialForm]);

  return [formData, onChange, onReset];
}
