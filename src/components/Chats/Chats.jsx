import React from 'react'
import {motion} from "framer-motion"
const Chats = () => {
  return (
    <motion.div
    initial={{
      opacity: 0,
    }}
    transition={{
      duration: 0.5,
    }}
    whileInView={{
      opacity: 1,
    }}
    >
      <h1 style={{color:"black"}}>Chats</h1>
    </motion.div>
  )
}

export default Chats
