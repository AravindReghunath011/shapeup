import { Link } from 'react-router-dom'
const component = () => {
  return (
    <>  
    <div className='sm:hidden'>
      navbar
    </div>
    
      <div className='h-14   inset-0 bg-black bg-opacity-85 backdrop-blur-lg z-50 sm:h-24  border-gray-600 hidden sm:flex   xl:h-24 border-b fixed top-0  w-full justify-between xl:pr-8 items-center  text-gray-300    '>
      <Link to="/"><img src="/logo.png" className='h-14 xl:ml-5' alt="" /></Link>
      <ul className='font-sans font-bold flex gap-28  '>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>TRAINERS</li>
        <li>VIDEOS</li>
      </ul>
      <div className='flex items-center gap-4'>
      <Link  to="/login">SIGN IN</Link>
      <button className='border  xl:w-32 xl:h-12'>Join</button>
      </div>
    </div>
    </>
    
  )
}

export default component