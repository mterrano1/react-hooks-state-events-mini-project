import React from "react";

//Update the Task component so that it shows the task's text and category.

//When the delete button is clicked, the task should be removed from the list.

function Task({ text, category, handleTaskDelete }) {
  function handleClickDelete() {
    handleTaskDelete(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClickDelete}>X</button>
    </div>
  );
}

export default Task;
