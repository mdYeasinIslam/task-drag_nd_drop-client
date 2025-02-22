import { useQuery } from '@tanstack/react-query'
import { useAuth } from './useAuth'
import { useAxiosPublic } from './useAxiosPublic'

export const useAllTasks = () => {

  const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
        
       const { data: taskData=[],isPending,refetch} =useQuery({
        queryKey: ['taskData', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?email=${user?.email}`)
            return res.data
               
        },
    })  
    return [taskData,isPending,refetch]
}
