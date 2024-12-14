import React from "react";

const FilterTask = ({ setStatusFilter }) => {

  return (
    <div className="mb-4">
      <select
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default FilterTask;
