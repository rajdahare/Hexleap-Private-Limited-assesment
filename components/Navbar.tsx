import React from 'react'
import ToggleMode from './ToggleMode'

const Navbar = () => {
    return (
        <nav className='flex flex-col items-center border-b py-5 bg-secondary'>
            <div className='flex justify-center max-w-6xl w-full'>
                <div className='flex items-center'>
                    <ToggleMode />
                </div>

            </div>
        </nav>
    )
}

export default Navbar