import React from 'react'
import Logo from '../assets/Logo_png.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto font-mono absolute top-0 left-0 right-0 z-20">
            <img className='h-20' src={Logo} alt="Logo" />

            {/* nav items */}
            <div className="hidden md:flex gap-8 text-gray-300 text-lg font-medium items-center">
                <Link to="/" className="hover:text-teal-300 transition">Home</Link>
                <Link to="/about" className="hover:text-teal-300 transition">About</Link>
                <Link to="/blog" className="hover:text-teal-300 transition">Blog</Link>
                <Link to="/contact" className="hover:text-teal-300 transition">Contact</Link>

                {/* login link */}
                <a
                    href="#"
                    className="bg-teal-500 text-white rounded-full px-6 py-2 hover:bg-white hover:text-teal-600 transition"
                >
                    Log in →
                </a>
            </div>
        </nav>
    )
}

export default NavBar
