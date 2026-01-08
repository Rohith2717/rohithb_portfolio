import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const Achievements = () => {
    const certifications = [
        "AWS Certified",
        "Retrieval Augmented Generation with LangChain",
        "Introduction to OpenAI GPT Models",
        "Generative AI Unleashing",
        "Computer Vision 101",
        "Journey to Cloud"
    ];

    return (
        <section id="achievements" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                {/* Hackathon Wins */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <Award className="text-yellow-500" size={32} /> Achievements
                    </h2>
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 p-8 rounded-2xl border border-yellow-100 dark:border-yellow-900/30">
                        <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-500 mb-2">2nd Place</div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">AVINYA'25 Hackathon</div>
                        <div className="text-gray-600 dark:text-gray-400">MVJ College of Engineering, Bangalore</div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            Secured 2nd place and a prize of ₹10,000 for building an Automated Cyber Triage System in a 30-hour nonstop hackathon.
                        </p>
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <CheckCircle className="text-green-500" size={32} /> Certifications
                    </h2>
                    <div className="grid gap-4">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <span className="text-gray-700 dark:text-gray-200 font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
