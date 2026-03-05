import React, { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTask = tasks.filter((t, i) => i !== index);
    setTasks(newTask);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To Do App</h1>

      <div className={styles.inputSection}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
          className={styles.inputBox}
        />

        <button onClick={addTask} className={styles.addBtn}>
          Add
        </button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((t, index) => (
          <li key={index} className={styles.taskItem}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              className={styles.deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
