import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Main } from '../Layout/Main'
import { SignIn } from '../Auth/SignIn'
import { SingUp } from '../Auth/SingUp'
import { Home } from '../Pages/Home/Home'
export const Route = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element:<Home/>
                },
            ]
        },
        {
            path: '/signIn',
            element:<SignIn/>
        },
        {
            path: '/signUp',
            element:<SingUp/>
        }

    ])
  return (
    <RouterProvider router={routes}/>
  )
}
