import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Me from "../assets/ME.jpeg";
import Resume from "../assets/Resume.pdf";

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
                        Start Creating With
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6 leading-tight">
                        <span className="block text-gray-900 dark:text-gray-100">Rohith.B</span>
                        <span className="block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Aspiring AI & Data Science Engineering Student
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Building intelligent systems with Machine Learning, Generative AI, and modern web technologies. Transforming data into impactful solutions.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <Link to="/projects" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center transition-all shadow-lg hover:shadow-blue-500/30">
                            View Projects <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <a href={Resume} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center">
                            View Resume <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/rohith-b-637697300" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/Rohith2717" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <Github size={24} />
                        </a>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                        <div className="relative z-10 w-full h-full bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-700">
                            <img src={Me} alt="Rohith B" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
