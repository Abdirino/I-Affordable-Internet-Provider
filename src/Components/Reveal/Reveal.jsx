import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children }) => {

    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

  return (
    <div
      ref={ref} style={{ position: "relative", overflow: "hidden", width: "fit-content" }}
    >
      <motion.div
        variants={{
            hidden: {opacity: 0, y: 69, filter: "blur(3)"},
            visible: {opacity: 1, y: 0, filter: "blur(0)"}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.6, delay: 0.1}}
      >{children}</motion.div>
    </div>
  );
};

export default Reveal;
