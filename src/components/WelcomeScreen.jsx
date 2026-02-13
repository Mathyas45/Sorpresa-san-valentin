import { motion } from 'framer-motion';

const WelcomeScreen = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
            >
                {/* Animated heart icon */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-8xl mb-8"
                >
                    💝
                </motion.div>

                {/* Main message */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4"
                >
                    Tengo algo que preguntarte...
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-romantic-purple/80 text-lg mb-12 font-light"
                >
                    Preparé algo especial para ti
                </motion.p>

                {/* Open button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 107, 157, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="glass px-12 py-4 rounded-full text-romantic-red font-semibold text-lg shadow-soft hover:shadow-glow transition-all duration-300"
                >
                    Abrir 💌
                </motion.button>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-10 text-4xl opacity-60"
            >
                🌸
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                className="absolute top-32 right-12 text-4xl opacity-60"
            >
                🌹
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -25, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute bottom-32 left-16 text-4xl opacity-60"
            >
                🌷
            </motion.div>
        </div>
    );
};

export default WelcomeScreen;
