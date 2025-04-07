import React from "react";
import { Link } from 'react-router-dom';

function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Navbar */}
            <header className="bg-black py-4 sticky top-0 z-50">
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Logo as Home Button */}
                    <Link to="/" className="flex items-center px-4">
                        <img src="/logo.png" alt="Realm Fitness Logo" className="h-15 w-auto" />
                    </Link>
                    <nav className="hidden lg:flex flex-1  justify-end space-x-4 text-white text-lg font-semibold">
                        <Link to="/about" className="cursor-pointer hover:text-[#C6962C] p-2">About Us</Link>
                        <Link to="/contact" className="cursor-pointer hover:text-[#C6962C] p-2">Contact Us</Link>
                        <Link to="/memberships" className="bg-[#C6962C] rounded-3xl p-2">Memberships</Link>
                    </nav>
                    {/* Dropdown Menu for Smaller Screens */}
                    {isMenuOpen && (
                        <nav className="fixed top-20 left-0 w-full bg-black border-t border-[#C6962C] lg:hidden">
                            <ul className="flex flex-col items-center space-y-2 py-4 text-white">
                                <Link to="/about" className="cursor-pointer hover:text-[#C6962C] p-2">About Us</Link>
                                <Link to="/contact" className="cursor-pointer hover:text-[#C6962C] p-2">Contact Us</Link>
                                <Link to="/memberships" className="bg-[#C6962C] rounded-3xl p-2">Memberships</Link>
                            </ul>
                        </nav>
                    )}
                    {/* Hamburger Menu Button */}
                    <button
                        className="text-[#C6962C] lg:hidden justify-end px-4"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-8 h-8"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </button>
                </div>
            </header>
            {/* Main Content */}
            <main className="flex-grow">{children}</main>
            <footer className="bg-black py-4">
                <div className="container mx-auto border-t-4 rounded-sm border-[#C6962C] py-8 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between gap-8 text-center sm:text-left">
                    <div className="flex-1">
                        <img src="/the_realmkelowna.png" alt="Realm Fitness Kelowna Logo" className="h-15 w-auto" />
                        <p className="text-md"><strong>1284448 B.C. Ltd</strong><br />201-2544 Enterprise Way,<br />Kelowna, BC V1X 7X5</p>
                        <p className="mt-2 text-[#C6962C]">info@therealmfitnesskelowna.com</p>
                    </div>
                    <div className="flex-1">
                        <img src="/the_realmog.png" alt="Realm Fitness Logo" className="h-15 w-auto" />
                        <p className="text-md mt-8"><strong>2640964 Alberta Ltd</strong><br />1390 17 Ave SE,<br />Calgary, AB T2G 5J3</p>
                        <p className="mt-2"><a href="https://therealmfitness.com" className="text-[#C6962C] hover:text-white transition duration-300">therealmfitness.com</a></p>
                    </div>
                    <div className="flex-1 text-center">
                        <p className="mb-2 font-semibold text-[#C6962C] text-xl">Follow Us</p>
                        <div className="flex justify-center space-x-4">
                            <a href="https://www.instagram.com/therealmfitnesskelowna" target="_blank" rel="noopener noreferrer">
                                <img src="/instagram.png" alt="Instagram" className="h-12 w-12 hover:scale-110 transition" />
                            </a>
                            <a href="https://www.tiktok.com/@therealmfitnesskelowna" target="_blank" rel="noopener noreferrer">
                                <img src="/Tiktok.png" alt="TikTok" className="h-12 w-12 hover:scale-110 transition" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-4 text-center text-sm text-[#C6962C]">
                    <Link to="/accessibility" className="mx-2 hover:text-white transition duration-300">Accessibility Statement</Link> |
                    <Link to="/privacy" className="mx-2 hover:text-white transition duration-300">Privacy Policy</Link> |
                    <Link to="/terms" className="mx-2 hover:text-white transition duration-300">Terms of Service</Link>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
