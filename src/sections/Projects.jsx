import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border ${project.highlight ? 'border-blue-500/50 dark:border-blue-400/50 ring-1 ring-blue-500/20' : 'border-gray-100 dark:border-gray-800'}`}
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.tag && (
                                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap">
                                            {project.tag}
                                        </span>
                                    )}
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-1">
                                    {project.pitched}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <a href={project.github} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 text-sm font-medium transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.link} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 text-sm font-medium transition-colors">
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
