import React from 'react';
import { useSelector } from 'react-redux';
import { Rootstate } from '../store/index';
import Card from './Card';

const TaskList: React.FC = (): JSX.Element => {
  const tasksvalue = useSelector((state: Rootstate) => state.treducer.tasks);

  return (
    <div className='container'>
      {tasksvalue.map((task,index) => {
        return <Card key={index} task={task} index={index} />;
      })}
    </div>
  );
};

export default TaskList;
