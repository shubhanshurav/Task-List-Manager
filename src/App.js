import React from "react";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Task List Manager
      </h1>
      <TaskManager />
    </div>
  );
}

export default App;
