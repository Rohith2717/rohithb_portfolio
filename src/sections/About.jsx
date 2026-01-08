import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                    I am a motivated AI & Data Science undergraduate with hands-on experience in building AI-driven applications, machine learning systems, and intelligent automation solutions.
                    <br /><br />
                    My passion lies in solving real-world problems using <span className="text-blue-600 dark:text-blue-400 font-semibold">Computer Vision, NLP, Generative AI</span>, and scalable web technologies. I am constantly exploring new technologies to build impactful products.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Education
                    </h2>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">B.Tech in Artificial Intelligence and Data Science</h3>
                                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Sri Ramakrishna Engineering College</p>
                            </div>
                            <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400 font-medium text-right">
                                <div className="text-xl font-bold text-gray-900 dark:text-white">CGPA: 6.88 / 10</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
