import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between items-center w-full py-[24px] px-[80px] h-[90px] sticky top-0 gap-8' style={{ background:"rgba(0, 0, 0, 0.5)", backdropFilter: "blur(6px)" }}>
        <div className='font-semibold text-base leading-6 '>
          ODIN Protocol
        </div>
        <div>
          <img src="./images/NavBar/NavPngImg.png" className='w-[221.69px] h-[14.44px]'/>
        </div>
        <div className='flex flex-row gap-8'>
          <p className=''>About Us</p>
          <p>Whitepaper</p>
        </div>
        <div>
          <img src="./images/NavBar/NavPngImg.png" className='w-[221.69px] h-[14.44px]' />
        </div>
        <div>
          <button className='py-[9px] px-[17px] bg-orange-500 rounded-[8px] cursor-pointer'>Open Dapp</button>
        </div>
    </div>
  )
}


export default NavBar
