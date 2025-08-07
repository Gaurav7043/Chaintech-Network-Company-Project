import React from 'react'

export default function PrimaryButton({ label, onClick, className = '', children }) {
    return (
        <button onClick={onClick} className={className}>
            {label}
            {children}
        </button>
    )
}