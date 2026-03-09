import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const Icon = project.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-dark-neutral-800/50 border border-dark-neutral-700/50 rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300 hover:border-dark-neutral-600 flex flex-col h-full"
        >
            <div className="w-12 h-12 rounded-lg bg-dark-neutral-900 flex items-center justify-center mb-5 border border-dark-neutral-800 text-accent-teal">
                {Icon && <Icon className="w-6 h-6" />}
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-100">
                {project.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-dark-neutral-900 border border-dark-neutral-700 text-gray-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {project.link && (
                <div className="mt-5 pt-5 border-t border-dark-neutral-700/50">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-accent-blue hover:text-blue-400 transition-colors"
                    >
                        View Project <ExternalLink className="ml-1.5 w-4 h-4" />
                    </a>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectCard;
