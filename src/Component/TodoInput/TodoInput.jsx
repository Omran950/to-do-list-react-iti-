import React, { useState } from "react";

export default function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center align-items-center gap-2 my-3"
      >
        <input
          type="text"
          className="input w-100"
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit" className="add-btn">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </>
  );
}
