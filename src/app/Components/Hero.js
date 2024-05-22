import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='flex flex-col items-left w-full h-full top-[90px] py-[64px] px-[144px]'>
        <div>
            <div className='w-full h-fit flex flex-col justify-center items-center'>
                <img src="./images/HeroSection/DIN.png" className='w-[403px] h-[107px]'/>
            </div>
            <div className='absolute right-0 top-[170px] w-[750px] h-[750px] flex flex-col items-end object-cover'>
                <div className='w-full h-full relative ' style={{overflow:"hidden"}}>
                    <img src="./images/HeroSection/outer_circle.png" className='absolute left-[43%] animate-spin-reverse'/>
                    <img src="./images/HeroSection/inner_image.png" className='absolute left-[43%]'/>
                    <div className='absolute left-[43%] w-[50%] h-[50%] bg-orange-600 make-blur'></div>
                </div>
            </div>

            <div className='flex flex-col h-[548px] w-full'>
                <h2 className="w-[570.97px] font-semibold text-[60px] leading-[60px] pt-24">
                    P2P trading
                    protocol on lighting
                    network for trading <span className='gradient-text'>RUNES</span>
                </h2>
                <div className='flex flex-row gap-[32px] mt-[40px]'>
                    <button className='bg-white text-black py-[18px] px-[65.92px] text-[14px] font-medium rounded-[16px]'>Whitepaper</button>
                    <button className='bg-black text-white rounded-[16px] py-[18px] px-[72.97px] border border-white text-[14px]'>Enter App</button>
                </div>
                <div className='pt-[40px] flex flex-row items-center justify-start gap-[24px]'>
                    <div className='flex flex-row gap-[12px] items-center justify-center'>
                        <img src="./images/HeroSection/Icons/Lightning.png" className='w-[32px]'/>
                        <p>Lightning Network</p>
                    </div>
                    <div className='flex flex-row gap-[12px] items-center justify-center'>
                        <img src="./images/HeroSection/Icons/Bitcoin.png" className='w-[32px]'/>
                        <p>Bitcoin</p>
                    </div>
                    <div className='flex flex-row gap-[12px] items-center justify-center'>
                        <img src="./images/HeroSection/Icons/Runes.png" className='w-[32px]'/>
                        <p>Runes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
