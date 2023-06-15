import React, { ChangeEvent, useRef } from 'react';
import { useTaskStore } from './taskStore';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskManager = () => {
  const createTaskRef = useRef<HTMLInputElement>(null);
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    setSearchKeyword,
  } = useTaskStore();

  const handleAddTask = () => {
    const title = createTaskRef.current?.value || "";
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    addTask(newTask);
    createTaskRef.current!.value = ""; // Réinitialise la valeur du champ d'ajout de tâche après l'ajout
  };

  const handleUpdateTask = (taskId: number, updatedTask: Task) => {
    updateTask(taskId, updatedTask);
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <h1>Task Manager</h1>

      <input type="text" ref={createTaskRef} />

      <button onClick={handleAddTask}>Add Task</button>

      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search Task"
      />

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="text"
              value={task.title}
              onChange={(e) =>
                handleUpdateTask(task.id, { title: e.target.value })
              }
            />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;