import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <h2 className="text-3xl font-bold tracking-tight text-white mb-3">{title}</h2>
            {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
            <div className="w-16 h-1 bg-accent-blue mt-6 rounded-full"></div>
        </motion.div>
    );
};

export default SectionTitle;
