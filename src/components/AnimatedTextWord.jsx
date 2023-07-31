import { motion } from 'framer-motion'

function AnimatedTextWord({text}) {
    const words = text.split("")
    const container = {
        hidden: {opacity: 0},
        visible: (i=1) => ({
            opacity: 1,
            transition: {staggerChildren:0.12, delayChildren:0.4 * i}
        })
    };
    const child = {
        visible : {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        },
        hidden : {
            opacity: 0,
            y: 0,
            x: -20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            }
        }
    }
  return (
    <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className='z-10 overflow-hidden flex items-center justify-center text-5xl md:text-6xl font-bold font-fam text-grean drop-shadow-xl'>
        {words.map((word, index) => (
            <motion.span variants={child} className='mr-2.5' key={index}>
                {word}
            </motion.span>
        ))}
    </motion.div>
  )
}

export default AnimatedTextWord