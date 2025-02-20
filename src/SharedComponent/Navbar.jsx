import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import toast from "react-hot-toast"

export const Navbar = () => {
  const { user, signOutAuth } = useAuth()
  const navigate =useNavigate()
  const handleSignOut = () => {
    signOutAuth()
      .then(() => {
        toast.success('sign-out successful')
        navigate('/signIn')
      })
      .catch(e => {
        toast.error(e.message)
        console.log(e)
    })
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium">
          <NavLink to='/'><li>Home</li></NavLink>
      
      </ul>
    </div>
    <Link to='/' className="font-medium md:text-xl ">ToDo-Field</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium uppercase text-[16px] ">
      <NavLink to='/'><li>Home</li></NavLink>
    </ul>
  </div>
  <div className=" navbar-end ">
     <div className=" px-1 font-medium uppercase text-[16px] flex gap-2 md:gap-4">
      {
        user?.email ?
        <>
        <button onClick={handleSignOut} className="btn btn-sm btn-outline btn-primary">Log Out</button>
        </>
        :
        <>
        <NavLink to='/signIn'>
          <button className="btn btn-sm btn-outline btn-primary">Log In</button>
        </NavLink>
        <NavLink to='/signUp'>
          <button className="btn btn-sm btn-outline btn-primary">Sign Up</button>
        </NavLink>
        </>
      }
    </div>
    <div className="w-12 rounded-full">
          <img src={user?.email ? user?.photoURL:'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
          className="rounded-full"/>
    </div>
  </div>
</div>
  )
}
