import React from 'react'
import homeImage from '../../assets/homePage.jpg'
import textImage from '../../assets/text.png'
import mediaImage from '../../assets/Social Media Dark.png'
import arrowImage from '../../assets/arrow-down.svg'
import PrimaryButton from '../../Component/Button/button'

export default function HomePage() {
    return (
        <div className="container py-[50px]">
            <div className='flex gap-3'>
                <div className="flex-1">
                    <h1 className='!text-[150px] !font-extrabold m-0 !leading-[130px] text-white'>PRODUCT DESIGNER</h1>
                    <img src={textImage} alt="" className='mt-2' />
                    <div className='flex justify-center'>
                        <img src={mediaImage} alt="" className='mt-17 w-[370px] mb-[30px]' />
                    </div>
                    <PrimaryButton label="Download Curriculum Vitae" className="w-[90%] h-[52px] bg-[#292929] text-white flex items-center justify-center gap-1 hover:bg-[#212020] transition-all duration-200">
                        <img src={arrowImage} alt="Arrow" className="w-[16px] h-[16px]" />
                    </PrimaryButton>
                </div>
                <div className="hidden md:block flex-1">
                    <img src={homeImage} alt="" className='w-[561px] h-[535px] rounded-[10px]' />
                </div>
            </div>
        </div>
    )
}