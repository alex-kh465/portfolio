import { motion } from 'framer-motion';

const SkillTag = ({ skill, delay = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            className="px-4 py-2 bg-dark-neutral-800/80 border border-dark-neutral-700 rounded-full text-sm font-medium text-gray-200 hover:bg-dark-neutral-700 hover:border-dark-neutral-600 hover:text-white transition-all cursor-default shadow-sm"
        >
            {skill}
        </motion.span>
    );
};

export default SkillTag;
