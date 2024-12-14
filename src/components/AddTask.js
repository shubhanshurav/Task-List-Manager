import React, { useState } from "react";

const AddTask = ({setTasks}) => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "To Do",
  });

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, ...newTask },
      ]);
      setNewTask({ title: "", description: "", status: "To Do" });
    }
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <input
        type="text"
        placeholder="Task Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
      />
      <input
        type="text"
        placeholder="Task Description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-auto"
      />
      <select
        value={newTask.status}
        onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button
        onClick={handleAddTask}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
