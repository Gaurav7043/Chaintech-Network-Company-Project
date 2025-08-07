import React from 'react'
import logo from '../../assets/Group 1.png'
import logoText from '../../assets/tian.png'
import NavItem from '../../Component/NavItem/navItem'

export default function Nav() {
    const navItems = ['Home', 'Portfolio', 'Skills', 'About Me']

    return (
        <div className='border-b-1 border-[#E6E6E6]'>
            <div className="container pt-[20px] pb-[20px] text-white relative">
                <div className='flex items-center justify-between'>

                    {/* Logo */}
                    <div className="flex gap-[5px] items-center">
                        <img src={logo} alt="logo" className='w-[26.6px] h-[26.6px]' />
                        <img src={logoText} alt="logo text" className='h-[20px]' />
                    </div>

                    {/* Desktop Menu */}
                    <div className='flex items-center justify-center'>
                        <ul className='flex items-center justify-center gap-[30px] m-0 text-[18px] font-normal'>
                            {
                                navItems.map((item) => (
                                    <NavItem key={item} label={item} />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
