import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { AddTask } from "./AddTask";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import { UpdatedTask } from "./UpdatedTask";
import { useAllTasks } from "../hooks/useAllTasks";
import { useAxiosPublic } from "../hooks/useAxiosPublic";
import useTask from "../hooks/useTask";



const TaskManger = () => {
  const { tasks,deleteTask, updateTask, setTasks } = useTask();
  const [selectedTask, setSelectedTask] = useState(null);
  const modalRef = useRef(null);
    const axiosPublic=useAxiosPublic()
  const categories = ["To-Do", "In Progress", "Done"];
console.log(tasks)
  const [taskData] = useAllTasks()
  // setTasks(taskData)
  // console.log(taskData)
 
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    // const fromStatus = result.source.droppableId;
    // const toStatus = result.destination.droppableId;
    // const taskId = result.draggableId;
    // const oldIndex = result.source.index;
    // const newIndex = result.destination.index;
    // let updatedTasks = [...tasks?.map((task) => ({ ...task }))];

    //     if (fromStatus === toStatus) {
    //       // Find and remove the moved task
    //       const movedTask = updatedTasks.find((task) => task._id === taskId);
    //       updatedTasks = updatedTasks.filter((task) => task._id !== taskId);

    //       // Insert task into the new position
    //       updatedTasks.splice(newIndex, 0, movedTask);
    //     } else {
    //       // Find the dragged task and update its category
    //       updatedTasks = updatedTasks.map((task) =>
    //         task._id === taskId ? { ...task, category: toStatus } : task
    //       );
    //     }
    //       // Optimistically update the UI
    //       setTasks(updatedTasks);

    //       // Send request to update backend
    //       axiosPublic
    //         .put("/reOrder", {
    //           taskId,
    //           newCategory: toStatus,
    //           oldCategory: fromStatus,
    //           newIndex,
    //           oldIndex,
    //         })
    //         .catch((err) => {
    //           toast.error(`Error updating task order: ${err.message}`);
    //           // Revert changes if API request fails
    //           setTasks(tasks);
    //         });
        




    // ===========================================
    const { source, destination } = result;

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

    const handleDelete = (id) => {
        toast(
            (t) => (
            <div>
                <p className="text-lg font-medium">Do you want to delete?</p>
                <div className="flex justify-end gap-3 mt-3">
                {/* Yes Button - Deletes the product */}
                <button
                    onClick={() => confirmDelete(id, t.id)}
                    className="btn btn-error btn-sm"
                >
                    Yes
                </button>

                {/* No Button - Closes the toast */}
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="btn btn-neutral btn-sm"
                >
                    No
                </button>
                </div>
            </div>
            ),
            { duration: 5000, position: "top-center" }
        )
    }
    const confirmDelete = (id, toastId) => {
        toast.dismiss(toastId); // Close the confirmation toast

        // Show a loading toast
        const loadingToast = toast.loading("Deleting...");

        // Simulate an API request (Replace this with actual API call)
        setTimeout(() => {
            toast.dismiss(loadingToast); // Remove loading toast
            toast.success("Product deleted successfully!"); // Show success toast

            // Here you would call your API or function to delete the product
            deleteTask(id)
        }, 1000);
    };
    

     const openModal = (task) => {
    setSelectedTask(task); // Store selected task data
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    setSelectedTask(null); // Clear selected task when closing
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
                {categories?.map((category,idx) => (
                 <Droppable key={category} droppableId={category}>
                    {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className=' p-4 rounded-lg shadow-lg'
                    >
                        <h2 className={`text-xl font-bold py-3 text-center  ${idx==0 &&'bg-violet-200'} ${idx == 1 && 'bg-sky-200'} ${idx==2 && 'bg-green-200'}`}>{category}</h2>
                        <div className="">
                          {
                            tasks?.length > 0 &&
                            <>
                            {tasks?.filter((task) => task.category === category)?.map((task, index) => (
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
                                    className='bg-slate-200 p-3 my-2 rounded shadow-md'
                                    >
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='font-bold'>{task?.title}</h3>
                                            <p className='text-sm'>{task?.details}</p>
                                        </div>
                                        <div className="flex ">
                                            <button 
                                             onClick={() => openModal(task)}
                                            className="btn"> 
                                               <MdEdit className="w-5 h-5 text-blue-500  hover:bg-slate-200"/>
                                            </button>
                                                    <UpdatedTask modalRef={modalRef} selectedTask={selectedTask}
                                                 closeModal={closeModal}
                                                    />
                                            <button className="btn">
                                                
                                            <MdDelete onClick={()=>handleDelete(task._id)} className="w-5 h-5 text-red-500  not-even:hover:bg-slate-200"/>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                )}
                                </Draggable>
                            ))}
                            </>
                          }
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

export default TaskManger;
