import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full backdrop-blur-md bg-dark-neutral-900/80 border-b border-dark-neutral-800"
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="font-bold text-xl tracking-tight text-white">
                    CodeWalnut<span className="text-accent-blue">.ML</span>
                </div>
                <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
                    <a href="#about" className="hover:text-white transition-colors">About</a>
                    <a href="#publications" className="hover:text-white transition-colors">Research</a>
                    <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
