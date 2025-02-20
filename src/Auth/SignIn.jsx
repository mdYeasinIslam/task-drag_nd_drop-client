import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useAxiosPublic } from '../hooks/useAxiosPublic';

export const SignIn = () => {
      const { signInAuth,googleAuth } = useAuth()
    const navigate = useNavigate()
    const axiosPublic =useAxiosPublic()
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target?.email.value;
        const password = e.target?.password.value;
        
        signInAuth(email, password)
            .then(async (res) => {
                toast.success('You are log in succefully')
                navigate('/')
        }).catch(e => {
        toast.error(e.message)
        console.log(e)
    })
    }
    const handleGoogle = () => {
        googleAuth()
            .then(async (res) => {
                const user = res?.user
                const info = {name:user?.displayName,email:user?.email}
                const response = await axiosPublic.post('/usersInfo', info)
                console.log(response)
                toast.success('You are log in succefully')
                navigate('/')
            }).catch(e => {
                toast.error(e.message)
                console.log(e)
            })  
    }
  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col md:flex-row ">
    <div className="md:w-1/2 text-center lg:text-left">
     <img className='' src="/images/auth/signIn2.jpg" alt="" />
    </div>
    <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-2xl font-medium text-center pt-4'>Please Log In now !</h1>
      <form onSubmit={handleSubmit} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6 w-full">
          <button className="btn btn-primary w-full" type='submit'>Login</button>
        </div>
      </form>
       <div className=" max-w-5/6 mx-auto">
          <button onClick={handleGoogle} className="btn btn-accent w-full ">Login with Google</button>
        <label className="">
            <Link to='/signUp' className="label-text-alt link link-hover">Don't have any account? Please create an account</Link>
        </label>
        </div>
      
    </div>
  </div>
</div>
  )
}
