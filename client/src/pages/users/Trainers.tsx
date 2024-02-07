// import React from 'react'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/users/Navbar"
import { axiosPrivet } from "@/utils/baseUrl"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { TrainerInterface } from "@/utils/interface/trainerInterface"
import { toast } from "sonner"

const Trainers = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user =  useSelector((state:any) => state.user.user.user)
  // alert(user.id)
  let [trainers,setTrainers] = useState([])
  useEffect(()=>{
    axiosPrivet.get('http://localhost:8001/api/trainer/trainers').then(({data})=>{
      console.log(data.trainers,'dataaa')
      setTrainers(data.trainers)
    })
  },[trainers])

  const handleUnfollow = async(trainerId:string)=>{
    axiosPrivet.put(`http://localhost:8001/api/trainer/unfollow/${trainerId}`,{userId:user.id}).then(({data})=>{
      console.log(data,'follow data')
      if(data.message=='success'){

        toast.success('you have unfollowed')
      }
    })
  }

  const handleFollow = async(trainerId:string)=>{
    axiosPrivet.put(`http://localhost:8001/api/trainer/follow/${trainerId}`,{userId:user.id}).then(({data})=>{
      console.log(data,'follow data')
      if(data.message=='success'){

        toast.success('you started following')
      }
    })
  }
  return (
    <>
    <Navbar/>
    <div className="flex justify-center">
    <div className="flex mt-32 w-10/12 flex-wrap gap-10 justify-center  mb-10">
      {
        trainers.map((trainer:TrainerInterface)=>{
            return  <Card className="h-[17rem] w-52" >
            <div className="h-40 ">
              <img onClick={()=>navigate(`/trainerdetails/${trainer._id}`)} className="object-cover object-center rounded-t-xl h-full w-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbDddKg124nPwgxCjzujO_2VV0B6VCi08Hg&usqp=CAU" alt="" />
            </div>
            <div className="text-center p-2">
              <h1 className="mb-5">{trainer?.name}</h1>
              {
          trainer.followers.includes(user.id) ? (
            <Button onClick={()=>handleUnfollow(trainer?._id)} variant={"outline"} className="rounded">
              Unfollow
            </Button>
          ) : (
            <Button onClick={() => handleFollow(trainer?._id)} variant={"outline"} className="rounded">
              Follow
            </Button>
          )
        }
            </div>
          </Card>
        })
      }
     
     
    </div>
    </div>
    
    </>
  )
}

export default Trainers