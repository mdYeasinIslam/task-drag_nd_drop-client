import axios from "axios"

 const axiosPublic = axios.create({
    // baseURL:'https://y-pi-pied.vercel.app'
    baseURL:'http://localhost:5000'
})  

export const useAxiosPublic = () => {
  return axiosPublic
}