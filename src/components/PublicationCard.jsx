import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PublicationCard = ({ publication, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-dark-neutral-800/50 border border-dark-neutral-700/50 rounded-xl p-6 hover:bg-dark-neutral-800 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/5 group"
        >
            <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-accent-blue transition-colors">
                {publication.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {publication.description}
            </p>
            {publication.link && (
                <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent-blue hover:text-blue-400 transition-colors"
                >
                    Read Publication <ExternalLink className="ml-1.5 w-4 h-4" />
                </a>
            )}
        </motion.div>
    );
};

export default PublicationCard;
