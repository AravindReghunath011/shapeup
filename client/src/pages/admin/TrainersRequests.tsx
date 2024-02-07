import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { DropdownMenu,DropdownMenuItem,DropdownMenuContent,DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { axiosPrivet } from '@/utils/baseUrl'
import { RequestInterface } from '@/utils/interface/requestInterface'

const TrainersRequests = () => {
    const  [requests, setRequests] = useState<RequestInterface[]>()
    useEffect(()=>{
        axiosPrivet.post('http://localhost:8002/api/admin/requests').then(({data}:any)=>{
            console.log(data,'data')
            setRequests(data.data)
        })
    },[])

    const acceptRequest = async(id:string)=>{
        axiosPrivet.put(`http://localhost:8002/api/admin/accept`,{requestId:id}).then((response:any)=>{
            console.log(response.data)
        })
    }
    
    const rejectRequest = async(id:string)=>{
        axiosPrivet.put(`http://localhost:8002/api/admin/reject`,{requestId:id}).then((response:any)=>{
            console.log(response.data)
        })
    }
     
  return (
    <div>
        <table className='border text-center '>
            <thead className='border' >
                <tr >
                    <th className='border w-20'>#</th>
                    <th className='border w-20'>id</th>
                    <th className='border w-60'>email</th>
                    <th className='border w-60'>certificate</th>
                    <th className='border w-60'>actions</th>
                </tr>
                
            </thead>
            <tbody>
                {
                    requests?.map((request:RequestInterface,i:number)=>{
                       return  <tr key={request._id}>
                    <td className='border'>{i+1}</td>
                    <td className='border'>{request._id}</td>
                    <td className='border'>{request?.email}</td>
                    <td className='border'><Button variant={'link'}>show certificate</Button></td>
                    <td className='border'>
                        <DropdownMenu>
                            <DropdownMenuTrigger className='hover:bg-gray-700  rounded w-7 h-7 text-center '>
                                ...
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className='bg-gray-900 hover:cursor-pointer'>

                            <DropdownMenuItem className='border w-32 ' onClick={()=>acceptRequest(request._id)}>Accept</DropdownMenuItem>
                            <DropdownMenuItem className='border px-3' onClick={()=>rejectRequest(request._id)}>Reject</DropdownMenuItem>
                            </DropdownMenuContent>

                        </DropdownMenu>
                    </td>
                </tr>
                    })
                }
                
                
            </tbody>
        </table>
    </div>
  )
}

export default TrainersRequests