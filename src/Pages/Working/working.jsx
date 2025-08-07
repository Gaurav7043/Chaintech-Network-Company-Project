import React from 'react'
import bgImg from '../../assets/bgImg.jpg'
import ShieldImg from '../../assets/Shield 1.svg'

export default function Working() {
    return (
        <div className="mt-[100px] py-[80px] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='w-[60%] text-center text-white flex flex-wrap justify-center items-center m-auto gap-[30px]'>
                <h1 className='!text-[48px] font-[600]'>Kaleb Lechtenberg</h1>
                <p className='!text-[33px]'>
                    "Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."
                </p>
                <img src={ShieldImg} alt="" />
            </div>
        </div>
    )
}