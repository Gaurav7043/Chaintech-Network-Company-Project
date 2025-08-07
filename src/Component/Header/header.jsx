import { useState } from 'react'
import logo from '../../assets/Group 1.png'
import logoText from '../../assets/tian.png'
import { FaBars } from 'react-icons/fa'
import NavItem from '../NavItem/navItem'
import PrimaryButton from '../Button/button'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)

    const navItems = ['Home', 'Portfolio', 'Skills', 'About Me']

    return (
        <div className="container pt-[20px] pb-[20px] text-white relative">
            <div className='flex items-center justify-between'>

                {/* Logo */}
                <div className="flex gap-[5px] items-center">
                    <img src={logo} alt="logo" className='w-[26.6px] h-[26.6px]' />
                    <img src={logoText} alt="logo text" className='h-[15px]' />
                </div>

                {/* Desktop Menu */}
                <div className='flex-1 hidden md:flex items-center justify-center'>
                    <ul className='flex items-center justify-center gap-[30px] m-0 text-[18px] font-normal'>
                        {
                            navItems.map((item) => (
                                <NavItem key={item} label={item} />
                            ))
                        }
                    </ul>
                </div>

                {/* Desktop Button */}
                <div className='hidden md:block'>
                    <PrimaryButton label="Contact Me" className="h-[40px] w-[141px] bg-[#925ff0] !rounded-[4px] text-white hover:bg-[#7a4de0] transition-all duration-200" />
                </div>

                {/* Hamburger Icon */}
                <div className='md:hidden'>
                    <FaBars onClick={toggleMenu} className="text-2xl cursor-pointer" />
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a1a] py-4 z-50">
                        <ul className='flex flex-col gap-3 text-[18px] font-normal m-0 p-0'>
                            {
                                navItems.map((item) => (
                                    <li
                                        key={item}
                                        className="hover:text-[#925ff0] active:text-[#925ff0] focus:text-[#925ff0] cursor-pointer transition border-b-2 border-white ps-4 pb-2"
                                    >
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='mt-4 mx-3'>
                            <PrimaryButton label="Contact Me" className="w-full h-[40px] bg-[#925ff0] !rounded-[4px] text-white hover:bg-[#7a4de0] transition-all duration-200" />
                        </div>
                    </div>
                )
            }
        </div>
    )
}