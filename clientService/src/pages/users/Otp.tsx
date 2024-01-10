import { Link } from "react-router-dom"

const Otp = () => {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
      <div className="h-[70vh] w-[30vw] rounded-md  bg-zinc-900 flex flex-col items-center">
          <h1 className="xl:text-4xl font-bold text-center xl:mt-10">ENTER THE OTP</h1>

          <div className="flex justify-center items-center xl:h-28 xl:mt-14"> 

            <input  className="xl:w-14 xl:h-14  xl:text-3xl text-center bg-zinc-950 remove-arrow xl:ml-4 xl:mr-2"   type="number" />
            <input  className="xl:w-14 xl:h-14  xl:text-3xl text-center bg-zinc-950 remove-arrow xl:ml-4 xl:mr-2"   type="number" />
            <input  className="xl:w-14 xl:h-14  xl:text-3xl text-center bg-zinc-950 remove-arrow xl:ml-4 xl:mr-2"   type="number" />
            <input  className="xl:w-14 xl:h-14  xl:text-3xl text-center bg-zinc-950 remove-arrow xl:ml-4 xl:mr-2"   type="number" />
          </div>
            <Link to="/resendotp" className="underline">resend otp</Link>
          <button className="bg-yellow-600 text-black font-bold w-6/12 h-10 rounded xl:mt-20">Verify</button>
            
          
      </div>
    </div>
  )
}

export default Otp