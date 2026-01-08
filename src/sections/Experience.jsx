import { motion } from "framer-motion";

const Experience = () => {
    const experiences = [
        {
            company: "PrivacyWeave Technologies",
            role: "AI/ML Intern",
            period: "December 2025",
            description: "Worked on advanced machine learning models for data privacy and security applications with large datas."
        },
        {
            company: "Vibrace Technologies",
            role: "Web Developer Intern",
            period: "June 2025",
            description: "Developed this responsive personal portfolio website and contributed to frontend optimization."
        },
        {
            company: "Infotact Soltuions (Present, Remote)",
            role: "ML & DS Intern",
            period: "Dec 2025 to Feb 2026",
            description: "Working on advanced Machine Learning projects."
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
                >
                    Professional Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-blue-500/30 dark:border-blue-500/50"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-gray-900"></div>
                            <div className="mb-1 text-sm text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
                                {exp.period}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {exp.role}
                            </h3>
                            <div className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-3">
                                {exp.company}
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
