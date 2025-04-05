import { useEffect, useState } from "react";

export function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        console.error("Error al traer las tareas:", err);
      });
  }, []);

  return (
    <div>
      <h2>Lista de tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? "✔️" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}
