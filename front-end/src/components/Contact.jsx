import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Footer from './Footer';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='bg-[#FCFDFF]'>
      <header className='py-5 px-2  md:p-5'>
        <div className="title text-gray-800 text-2xl md:text-4xl font-bold text-center">Contact Our Support Team</div>
        <div className="description mt-5 text-gray-500 font-  md:text-xl text-center w-11/12  relative left-1/2 -translate-x-1/2">Have a question about our services or need assistance with your booking? Our support team is here to help. chat to our assistance team and get your answer in less than 5 minutes</div>
      </header>
      <main className='mt-14 flex flex-col lg:flex-row gap-5 md:gap-0 items-center px-5 md:px-14 pb-8 md:pb-12'>
      <form onSubmit={(event)=>event.preventDefault()} className='w-full lg:w-2/3 grid grid-cols-2 gap-3'>
                        <div>
                            <label htmlFor="first-name" className='text-lg font-semibold'>First Name</label><br />
                            {/* input of first name */}
                            <input type="text" name="first-name" id="first-name" className='mt-2 w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-700 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 shadow-sm hover:border-gray-400'/>
                        </div>
                        <div>
                            <label htmlFor="last-name" className='text-lg font-semibold'>Last Name</label><br />
                            {/* input of last name */}
                            <input type="text" name="last-name" id="last-name" className='mt-2 w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-700 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 shadow-sm hover:border-gray-400'/>
                        </div>
                        <div className='col-span-2 my-3.5'>
                            <label htmlFor="email" className='text-lg font-semibold'>Email</label><br />
                            {/* input of email */}
                            <input type="text" name="email" id="email" className='mt-2 w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-700 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 shadow-sm hover:border-gray-400'/>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="message" className='text-lg font-semibold'>Comment or Message</label><br />
                            {/* input of message */}
                            <textarea name="message" id="message" className='mt-2 w-full h-60 resize-none p-4 rounded-lg border border-gray-300 bg-white text-gray-700 outline-none transition-all duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 shadow-sm hover:border-gray-400'></textarea>
                        </div>
                        <button className='mt-3.5 w-auto text-white text-lg md:text-xl bg-indigo-500 py-2 md:py-3 hover:bg-indigo-600 rounded-md relative left-1/2'>Send</button>
                    </form>
        <div className="chat-info w-full lg:w-[40%] lg:pl-10  text-gray-500 lg:-translate-y-8 flex lg:flex-col justify-between flex-wrap gap-8">
            <div className="socail-medai">
            <div className='text-lg font-semibold mb-1.5 text-black text-center sm:text-left'>Chat with our support client</div>
              <div className="pl-4 space-y-1">
              <div><FontAwesomeIcon icon={faFacebook} className='mr-3 text-2xl text-blue-600'/><a href="https://facebook.com">Facebook</a></div>
              <div><FontAwesomeIcon icon={faWhatsapp} className='mr-3 text-2xl text-green-600'/><a href="https://whatsapp.com">whatsapp</a></div>
              <div><FontAwesomeIcon icon={faInstagram} className='mr-3 text-2xl text-red-600'/><a href="https://instagram.com">instagram</a></div>
              <div><FontAwesomeIcon icon={faTwitter} className='mr-3 text-2xl text-sky-600'/><a href="https://twitter.com">twitter</a></div>
              </div>
            </div>
            <div className="email">
              <div className='text-lg font-semibold mb-1.5 text-black text-center sm:text-left'>Contact us on our oficiel Email</div>
              <div className='pl-4'><FontAwesomeIcon icon={faEnvelope} className='mr-2'/> support@easyfly.com</div>
            </div>
            <div className="call">
              <div className='text-lg font-semibold mb-1.5 text-black text-center sm:text-left'>Call us on our available phone from 8 AM to 7 PM</div>
              <div className='pl-4'><FontAwesomeIcon icon={faPhone} className='mr-2'/>+212 45 45 05 57</div>
            </div>
            <div className="call">
              <div className='text-lg font-semibold mb-1.5 text-black text-center sm:text-left'>Visit us</div>
              <div className='pl-4'><FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2'/> sidi youssef ben alli dr dlam ,marrakech</div>
            </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Contact;