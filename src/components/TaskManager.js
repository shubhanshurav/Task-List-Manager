import React, { useState } from "react";
import { ReactTabulator } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css";
import useFetchTask from "../hooks/useFetchTask";
import AddTask from "./AddTask";
import FilterTask from "./FilterTask";
import { taskColumns } from "../utils/constants";

const TaskManager = () => {
  const [statusFilter, setStatusFilter] = useState("");
  const { tasks, setTasks } = useFetchTask();

  const filteredTasks = statusFilter
    ? tasks.filter((task) => task.status === statusFilter)
    : tasks;

  return (
    <div className="p-4 bg-white shadow-lg rounded-md w-full max-w-4xl">
      <AddTask setTasks={setTasks} />
      <FilterTask setStatusFilter={setStatusFilter} />

      <ReactTabulator
        data={filteredTasks}
        columns={taskColumns(setTasks)}
        layout="fitData"
        options={{
          cellEdited: (cell) => {
            const updatedTask = cell.getRow().getData();
            setTasks((prevTasks) =>
              prevTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
              )
            );
          },
        }}
      />
    </div>
  );
};

export default TaskManager;
