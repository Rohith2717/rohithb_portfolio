import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Skills", href: "/skills" },
        { title: "Experience", href: "/experience" },
        { title: "Projects", href: "/projects" },
        { title: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md transition-colors duration-300 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 h-16 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Rohith.B
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.title}
                            to={item.href}
                            className={({ isActive }) => `font-medium transition-colors ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}
                        >
                            {item.title}
                        </NavLink>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 dark:text-gray-200 focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {menuItems.map((item) => (
                                <NavLink
                                    key={item.title}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => `font-medium text-lg ${isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
