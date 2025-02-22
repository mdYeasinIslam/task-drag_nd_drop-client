import { useContext } from 'react';
import { TaskContext } from '../Context/TaskProvider';


const useTask = () => {
   const taskContext = useContext(TaskContext);
       return taskContext
};

export default useTask;