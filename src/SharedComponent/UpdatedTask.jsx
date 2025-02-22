import _ from "lodash";
import useTask from "../hooks/useTask";
import toast from "react-hot-toast";

export const UpdatedTask = ({modalRef,selectedTask,closeModal}) => {
  const {updateTask} =useTask()
    const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target?.title.value;
    const details = e.target?.details.value;
    const date = e.target?.date.value
    const category = 'To-Do'
    const task = { title, details,date,category}
      if (title !== selectedTask.title || details !== selectedTask.details || date !== selectedTask.date) {
        updateTask(selectedTask._id, task)
        closeModal()
        toast.success('Updation successfull')
      }
      else {
        toast('Please change some thing')
      }
  }
  return (
    <div>
        <dialog ref={modalRef} id={`my_modal_3`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-left">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">Update Taks Info</h3>
              <div className="modal-action">
                  <button
                    className="btn"
                    onClick={closeModal}>
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
                        defaultValue={selectedTask?.title ?? ''}
                        required
                        className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-medium">Task Details : </label>
                    <input
                        type="text"
                        placeholder="Task Details"
                        defaultValue={selectedTask?.details ?? ''}
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
                        defaultValue={selectedTask?.date??  ''}
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
