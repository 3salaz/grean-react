import React, {useState} from 'react'
import {motion} from 'framer-motion';

const icons = ["I", "B","C",'D'];

const MenuItem = ({item}) => {
    return(
        <motion.li className='top-0 left-0 w-full h-14 text-center relative grid place-items-center items-end p-1.5'>
          <motion.div className='h-12 pb-2.5 z-50 text-black'>{item}</motion.div>
          <motion.div className='backdrop absolute left-0 bottom-0 right-0 w-full bg-red-300 h-full'/>
        </motion.li>
    )
}
function BottomNav() {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <motion.ul className='fixed bottom-0 flex items-center w-full list-none text-black'>
      {icons.map(
        ({icon}) => {
        return <MenuItem item={icon} key={icon}/>
        })
      }
    </motion.ul>
  )
}

export default BottomNav