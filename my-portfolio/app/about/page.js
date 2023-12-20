import React from 'react'
import Navbar from '@/components/Navbar'


const about = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full md:h-screen flex item-center py-16'>
        <div className='max-w[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2 p-16'>
            <p className='text-red-600 text-4xl text'>About</p>
            <h2 className='font-bold text-4xl py-4'>My name is Oeur Lyheng.</h2>
            <p className='py-2'>Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.</p>
          </div>
          <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex item-center justify-center p-4 hover:scale-105 ease-in duration-300'>
             <img src='https://scontent.fpnh1-1.fna.fbcdn.net/v/t39.30808-6/411395570_2129314864087527_8222600695498932781_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGKHDhpCcgT10A3r9CGujXzNYv1nP-0HHk1i_Wc_7Qcee6Xb-zRjY1dtGOfqxSZYWJirnOSlfU5HOucge9qdSqR&_nc_ohc=t0L7X8Iu4v4AX-2nnSL&_nc_ht=scontent.fpnh1-1.fna&oh=00_AfD76S2rBsQ-5MLh0XRI0ncrlNQTy3vHUMMYZumO8Z3ssw&oe=658835BD' />
         </div>
        </div>
      </div>
    </div>
  )
}

export default about
