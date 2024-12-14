export const taskColumns = (setTasks) => [
  { title: "Task ID", field: "id", width: 85, hozAlign: "center" },
  {
    title: "Title",
    field: "title",
    editor: "input", // Inline editing for title
    headerFilter: "input", // Add filter for column
  },
  {
    title: "Description",
    field: "description",
    editor: "textarea", // Inline editing for description
    headerFilter: "input", // Add filter for column
  },
  {
    title: "Status",
    field: "status",
    editor: "select", // Inline editing for status
    editorParams: { values: ["To Do", "In Progress", "Done"] },
  },
  {
    title: "Delete",
    formatter: "buttonCross",
    width: 80,
    hozAlign: "center",
    cellClick: (e, cell) => {
      const taskId = cell.getData().id;
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    },
  },
];
