import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <header className="bg-white shadow sticky top-0">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center">

                    <div className="font-bold">HOME RENOVATION</div>


                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <Link className="text-blue-900 hover:text-blue-700" to={"/home"}>Home</Link>
                    <Link className="text-blue-900 hover:text-blue-700" to={"/homeitwork"}>Howitwork</Link>
                    <Link className="text-blue-900 hover:text-blue-700" to={"/services"}>Service</Link>
                    <Link className="text-blue-900 hover:text-blue-700" to={"/contactUs"}>ContactUs</Link>

                </div>
                <div className="hidden md:flex items-center space-x-2">

                    <Link className="bg-blue-100 text-blue-900 px-4 py-2 rounded  hover:bg-blue-600 hover:text-blue-100" to={"/login"}>Login</Link>
                    <Link className="bg-blue-900 text-blue-100 px-4 py-2 rounded  hover:bg-blue-100 hover:text-blue-600" to={"/sigup"}>Signup</Link>

                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900 focus:outline-none">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'slide-in' : 'slide-out'}`}>
                {isOpen && (
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <Link className="text-blue-900 hover:text-blue-700" to={"/home"}>Home</Link>
                        <Link className="text-blue-900 hover:text-blue-700" to={"/homeitwork"}>Howitwork</Link>
                        <Link className="text-blue-900 hover:text-blue-700" to={"/services"}>Service</Link>
                        <Link className="text-blue-900 hover:text-blue-700" to={"/contactUs"}>ContactUs</Link>
                        <Link className="bg-blue-100 text-blue-900 px-4 py-2 rounded  hover:bg-blue-600 hover:text-blue-100" to={"/login"}>Login</Link>
                        <Link className="bg-blue-900 text-blue-100 px-4 py-2 rounded  hover:bg-blue-100 hover:text-blue-600" to={"/sigup"}>Register</Link>
                    </nav>
                )}
            </div>
        </header >

    )
}
export default Navbar
