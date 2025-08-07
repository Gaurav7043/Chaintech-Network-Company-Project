import React from 'react'
import sampleImg from '../../assets/homePage.jpg'
import rVector1 from '../../assets/Right Image/Vector 11.png'
import rVector2 from '../../assets/Right Image/Vector 12.png'
import rVector3 from '../../assets/Right Image/Vector 13.png'
import rVector4 from '../../assets/Right Image/Vector 14.png'
import rVector5 from '../../assets/Left Image/Vector 11.png'
import rVector6 from '../../assets/Left Image/Vector 12.png'
import rVector7 from '../../assets/Left Image/Vector 13.png'
import rVector8 from '../../assets/Left Image/Vector 14.png'

export default function Visit() {
    return (
        <div className="container bg-[#B083F9] flex items-center rounded-[20px] w-full max-w-6xl p-4 relative mt-[230px] mb-[50px]">
            {/* Left Image */}
            <div className="w-[232px] h-[271px] absolute top-[-146px] left-[35px] z-10">
                <img
                    src={sampleImg}
                    alt="Workstation"
                    className="w-full h-full object-cover rounded-[10px]"
                />
            </div>

            {/* Right Text */}
            <div className="p-4 text-white text-[16px] !w-[100%] flex flex-col !ps-[260px]">
                <p className='m-0'>
                    Thanks for visit my website
                </p>
                <p>
                    If you have any questions you can write me to any of my social networks, I am sure I will answer you.
                </p>
            </div>

            {/* Optional Background Decoration (Right Side Waves) */}
            <div>
                <img src={rVector1} alt="" className='absolute !top-[0px] !right-[0px]' />
                <img src={rVector2} alt="" className="absolute !top-[0px] !right-[0px]" />
                <img src={rVector3} alt="" className="absolute !top-[0px] !right-[0px]" />
                <img src={rVector4} alt="" className='absolute !top-[0px] !right-[0px]' />
                <img src={rVector5} alt="" className='absolute !left-[0px] !bottom-[0px]' />
                <img src={rVector6} alt="" className="absolute !left-[0px] !bottom-[0px]" />
                <img src={rVector7} alt="" className="absolute !left-[0px] !bottom-[0px]" />
                <img src={rVector8} alt="" className='absolute !left-[0px] !bottom-[0px]' />
            </div>
        </div>
    )
}
