import { createContext, useState, useContext } from 'react';


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');


  const addTask = (task) => {
    if (tasks.includes(task)) {
      setError('La tarea ya existe.');
    } else {
      setTasks([...tasks, task]);
      setError('');
    }
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };


  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <TaskContext.Provider value={{ tasks, error, addTask, deleteTask, clearTasks }}>
      {children}
    </TaskContext.Provider>
  );
};


export const useTaskContext = () => useContext(TaskContext);
