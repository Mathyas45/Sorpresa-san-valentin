import { motion } from 'framer-motion';
import { useState } from 'react';

const LetterScreen = ({ onNext }) => {
    const [isOpen, setIsOpen] = useState(false);

    const photos = [
        { emoji: '🍔', caption: 'Nuestras comidas' },
        { emoji: '🚗', caption: 'Nuestras salidas' },
        { emoji: '😠', caption: 'Nuestras peleas' },
        { emoji: '👩‍❤️‍👨', caption: 'Y todo juntos' }
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] px-4 py-8">
            {!isOpen ? (
                // Envelope closed
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass p-8 rounded-3xl shadow-soft w-80 h-64 flex items-center justify-center"
                    >
                        <div className="text-center">
                            <div className="text-6xl mb-4">💌</div>
                            <p className="text-romantic-purple font-display font-semibold">
                                Para mi Cuya y los cachetitos (abre la carta) 💕
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            ) : (
                // Letter opened
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass p-6 rounded-3xl shadow-soft max-w-md w-full max-h-[85vh] overflow-y-auto"
                >
                    {/* Letter header */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-6"
                    >
                        <h2 className="text-2xl font-display font-bold text-gradient mb-2">
                            Hola Cuya 💕
                        </h2>
                    </motion.div>

                    {/* Photo carousel */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 gap-3 mb-6"
                    >
                        {photos.map((photo, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                                className="glass p-4 rounded-2xl text-center"
                            >
                                <div className="text-5xl mb-2">{photo.emoji}</div>
                                <p className="text-xs text-romantic-purple/80 font-medium">
                                    {photo.caption}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Romantic text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="space-y-4 text-center mb-6"
                    >
                        <p className="text-gray-700 leading-relaxed font-medium">
                            Aunque estemos lejos este 14 y todos los días, quiero esta junto con mis cachetitos.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Cada momento juntos, nuestras comidas, salidas e incluso nuestras peleas, hacen que todo valga la pena.
                        </p>
                    </motion.div>

                    {/* The question */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="bg-gradient-to-r from-romantic-red/10 to-romantic-purple/10 p-6 rounded-2xl mb-6"
                    >
                        <p className="text-center text-xl font-display font-bold text-gradient">
                            ¿Quieres ser mi San Valentín este 14 de febrero? 💝
                        </p>
                    </motion.div>

                    {/* Continue button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onNext}
                        className="w-full bg-gradient-to-r from-romantic-red to-romantic-purple text-white py-3 rounded-full font-semibold shadow-soft hover:shadow-glow transition-all duration-300"
                    >
                        Responder →
                    </motion.button>
                </motion.div>
            )}
        </div>
    );
};

export default LetterScreen;
