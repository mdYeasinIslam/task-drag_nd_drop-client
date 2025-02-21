import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import useTask from "../hooks/useTask";
import { AddTask } from "./AddTask";



const TaskMangerSecond = () => {
  const { tasks, updateTask, setTasks } = useTask();

  const categories = ["To-Do", "In Progress", "Done"];
    console.log(tasks)
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    console.log(destination)
    // Reordering within the same category
    if (source.droppableId === destination.droppableId) {
      const updatedTasks = [...tasks];  
      const [movedTask] = updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, movedTask);
      setTasks(updatedTasks);
    }
    // Moving to a different category
    else {
      const updatedTasks = tasks.map((task) => {
        if (task._id === result.draggableId) {
          return { ...task, category: destination.droppableId };
        }
        return task;
      });

      setTasks(updatedTasks);
      updateTask(result.draggableId, { category: destination.droppableId });
    }
  };

  return (
    <div className=''>
        <div className="text-center ">
                   <button
                   onClick={()=>document.getElementById('my_modal_5').showModal()}
                       className="btn btn-outline btn-primary">Add Task</button>
                     <AddTask/>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
              
                <DragDropContext onDragEnd={handleDragEnd}>
                {categories.map((category,idx) => (
                 <Droppable key={category} droppableId={category}>
                    {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className=' p-4 rounded-lg shadow-lg'
                    >
                        <h2 className={`text-xl font-bold py-3 text-center  ${idx==0 &&'bg-violet-200'} ${idx == 1 && 'bg-sky-200'} ${idx==2 && 'bg-green-200'}`}>{category}</h2>
                        <div className="">
                            {tasks
                            .filter((task) => task.category === category)
                            .map((task, index) => (
                                <Draggable
                                key={task._id}
                                draggableId={task._id}
                                index={index}
                                >
                                {(provided) => (
                                    <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className='bg-white p-3 mb-2 rounded shadow-md'
                                    >
                                    <h3 className='font-bold'>{task.title}</h3>
                                    <p className='text-sm'>{task.details}</p>
                                    </div>
                                )}
                                </Draggable>
                            ))}
                        </div>
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
                ))}
            </DragDropContext>
          </div>
    </div>
  );
};

export default TaskMangerSecond;
