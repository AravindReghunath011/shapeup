import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Navbar from '@/components/users/Navbar'
import { axiosPrivet } from '@/utils/baseUrl'
import { TrainerInterface } from '@/utils/interface/trainerInterface'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate ,useParams} from 'react-router-dom'
import { toast } from 'sonner'

const TrainerDetails = () => {
    const {id} = useParams()
  const user =  useSelector((state:any) => state.user.user.user)

    const [trainerData,setTrainerData] = useState<TrainerInterface>()

    const followTrainer = async()=>{
        axiosPrivet.put(`http://localhost:8001/api/trainer/follow/${trainerData?._id}`,{userId:user.id}).then(({data})=>{
      console.log(data,'follow data')
      if(data.message=='success'){

        toast.success('you started following')
      }
    })
    }
    const unFollowTrainer = async()=>{
        axiosPrivet.put(`http://localhost:8001/api/trainer/unfollow/${trainerData?._id}`,{userId:user.id}).then(({data})=>{
      console.log(data,'follow data')
      if(data.message=='success'){

        toast.success('you have unfollowed')
      }
    })
    }

    useEffect(()=>{
        axiosPrivet.get(`http://localhost:8001/api/trainer/findbyid/${id}`).then(({ data }: { data: TrainerInterface })=>{
            console.log(data,'trainerdata')
            setTrainerData(data)
        })
    },[trainerData])
    const navigate = useNavigate()
  return (
    <div>
        <Navbar/>
        <div className='w-full lg:pb-5 lg:mt-28 flex justify-center'>
            <div className='w-6/12'>
            <Card className='   border-input'>
            <div className='w-full  border-b h-40'>
                    <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg" alt="banner img" className='w-full h-full rounded-t-xl'/>
            </div>
            <div className=' lg:pl-5'>

                    <div className='w-32 h-32  rounded-full bg-black inset-10 lg:mt-[-6rem]  outline outline-1'>
                        <img src="https://i.pinimg.com/originals/4d/56/c9/4d56c9bf4e37a5cd0607feb036886aa9.jpg" alt="profile" className='w-full h-full z-50 rounded-full' />
                    </div>
                    <div className='lg:w-8/12'>
                    <h1 className='text-2xl font-semibold mt-3'>{trainerData?.name}</h1>
            <h2 className='font-light text-xl'>Headline</h2>
            <h2 className='font-light '># Bio about who you are and why should anyone subscribe to yo0u
            # Bio about who you are and why should anyone subscribe to you
            # Bio about who you are and why should anyone subscribe to you</h2>
            {
          trainerData?.followers.includes(user.id) ? (
            <Button  className='rounded lg:mt-3' onClick={()=>unFollowTrainer()}>UNFOLLOW </Button> 

          ) : (
            <Button  className='rounded lg:mt-3' onClick={()=>followTrainer()}>FOLLOW </Button> 

          )
        }
            <Button variant={'outline'} className='rounded lg:ml-5 lg:mb-5' onClick={()=>navigate(`/trainer/subscribe/${trainerData?._id}`)}>  SUBSCRIBE</Button> 
                    </div>
          

            </div>


        </Card>
        <Card className=' lg:mt-3 w-full border-input p-5'>
            <div >

            <h2 className='text-xl font-semibold lg:mb-3 '>About</h2>
            <pre className='whitespace-pre-wrap'>
                helo 
                hehe
                hey there
                why this is not working
            </pre>
            <p>🚀 Passionate and self-motivated MERN Stack Developer 🌐💻

👋 Hello, I'm Aravind Reghunath, a dynamic and results-driven MERN Stack Developer
 with a relentless commitment to continuous learning and professional growth. I 
 thrive in challenging environments where I can leverage my skills to create robust
  and scalable web applications. Have hands on experience in developing mern applications
  . Have great communication skills that makes me work in a team 

🌟 Skills Highlights:

💡 Frontend: React.js, HTML5, CSS3, JavaScript (ES6+)
🛠 Backend: Node.js, Express.js
🗃 Database: MongoDB, Mongoose
🔄 Version Control: Git, GitHub
🌐 RESTful API Development
🚀 Deployment: AWS</p>
            </div>
        </Card>
            </div>
        
        
        <div className='lg:w-72  border-input border lg:ml-5 rounded '>

        </div>
        </div>
         
       
       
    </div>
  )
}

export default TrainerDetails