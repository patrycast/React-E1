// import React from 'react';
import { TaskProvider } from "./components/TaskContext"
import { Container } from "./components/Container/Container"

function App() {

  return (
    <TaskProvider>
      <Container />   
    </TaskProvider>   
  )
}

export default App



