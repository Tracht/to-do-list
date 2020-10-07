import React, { useState } from "react";

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default ({ onSubmit }) => { 
  const { resetValue, ...text } = useInputValue("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <div class="form-group">
        <input
          type="text"
          class="form-control form-control-lg"
          id="name"
          placeholder="Task description"
          {...text}
        />
        <small class="form-text text-muted">Type a task and press Enter.</small>
      </div>
    </form>
  );
};
