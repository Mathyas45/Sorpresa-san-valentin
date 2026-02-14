import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SuccessScreen = () => {
    const [flowers, setFlowers] = useState([]);

    // WhatsApp configuration - user can customize this
    const whatsappNumber = '51931038431'; // Replace with actual number
    const whatsappMessage = encodeURIComponent(
        '¡Hola! ¡Acepto ser tu San Valentín este 14 de febrero! 💕'
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    useEffect(() => {
        // Generate flower rain
        const flowerEmojis = ['🌸', '🌹', '🌷', '💐', '🌺', '🏵️'];
        const newFlowers = [];

        for (let i = 0; i < 50; i++) {
            newFlowers.push({
                id: i,
                emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
                left: Math.random() * 100,
                delay: Math.random() * 2,
                duration: 3 + Math.random() * 2,
                size: 2 + Math.random() * 2
            });
        }

        setFlowers(newFlowers);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 relative overflow-hidden">
            {/* Flower rain animation */}
            {flowers.map((flower) => (
                <motion.div
                    key={flower.id}
                    initial={{ y: -100, opacity: 0, rotate: 0 }}
                    animate={{
                        y: window.innerHeight + 100,
                        opacity: [0, 1, 1, 0],
                        rotate: 360
                    }}
                    transition={{
                        duration: flower.duration,
                        delay: flower.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${flower.left}%`,
                        fontSize: `${flower.size}rem`
                    }}
                >
                    {flower.emoji}
                </motion.div>
            ))}

            {/* Success content */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3
                }}
                className="glass p-8 rounded-3xl shadow-glow text-center z-10 max-w-md"
            >
                {/* Celebration icon */}
                <motion.div
                    animate={{
                        rotate: [0, 10, -10, 10, 0],
                        scale: [1, 1.2, 1, 1.2, 1]
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                    className="text-8xl mb-6"
                >
                    🎉
                </motion.div>

                {/* Success message */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-display font-bold text-gradient mb-4"
                >
                    ¡Sabía que dirías que sí! 💕
                </motion.h1>
                 <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-display font-bold text-gradient mb-4"
                >
                    Te amo mucho mi bebe linda🐷

                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-romantic-purple text-lg mb-6"
                >
                    Nos vemos el
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                    className="bg-gradient-to-r from-romantic-red/20 to-romantic-purple/20 p-6 rounded-2xl mb-8"
                >
                    <p className="text-3xl font-bold text-gradient">
                        14 de Febrero
                    </p>
                    <p className="text-romantic-purple/80 mt-2">
                        San Valentín 2026
                    </p>
                </motion.div>

                {/* WhatsApp button */}
                <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-soft hover:shadow-glow transition-all duration-300"
                >
                    <span className="text-2xl">💬</span>
                    Avísame por WhatsApp
                </motion.a>

                {/* Extra hearts */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="mt-8 text-4xl"
                >
                    💕 💖 💗
                </motion.div>
            </motion.div>

            {/* Background celebration elements */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
                className="absolute inset-0 bg-gradient-to-br from-romantic-red/10 via-romantic-purple/10 to-pastel-pink/10 pointer-events-none"
            />
        </div>
    );
};

export default SuccessScreen;
