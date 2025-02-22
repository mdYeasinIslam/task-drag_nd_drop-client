import axios from "axios"

 const axiosPublic = axios.create({
    // baseURL:'https://task-drag-nd-drop-server.vercel.app'
    baseURL:'https://task-drag-nd-drop-server.onrender.com'
    // baseURL:'http://localhost:5000'
})  

export const useAxiosPublic = () => {
  return axiosPublic
}