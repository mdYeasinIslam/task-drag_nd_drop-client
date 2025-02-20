import { TaskManger } from "../../SharedComponent/TaskManger"

export const Home = () => {
  return (
    <div>
        <div className="text-center font-semibold text-3xl py-2">
          Task Mangement Field
        </div>
        <TaskManger/>
    </div>
  )
}
