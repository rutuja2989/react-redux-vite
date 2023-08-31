
import { useDispatch } from 'react-redux';
import {deletePerson,Tasks} from '../store/taskSlice'
import { AppDispatch } from '../store';

interface taskTypes{
    task:Tasks,
    index:number;
}
const Card=({task}:taskTypes):JSX.Element=>{
    const dispatch=useDispatch<AppDispatch>()
  return (
    <div>
      <ul>
        <li>
          {task.task}
           <span><button className='btn btn-primary my-2' type="submit" onClick={()=>dispatch(deletePerson(task.id))}>Delete</button>
           </span>
        </li>
      </ul>
    </div>
  );
}

export default Card;