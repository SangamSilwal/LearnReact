import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link 
                            to="/" 
                            className="text-white text-2xl font-bold tracking-tight hover:text-indigo-200 transition duration-300"
                        >
                            <span className="bg-white text-indigo-600 px-2 py-1 rounded mr-1">My</span>Site
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link 
                                to="/" 
                                className="text-white hover:bg-indigo-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                            >
                                Home
                            </Link>
                            <Link 
                                to="/about" 
                                className="text-white hover:bg-indigo-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                            >
                                About
                            </Link>
                            <Link 
                                to="/product" 
                                className="text-white hover:bg-indigo-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                            >
                                Products
                            </Link>
                            <Link 
                                to="/contact" 
                                className="text-white bg-indigo-800 bg-opacity-60 px-3 py-2 rounded-md text-sm font-medium hover:bg-opacity-100 transition duration-300"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-700 focus:outline-none transition duration-300"
                            aria-expanded="false"
                        >
                            {isOpen ? (
                                <FaTimes className="h-6 w-6" />
                            ) : (
                                <FaBars className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-indigo-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link 
                            to="/" 
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            to="/product" 
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Products
                        </Link>
                        <Link 
                            to="/contact" 
                            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-600 transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export { NavBar };