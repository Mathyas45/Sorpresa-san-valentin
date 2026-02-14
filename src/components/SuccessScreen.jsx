import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import usImg from '../img/us.jpg';

const SuccessScreen = () => {
    const [flowers, setFlowers] = useState([]);
    const [showPhoto, setShowPhoto] = useState(false);

    // WhatsApp configuration - user can customize this
    const whatsappNumber = '51931038431'; // Replace with actual number
    const whatsappMessage = encodeURIComponent(
        '¡Hola gato hermoso! ¡Acepto ser tu San Valentín este 14 de febrero! 💕 y demas estar siempre contigo, juntos siempre con los cachetitos'
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
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 relative overflow-hidden">
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
                className="glass p-8 rounded-3xl shadow-glow text-center z-10 max-w-md w-full my-8"
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
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-soft hover:shadow-glow transition-all duration-300 mb-6"
                >
                    <span className="text-2xl">💬</span>
                    Avísame por WhatsApp
                </motion.a>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-display font-bold text-gradient mb-1 mt-4"
                >
                    Te amo mucho mi bebe linda🐷
                </motion.h1>

                {/* New Button for Photo */}
                <motion.button
                    onClick={() => setShowPhoto(!showPhoto)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-gradient-to-r from-romantic-red to-romantic-purple text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Quiero verte así siempre 📸
                </motion.button>

                {/* Framed Photo */}
                {showPhoto && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, height: 0 }}
                        animate={{ opacity: 1, scale: 1, height: 'auto' }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="mt-8 relative p-6 bg-white/50 rounded-lg shadow-xl"
                    >
                        {/* Floral Frame Decorations */}
                        <div className="absolute top-0 left-0 -mt-3 -ml-3 text-3xl">🌸</div>
                        <div className="absolute top-0 right-0 -mt-3 -mr-3 text-3xl">🌹</div>
                        <div className="absolute bottom-0 left-0 -mb-3 -ml-3 text-3xl">🌺</div>
                        <div className="absolute bottom-0 right-0 -mb-3 -mr-3 text-3xl">🌷</div>
                        <div className="absolute top-1/2 left-0 -ml-4 -translate-y-1/2 text-2xl">🌿</div>
                        <div className="absolute top-1/2 right-0 -mr-4 -translate-y-1/2 text-2xl">🌱</div>

                        <div className="relative z-10 overflow-hidden rounded-md border-4 border-white shadow-inner">
                            <img
                                src={usImg}
                                alt="Nosotros"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                )}

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
