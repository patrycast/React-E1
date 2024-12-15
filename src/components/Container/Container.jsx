import { useState } from 'react';
import { useTaskContext } from '../TaskContext';
import {SectionContainer,Title,DivInpuButton,Input,Task,Divisor, ButtonAdd, DeleteButton, Paragraph, AllBtn} from './styles';

export const Container = () => {
  const [newTask, setNewTask] = useState('');
  const { tasks, error, addTask, deleteTask, clearTasks } = useTaskContext();

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <SectionContainer>
      <Title>Lista de Tareas</Title>
      <DivInpuButton>
        <Input
          type="text"
          value={newTask}
          placeholder="Escribe una tarea..."
          onChange={(e) => setNewTask(e.target.value)}
        />
        <ButtonAdd onClick={handleAddTask}>Agregar</ButtonAdd>
      </DivInpuButton>
      {error && <Paragraph style={{ color: 'red' }}>{error}</Paragraph>}
      <Divisor />
      {tasks.map((task, index) => (
        <Task key={index}>
          <Paragraph>{task}</Paragraph>
          <DeleteButton onClick={() => deleteTask(task)}>Eliminar</DeleteButton>
        </Task>
      ))}
      {tasks.length > 0 && (
        <AllBtn onClick={clearTasks}>Eliminar Todas las Tareas</AllBtn>
      )}
    </SectionContainer>
  );
};

export default SectionContainer;
