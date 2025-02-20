import { Outlet } from "react-router-dom"
import { Navbar } from "../SharedComponent/Navbar"

export const Main = () => {
  return (
      <div>
          <Navbar />
          <Outlet/>
    </div>
  )
}
