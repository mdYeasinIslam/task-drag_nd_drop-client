import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useAxiosPublic } from '../hooks/useAxiosPublic';

export const SignUp = () => {
  const { signUpAuth, updateUserAuth } = useAuth()
  const axiosPublic =useAxiosPublic()
  const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target?.name.value;
        const email = e.target?.email.value;
        const password = e.target?.password.value;
    
      signUpAuth(email, password)
        .then(async(res) => {
           const info ={name,email}
            const response = await axiosPublic.post('/usersInfo',info)
            console.log(response)
          navigate('/')
        }) .catch(e => {
        toast.error(e.message)
        console.log(e)
    })
    }

  return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content grid grid-cols-1  md:grid-cols-2 ">
    <div className="w-3/4 text-center lg:text-left">
     <img className='' src="/images/auth/signUp.jpg" alt="" />
    </div>
    <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
        <h1 className='text-2xl font-medium text-center pt-4'>Please create your account !</h1>
      <form onSubmit={handleSubmit} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary w-full" type='submit'>Register</button>
        </div>
      </form>
           <label className="">
            <Link to='/signIn' className="label-text-alt link link-hover">Already have an account? Please Log In.</Link>
        </label>
    </div>
  </div>
</div>
  )
}
