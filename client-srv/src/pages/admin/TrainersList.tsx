import Navbar from '@/components/users/Navbar'
import axios from '../../utils/baseUrl'
import { useEffect, useState } from 'react'
import { DataTable } from '@/components/ui/dataTable'
import { trainerColumn } from '@/components/ui/column'
import Sidebar from '@/components/ui/sidebar'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import DemoPage from '@/components/ui/page'

const UserList = () => {
  const [user,setUsers] = useState([])
  useEffect(()=>{
    axios().get('http://localhost:8001/api/trainer/trainers').then((response:any)=>{
      console.log(response.data,'nnnnnnn')
      if(response.data.message=='success'){
        setUsers(response.data.trainers)
      }else{
        toast.error(response.data.message)
      }
    })
  },[])
  
  return (
    <>
    <Navbar/>
    
    <div className="flex flex-grow w-full lg:mt-24 ">
        
        <Sidebar/>
        
       
<div className='flex justify-center w-full '>

<div className='w-11/12 lg:mt-14' >
<Input className='w-72 rounded lg:mb-5 me-auto' type='search' placeholder='Search...'/>
<DataTable  columns={trainerColumn} data={user} />
</div>
</div>



    </div>
    </>
  )
}

export default UserList
