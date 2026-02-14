import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const QuestionScreen = ({ onYes }) => {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [noButtonKey, setNoButtonKey] = useState(0);
    const [attempts, setAttempts] = useState(0);

    const messages = [
        "¿Estás segura? 🥺",
        "¿De verdad? 😢",
        "Piénsalo bien... 💔",
        "¡No puedes decir que no! 😭",
        "¡Vamos, di que sí! 🙏"
    ];

    const moveNoButton = () => {
        // Get viewport dimensions
        const maxX = window.innerWidth - 200; // button width
        const maxY = window.innerHeight - 200; // button height

        // Generate random position
        const newX = Math.random() * maxX - maxX / 2;
        const newY = Math.random() * maxY - maxY / 2;

        setNoButtonPosition({ x: newX, y: newY });
        setNoButtonKey(prev => prev + 1);
        setAttempts(prev => prev + 1);
    };

    const handleNoHover = () => {
        moveNoButton();
    };

    const handleNoTouch = (e) => {
        e.preventDefault();
        moveNoButton();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 z-10"
            >
                {/* Question */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-6"
                >
                    💝
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
                    ¿Bebita Quieres ser mi San Valentín?
                </h2>

                <p className="text-romantic-purple/80 text-lg mb-2">
                    14 de febrero de 2026
                </p>

                {attempts > 0 && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-romantic-red font-semibold mt-4"
                    >
                        {messages[Math.min(attempts - 1, messages.length - 1)]}
                    </motion.p>
                )}
            </motion.div>

            {/* Buttons container */}
            <div className="flex flex-col gap-4 items-center z-10">
                {/* YES button - gets bigger with attempts */}
                <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: 1 + (attempts * 0.1),
                        opacity: 1
                    }}
                    whileHover={{ scale: (1 + (attempts * 0.1)) * 1.05 }}
                    whileTap={{ scale: (1 + (attempts * 0.1)) * 0.95 }}
                    onClick={onYes}
                    className="bg-gradient-to-r from-romantic-red to-romantic-purple text-white px-16 py-5 rounded-full font-bold text-2xl shadow-glow hover:shadow-[0_0_50px_rgba(255,107,157,0.6)] transition-all duration-300"
                >
                    ¡SÍ! 💕
                </motion.button>

                {/* NO button - escapes on hover/touch */}
                <motion.button
                    key={noButtonKey}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        x: noButtonPosition.x,
                        y: noButtonPosition.y
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                    }}
                    onMouseEnter={handleNoHover}
                    onTouchStart={handleNoTouch}
                    className="glass px-8 py-3 rounded-full font-semibold text-gray-600 shadow-soft cursor-pointer select-none absolute"
                    style={{
                        touchAction: 'none',
                        position: noButtonPosition.x === 0 && noButtonPosition.y === 0 ? 'relative' : 'absolute'
                    }}
                >
                    No
                </motion.button>
            </div>

            {/* Decorative floating hearts */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                    className="absolute text-4xl pointer-events-none"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                >
                    {['💕', '💖', '💗', '💝', '💘', '💞'][i]}
                </motion.div>
            ))}
        </div>
    );
};

export default QuestionScreen;
