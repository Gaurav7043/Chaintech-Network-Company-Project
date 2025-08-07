import React from 'react'
import PrimaryButton from '../Button/button'

export default function CardCom({ image, title, tags }) {
    return (
        <div className='p-4 border border-[#737373] rounded-[10px]'>
            <img src={image} alt={title} className='w-full h-auto' />
            <div className='text-white'>
                <p className='text-[20px] font-[700] pt-3 cursor-pointer hover:text-[#784DC7]'>{title}</p>
                <div className='flex gap-1.5 mb-4'>
                    {
                        tags.map((tag, i) => (
                            <PrimaryButton
                                key={i}
                                label={tag}
                                className='text-[#784DC7] bg-[#E9DFFC] !rounded-[12px] !text-[13px] px-[8px] py-[4px] hover:bg-[#784DC7] hover:text-[#E9DFFC] transition-all duration-200'
                            />
                        ))
                    }
                </div>
                <PrimaryButton
                    label='View Product detail'
                    className='h-[40px] bg-[#292929] text-[16px] font-[400] w-full hover:bg-[#212020] transition-all duration-200'
                />
            </div>
        </div>
    )
}