import { useAxiosPublic } from './useAxiosPublic'
import { useAuth } from './useAuth'
import { useQuery } from '@tanstack/react-query'

export const useAllTasks = () => {

  const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
        
       const { data: taskData=[],isLoading:isPending,refetch} =useQuery({
        queryKey: ['taskData', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            
            const res = await axiosPublic.get(`/tasks`)
            return res.data
               
        },
    })  
    return [taskData,isPending,refetch]
}
