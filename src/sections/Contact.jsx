import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white py-20 flex-grow">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center mb-16"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-sm">
                            I'm currently seeking opportunities in AI & Data Science engineering. detailed oriented and ready to contribute to impactful projects.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/rohith-b-637697300" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/Rohith2717" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-gray-800 rounded-xl text-blue-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <div className="text-gray-400 text-sm">Email</div>
                                <div className="text-lg font-medium">rohithbhojan@gmail.com</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-gray-800 rounded-xl text-green-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <div className="text-gray-400 text-sm">Phone</div>
                                <div className="text-lg font-medium">+91 90801 09768</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-gray-800 rounded-xl text-red-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <div className="text-gray-400 text-sm">Location</div>
                                <div className="text-lg font-medium">Coimbatore, India</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Rohith B. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Contact;
