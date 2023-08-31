import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePerson } from '../store/taskSlice';
import { AppDispatch } from '../store';
const TaskForm: React.FC = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!task) {
      return;
    }

    try {
   dispatch(savePerson(task));
      setTask('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className='btn btn-primary mx-2' type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
