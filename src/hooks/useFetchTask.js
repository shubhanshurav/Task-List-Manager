import { useEffect, useState } from "react";

const useFetchTask = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res = await data.json();
      const initialTasks = res.slice(0, 20).map((task) => ({
        id: task.id,
        title: task.title,
        description: `Description for task ${task.id}`,
        status: task.completed ? "Done" : "To Do",
      }));

      // console.log(res, initialTasks)

      setTasks(initialTasks);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch tasks from API
  useEffect(() => {
    fetchTask();
  }, []);

  return {tasks, setTasks};
};

export default useFetchTask;
