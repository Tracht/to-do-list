import React, { memo } from "react";

export default memo(({ text, complete, completeTask }) => (
  <li
    class="task__item"
    key={text}
    style={{
      textDecoration: complete ? "line-through" : "",
      color: complete ? "#CCC" : ""
    }}
  >
    <div class="mr-auto">
      {text}
    </div>
  </li>
));
