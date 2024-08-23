import React, { useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index) => {
    const taskToComplete = tasks.splice(index, 1);
    setTasks([...tasks]);
    setCompletedTasks([...completedTasks, ...taskToComplete]);
  };

  const deleteTask = (index, isCompleted) => {
    if (isCompleted) {
      const newCompletedTasks = completedTasks.slice();
      newCompletedTasks.splice(index, 1);
      setCompletedTasks(newCompletedTasks);
    } else {
      const newTasks = tasks.slice();
      newTasks.splice(index, 1);
      setTasks(newTasks);
    }
  };

  return (
    <>
      <section className="py-5 bg-color d-flex justify-content-center align-items-center vh-100">
        <div className="main-div">
          <TodoInput addTask={addTask} />
          <TodoList
            tasks={tasks}
            completedTasks={completedTasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </div>
      </section>
    </>
  );
}
