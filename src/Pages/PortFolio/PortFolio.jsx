import React from 'react'
import cardImg from '../../assets/Frame 7.png'
import CardCom from '../../Component/Card/cardCom'

const portfolioData = Array(8).fill({
    title: 'Chaintech Product',
    image: cardImg,
    tags: ['UX Design', 'Angular', 'JavaScript'],
})

export default function PortFolio() {
    return (
        <div className='container pt-15'>
            <h1 className='text-white !text-[52px] !font-bold !mb-6'>PORTFOLIO</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    portfolioData.map((item, index) => (
                        <CardCom key={index} {...item} />
                    ))
                }
            </div>
        </div>
    )
}