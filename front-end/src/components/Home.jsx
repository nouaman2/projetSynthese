import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import Footer from './Footer';
function Home() {
  return (
    <div className='font-istok'>
     <header className='bg-gradient-to-r from-teal-300 to-indigo-400 py-5 px-3 sm:px-7 lg:px-14 text-white'>
        <h1 className='text-center text-3xl sm:text-5xl md:text-6xl font-semibold leading-normal mb-11 sm:mt-3 lg:mx-24 mix-blend-soft-light'>explore the world and enjoy your trip with easy way</h1>
            <form onSubmit={(event)=>event.preventDefault()} className='flex flex-col md:flex-row items-center gap-5 mb-5'>
                <div className="info-flight-container w-full grid grid-cols-4 gap-2">
                    <div className='bg-white px-3 py-1.5 md:p-3 col-span-4 md:col-span-2 lg:col-span-1 rounded-lg shadow-md'>
                        <label htmlFor="from" className='text-[#1E3A8A] text-lg font-bold'>From <FontAwesomeIcon icon={faPlaneDeparture}/></label><br />
                        {/* input of From destination */}
                        <input type="text" name="form" id="from" placeholder='Country, city or airport' className='w-full outline-none placeholder:text-[#4B5563] text-gray-600 text-lg indent-1'/>
                    </div>
                    <div className='bg-white px-3 py-1.5 md:p-3 col-span-4 md:col-span-2 lg:col-span-1 rounded-lg shadow-md'>
                        <label htmlFor="to" className='text-[#1E3A8A] text-lg font-bold'>To <FontAwesomeIcon icon={faPlaneArrival}/></label><br />
                        {/* input of To destination */}
                        <input type="text" name="to" id="to" placeholder='Country, city or airport' className='w-full outline-none placeholder:text-[#4B5563] text-gray-600 text-lg indent-1'/>
                    </div>
                        <div className='bg-white px-3 py-1.5 md:p-3 col-span-2 md:col-span-2 lg:col-span-1 rounded-lg shadow-md'>
                            <label htmlFor="depart" className='text-[#1E3A8A] text-lg font-bold '>Date Depart <FontAwesomeIcon icon={faCalendar}/></label><br />
                            {/* input of Depart destination */}
                            <input type="date" name="depart" id="depart" className='w-full outline-none text-[#4B5563] text-lg'/>
                        </div>
                        
                        <div className='bg-white px-3 py-1.5 md:p-3 col-span-2 md:col-span-2 lg:col-span-1 rounded-lg shadow-md'>
                            <label htmlFor="return" className='text-[#1E3A8A] text-lg font-bold '>Date Return <FontAwesomeIcon icon={faCalendar}/></label><br />
                            {/* input of Return destination */}
                            <input type="date" name="return" id="return" className='w-full outline-none text-[#4B5563] text-lg'/>
                        </div>
                </div>
                <button className='text-white md:text-blue-800 md:hover:text-white  font-bold border-2 border-[#1158C2] bg-[#1158C2] md:bg-transparent hover:bg-[#1158C2]  px-9 py-3 rounded-xl shadow-md'>Search</button>
            </form>
      </header>
      <main className='p-5 lg:p-8'>
        contnet of hame page
      </main>
      <Footer/>
    </div>
  )
}

export default Home;
