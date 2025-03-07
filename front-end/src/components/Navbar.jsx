import { faQuestionCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faChevronRight, faHome, faPhone, faPlane, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [isNavbarOpen , setIsNavbarOpen] = useState(false);
    function toggleNavbar(e) {
      e.stopPropagation();
      setIsNavbarOpen(!isNavbarOpen);
    }
    useEffect(()=>{
        const colseNavbar = () => setIsNavbarOpen(false);
        document.addEventListener('click',colseNavbar)
        const addAnimationEffect = () => document.getElementById("hiddenElement").classList.add("animate-fadeIn");
        document.getElementById("movingElement").addEventListener("animationend", addAnimationEffect);
        return ()=> {
          document.getElementById("movingElement").removeEventListener('animationend',addAnimationEffect);
          document.removeEventListener('click',colseNavbar)
        }
    },[])
  return (
    <div className='bg-gradient-to-r from-teal-300 to-indigo-400 py-3.5 px-5 sm:px-7 lg:px-12  flex justify-between items-center text-white'>
      <Link to={'/'} className="logo flex justify-between items-center gap-3">
            <FontAwesomeIcon icon={faPlane} id="movingElement" className='text-2xl md:text-4xl animate-moveRight'/>
            <div id="hiddenElement" className="logo-title text-lg  md:text-2xl font-extrabold font-serif opacity-0">EasyFly</div>
        </Link>
        <ul className=' md:w-[70%] lg:w-[60%] hidden md:flex justify-between items-center capitalize font-semibold text-sm sm:text-base md:text-xl'>
            <li className='cursor-pointer hover:scale-105'><Link to={'/'}>Home</Link></li>
            <li className='cursor-pointer hover:scale-105'><Link to={'/flights'}>reservation</Link></li>
            <li className='cursor-pointer hover:scale-105'><Link to={'/about'}>about us</Link></li>
            <li className='cursor-pointer hover:scale-105'><Link to={'/contact'}>contact us</Link></li>
            <li className='cursor-pointer hover:scale-105'><Link to={'/login'}><FontAwesomeIcon icon={faUser} className='text-xl py-3 px-3.5 border-2 border-white rounded-full'/></Link></li>
        </ul>
        {!isNavbarOpen ?(
          <FontAwesomeIcon 
          icon={faBars} 
          className='md:hidden text-xl sm:text-2xl'
          onClick={(event)=>toggleNavbar(event)} 
          />
            ) : (
          <div className='md:hidden text-black absolute top-0 right-0 z-50 bg-[#FCFDFF] w-full sm:w-72 md:w-96 h-full p-3' onClick={(event)=>event.stopPropagation()}>
            <FontAwesomeIcon icon={faChevronRight} onClick={(event)=>toggleNavbar(event)}/>
              <div className="links flex flex-col gap-5 mt-10">
              <div><Link to={'/login'} className='flex justify-between items-center' onClick={()=>setIsNavbarOpen(false)}>Login <FontAwesomeIcon icon={faUser} className='text-lg py-1.5 px-2 md:py-3 md:px-3.5 border-2 border-black rounded-full'/></Link></div>
              <div><Link to={'/'} className='flex justify-between items-center mr-2' onClick={()=>setIsNavbarOpen(false)}>Home <FontAwesomeIcon icon={faHome}/></Link></div>
              <div><Link to={'/flights'} className='flex justify-between items-center mr-2' onClick={()=>setIsNavbarOpen(false)}>reservation <FontAwesomeIcon icon={faPlaneDeparture}/></Link></div>
              <div><Link to={'/about'} className='flex justify-between items-center mr-2' onClick={()=>setIsNavbarOpen(false)}>about us <FontAwesomeIcon icon={faQuestionCircle}/></Link></div>
              <div><Link to={'/contact'} className='flex justify-between items-center mr-2' onClick={()=>setIsNavbarOpen(false)}>contact us <FontAwesomeIcon icon={faPhone}/></Link></div>
              </div>
          </div>
      )}
    </div>
  )
}

export default Navbar;
