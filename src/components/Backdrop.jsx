import {motion} from 'framer-motion'

function Backdrop({children,onClick}) {
  return (
    <motion.div
    className='absolute top-0 left-0 h-screen w-full bg-black bg-opacity-25 flex items-center justify-center z-100'
    onClick={onClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        {children}
    </motion.div>
  )
}

export default Backdrop