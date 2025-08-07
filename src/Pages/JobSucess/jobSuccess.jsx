import React from 'react'
import sunImage from '../../assets/Dawn.svg'

const jobContent = [
    {
        number: '90%',
        text: 'Job Success Score on Upwork',
        icon: true, // show image at end
    },
    {
        number: '>25.000',
        text: 'Duplicates on Figma Community',
        icon: false,
    },
    {
        number: '>2k',
        text: 'In Finished Works',
        icon: true, // show image at start
    }
]

export default function JobSuccess() {
    return (
        <div className='container border-2 border-[#646464] rounded-[29px] bg-[#0B0B0B] mt-[20px]'>
            <div className='grid grid-cols-1 md:grid-cols-3  md:text-left place-items-center py-[50px] px-[20px] md:px-[50px] text-[#C8FEC7] gap-y-10'>

                {
                    jobContent.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-5 p-4 ${index === 1 ? 'flex-col md:flex-col text-start !ps-[60px] md:text-left' : 'flex-row'}`}
                        >
                            {/* Image (for 3rd block it's at start, 1st at end) */}
                            {
                                index === 2 && (
                                    <img src={sunImage} alt="sun" className='w-[100px] h-[60px]' />
                                )
                            }

                            <div>
                                <h1 className='!text-[70px] md:text-[100px] font-bold leading-none'>{item.number}</h1>
                                <p className='!text-[27px] md:text-[34px] font-semibold leading-tight'>{item.text}</p>
                            </div>

                            {
                                index === 0 && (
                                    <img src={sunImage} alt="sun" className='w-[100px] h-[59px]' />
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}