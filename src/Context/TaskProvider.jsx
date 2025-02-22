/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { io } from "socket.io-client";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import { useAxiosPublic } from "../hooks/useAxiosPublic";
import { useAllTasks } from "../hooks/useAllTasks";

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // const socket = io("http://localhost:5000");
  const socket = io("https://task-drag-nd-drop-server.onrender.com", {
    transports: ["websocket"], 
   withCredentials: true,
});
//   const socket = io("https://task-drag-nd-drop-server.vercel.app", {
//     transports: ["websocket"], 
//    withCredentials: true,
// });
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const axiosPublic = useAxiosPublic();

 
  // Fetch tasks from backend
  useEffect(() => {
    if (!user?.uid) return;

    const fetchTasks = async () => {
      try {
        const res = await axiosPublic.get(`/tasks?email=${user?.email}`);
        setTasks(res.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();

    socket.on("taskAdded", (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    socket.on("taskUpdated", (updatedTask) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === updatedTask._id ? { ...task, ...updatedTask } : task
        )
      );
    });

    socket.on("taskDeleted", (taskId) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    });

    return () => {
      socket.off("taskAdded");
      socket.off("taskUpdated");
      socket.off("taskDeleted");
    };
  }, [user]);

  // add task
    const addTask = async (task) => {
    try {
      const res = await axiosPublic.post("/tasks", {
        ...task,
        uid: user.uid,
      });
      toast.success('Task is successfully added')
       setTasks([...tasks, res.data]);

    } catch (err) {
      toast.error(err.message);
    }
  };

  const updateTask = async (id, updates) => {
    try {
      await axiosPublic.put(`tasks/${id}`, updates);
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, ...updates } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axiosPublic.delete(`tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const taskValue = {
    tasks,
      addTask,
    setTasks,
    updateTask,
    deleteTask,
  };
  return (
    <TaskContext.Provider value={taskValue}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
