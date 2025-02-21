
import useTask from "../hooks/useTask"
export const AddTask = () => {
  const {addTask} =useTask()

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log('submit')
    const title = e.target?.title.value;
    const details = e.target?.details.value;
    const date = e.target?.date.value
    const category = 'TODO'
    const task = { title, details,date,category}
    addTask(task)
    // const response = await axiosPublic.post('/tasks', task)
    // console.log(response)
    // if (response?.data?.acknowledged) {
    //   toast.success('Task is successfully added')
    //   document.getElementById("my_modal_5").close()
    //   e.target.reset()
    // }
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
