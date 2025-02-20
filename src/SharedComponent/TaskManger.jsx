import { AddTask } from "./AddTask"

export const TaskManger = () => {
  return (
      <div className="">
          <div className="text-center">
              <button
              onClick={()=>document.getElementById('my_modal_5').showModal()}
                  className="btn btn-outline btn-primary">Add Task</button>
                <AddTask/>
          </div>
          
            <div className=" w-full grid grid-cols-3 text-center gap-5 ">
                
                <div className="">
                    <h1 className="bg-violet-300 rounded py-2 font-medium">To-Do List </h1> 
                </div>
                <div className="">
                    <h1 className="bg-sky-200 rounded py-2 font-medium"> In Progress</h1>
                </div>
                <div className="">
                    <h1 className="bg-green-200 rounded py-2 font-medium"> Done </h1> 
                </div>
            </div>
      </div>
  )
}
