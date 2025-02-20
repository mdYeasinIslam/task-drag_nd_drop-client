import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Main } from '../Layout/Main'
import { SignIn } from '../Auth/SignIn'
import { SignUp } from '../Auth/SingUp'
import { Home } from '../Pages/Home/Home'
import { PrivateRoot } from './PrivateRoot'
export const Route = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element:<PrivateRoot><Home/></PrivateRoot>
                },
            ]
        },
        {
            path: '/signIn',
            element:<SignIn/>
        },
        {
            path: '/signUp',
            element:<SignUp/>
        }

    ])
  return (
    <RouterProvider router={routes}/>
  )
}
