import React from 'react';
import img from '../../assets/Ellipse 7.png';

const skill = [
    {
        title: 'UX Design',
        percentage: '97%',
        description: 'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
    },
    {
        title: 'UI Design',
        percentage: '97%',
        description: 'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
    },
    {
        title: 'UX Design',
        percentage: '97%',
        description: 'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
    },
    {
        title: 'UX Design',
        percentage: '97%',
        description: 'UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.',
    },
];

export default function Skills() {
    return (
        <div className="container pt-15">
            <h1 className="text-white !text-[52px] !font-[600] !mb-6">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    skill.map((item, index) => (
                        <div
                            key={index}
                            className="border border-[#737373] rounded-[10px] p-[32px] flex gap-[20px]"
                        >
                            <div className="relative">
                                <img src={img} alt={`${item.percentage} circle`} className="!w-[600px] !h-[100%] object-contain" />
                                {/* <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold"> */}
                                <h1 className="absolute !top-[50%] !left-[50%] transform !translate-x-[-50%] translate-y-[-50%]  text-white text-xl font-bold">
                                    {item.percentage}
                                </h1>
                            </div>
                            <div className="text-white">
                                <h2 className="!text-[28px] font-semibold !mb-2">{item.title}</h2>
                                <p className="!text-[16px] !font-[100] leading-[1.6]">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
