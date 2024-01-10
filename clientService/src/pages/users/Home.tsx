import Navbar from '../../components/users/Navbar'
import MarqueeComponent from '../../components/users/Marquee'


const Home = () => {
 
 
  return (
    <>
    <Navbar/>
    <div  className='bg-hero-pattern bg-no-repeat bg-cover h-[100vh] xl:pt-80 overflow-x-hidden '>
    <MarqueeComponent PropText="EXCLUSIVE" direction='left'/>
    <MarqueeComponent PropText="FITNESS" direction='right'/>
    <MarqueeComponent PropText="COMMUNITY" direction='left'/>

    </div>
    <div className='xl:h-[100vh] text-center flex flex-col   items-center'>
      <h1 className='font-jeju  font-bold xl:text-7xl xl:mb-6 xl:mt-40'>TRACK YOUR NUTRITION</h1>
      <div className='xl:w-7/12  text-xl '>

      <p className='font-jeju text-gray-400'>When you've got your sights set on a goal, training is only a piece of the puzzle.  Nutrition is<br />
       king when it comes to bringing your vision to life, and we strive to keep you on track in all areas of your journey.</p>
       <p className='xl:mt-5 font-jeju text-gray-400'>Choose your goal, and we'll do the heavy lifting from there. Track your food  daily to  <br /> hit your  assigned nutrition goals,
         and see your consistency pay off in the mirror one day at a time.</p>
      </div>
    </div>
    </>
   
  )
}

export default Home