import React from "react";

export default function TodoList({
  tasks,
  completedTasks,
  completeTask,
  deleteTask,
}) {
  return (
    <>
      <section className="py-3">
        <h5 className="text-white mb-2">Task to do - {tasks.length}</h5>
        <ul className="list-group list-unstyled">
          {tasks.map((task, index) => (
            <li
              className="d-flex justify-content-between align-items-center w-100 mb-2"
              key={index}
            >
              {task}
              <span>
                <i
                  className="fa-solid fa-check me-3"
                  role="button"
                  onClick={() => completeTask(index)}
                ></i>
                <i
                  className="fa-solid fa-trash"
                  role="button"
                  onClick={() => deleteTask(index, false)}
                ></i>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section className="py-3">
        <h5 className="text-white mb-2">Done - {completedTasks.length}</h5>
        <ul className="list-group list-unstyled">
          {completedTasks.map((task, index) => (
            <li className="text-decoration-line-through done w-100 d-flex justify-content-between mb-2" key={index}>
              {task}
              <span>
                <i
                  className="fa-solid fa-trash"
                  role="button"
                  onClick={() => deleteTask(index, true)}
                ></i>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
