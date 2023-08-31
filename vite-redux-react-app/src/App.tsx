// src/App.tsx
import React, { useEffect } from 'react';
import './App.css';
import TaskForm from './components/Taskform';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux';
import { fetchperson } from './store/taskSlice';
import { AppDispatch } from './store';

const App: React.FC = () => {
  const dispatch=useDispatch<AppDispatch>()
  useEffect(() => {
   dispatch(fetchperson())
  });
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
