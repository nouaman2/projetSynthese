import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto flex flex-wrap justify-between p-6 mb-6">
            <div className="w-full md:w-1/4">
            <h2 className="text-xl font-semibold mb-2">EasyFly</h2>
            <p className="text-sm text-gray-400">Your trusted flight booking platform, making travel simple and affordable.</p>
            </div>
            <div className="w-full md:w-1/4 flex flex-col pl-20">
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul>
                    <li className="cursor-pointer hover:text-teal-400"><Link to={'/'}>Home</Link></li>
                    <li className="cursor-pointer hover:text-teal-400"><Link to={'/contact'}>Contact Us</Link></li>
                    <li className="cursor-pointer hover:text-teal-400"><Link to={'/about'}>About us</Link></li>
                    <li className="cursor-pointer hover:text-teal-400"><Link to={'/flights'}>Reservation</Link></li>
                </ul>
            </div>
            <div className="w-full md:w-1/4">
                <h3 className="text-lg font-semibold mb-2.5">Customer Support</h3>
                <p><FontAwesomeIcon icon={faPhone}/> +212 45 45 05 57</p>
                <p className='my-2'><FontAwesomeIcon icon={faEnvelope}/> support@easyfly.com</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt}/> sidi youssef ben alli dr dlam ,marrakech</p>
            </div>

            <div className="location-map w-full md:w-1/4">
                <img src="./mapLocation.png" alt="" />
            </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
            <p>© 2025 EasyFly. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;