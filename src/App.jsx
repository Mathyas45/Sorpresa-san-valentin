import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import LetterScreen from './components/LetterScreen';
import QuestionScreen from './components/QuestionScreen';
import SuccessScreen from './components/SuccessScreen';

function App() {
    const [currentScreen, setCurrentScreen] = useState('welcome');

    const pageVariants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 }
    };

    const pageTransition = {
        duration: 0.5,
        ease: "easeInOut"
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
            <AnimatePresence mode="wait">
                {currentScreen === 'welcome' && (
                    <motion.div
                        key="welcome"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                        className="w-full max-w-md"
                    >
                        <WelcomeScreen onNext={() => setCurrentScreen('letter')} />
                    </motion.div>
                )}

                {currentScreen === 'letter' && (
                    <motion.div
                        key="letter"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                        className="w-full max-w-md"
                    >
                        <LetterScreen onNext={() => setCurrentScreen('question')} />
                    </motion.div>
                )}

                {currentScreen === 'question' && (
                    <motion.div
                        key="question"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                        className="w-full max-w-md"
                    >
                        <QuestionScreen onYes={() => setCurrentScreen('success')} />
                    </motion.div>
                )}

                {currentScreen === 'success' && (
                    <motion.div
                        key="success"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={pageTransition}
                        className="w-full max-w-md"
                    >
                        <SuccessScreen />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
