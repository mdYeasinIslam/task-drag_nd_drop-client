
import toast from "react-hot-toast"
import useTask from "../hooks/useTask"
import { useAuth } from "../hooks/useAuth"
export const AddTask = () => {
  const {addTask} =useTask()
const {user} =useAuth()
  const handleSubmit = async(e) => {
    e.preventDefault()
    const title = e.target?.title.value;
    const details = e.target?.details.value;
    const date = e.target?.date.value
    const category = 'To-Do'
    const userEmail = user?.email;
    const userName =user?.dsplayName
    const task = { title, details,date,category,userEmail,userName}
    addTask(task)
    e.target.reset()
    document.getElementById("my_modal_5").close()
  }
  return (
    <div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-left">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Add Taks</h3>
              <div className="modal-action">
                  <button
                    className="btn"
                    onClick={() => document.getElementById("my_modal_5").close()}>
                    Close
                  </button> 
              </div>
            </div>
            <div className="">
            <form onSubmit={handleSubmit} method="dialog" className="space-y-2">
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-medium">Task title : </label>
                    <input
                        type="text"
                        placeholder="Task Title"
                        name="title"
                        required
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-medium">Task Details : </label>
                    <input
                        type="text"
                        placeholder="Task Details"
                        name="details"
                        required
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-medium">Task Details : </label>
                    <input
                        type="date"
                        name="date"
                        required
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <button className="btn" type="submit">Submit </button>
            </form>
             
            </div>
        </div>
        </dialog>
    </div>
  )
}
