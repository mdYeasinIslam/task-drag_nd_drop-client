
export const AddTask = () => {
  return (
    <div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-left">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="">
            <form method="dialog" className="space-y-2">
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-medium">Task title : </label>
                    <input
                            type="text"
                            placeholder="Task Title"
                            name="title"
                            className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-medium">Task Details : </label>
                    <input
                            type="text"
                            placeholder="Task Details"
                            name="details"
                            className="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}
