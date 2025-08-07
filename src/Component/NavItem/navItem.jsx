import React from 'react'

export default function NavItem({ label, onClick }) {
    return (
        <li
            onClick={onClick}
            className="hover:text-[#925ff0] cursor-pointer transition"
        >
            {label}
        </li>
    )
}