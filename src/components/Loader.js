import React from "react"
import { motion, useCycle } from "framer-motion"

const loaderVariants = {
  animation1: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        yoyo: Infinity,
      },
      y: {
        duration: 0.25,
        yoyo: Infinity,
        ease: "easeOut",
      },
    },
  },
  animation2: {
    y: [0, -40],
    x: 0,
    transition: {
      yoyo: Infinity,
      duration: 0.25,
      ease: "easeOut",
    },
  },
}

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animation1", "animation2") // default is the first value

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}> Change loader animation </div>
    </>
  )
}

export default Loader
