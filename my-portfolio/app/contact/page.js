import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';
import Navbar from '@/components/Navbar';

const page1 = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-full lg:h-screen' >
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-red-900'>Contact</p>
        <h2 className='py-4 text-4xl'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>

                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://imgs.search.brave.com/HU830Yxabq4VGHr6B-HdCRZYtZoX7iMUavI2vv5Z_84/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjM4/MTQ5Nzg4L3Bob3Rv/L2hhbmRzLXR5cGlu/Zy1vbi1sYXB0b3At/Y29tcHV0ZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWdU/V1c0WUhQSzlGY0Y4/OFZneVdYZFZJbms5/RHJsMWdROGxCMU1D/UUtNVE09'/> 
                        </div>
                        <div>
                          <h2 className='py-4 text-4xl font-bold'>Lyheng</h2>
                          <p className='text-xl'> Front-end Developer</p>
                          <p className='py-4 '>I'm studying in Royal University of Phnom Penh. Contact me and let's talk.</p>
                        </div>
                        <div>
                      <p className='uppercase pt-32'>Contact with me</p>
                      <div className='flex item-center justify-between py-4'>
                     
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl ">
                <FaLinkedinIn />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl">
                <FaGithub />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl">
                <FaFacebook />
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 text-2xl">
                <FaInstagram />
              </div>
         
                      </div>
                    </div>
                    </div>
                    
                </div>


            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
              <div className='p-4'>
                <form>
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2 '>Name</label>
                      <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type='text'/>
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2 '>Phone Number</label>
                      <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type='text'/>
                    </div>
                    
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 '>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type='email'/>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 '>Password</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type='password'/>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2 '>Password</label>
                    <textarea className='border-2 rounded-lg-3 border-gray-400 ' rows='10' ></textarea>
                  </div>
                  <button className='w-full p-4 text-gray-200 mt-4 bg-blue-700 rounded-xl'>Submit</button>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page1
