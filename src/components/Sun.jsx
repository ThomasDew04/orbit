import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

function Sun({ rotation }) {
  return (
    <motion.div
      className="sun"
      animate={{ rotateX: rotation.x, rotateY: rotation.y }}
      transition={{ type: "spring", stiffness: 100, damping: 25 }}
    >
      <div className="sun-face front">Front</div>
      <div className="sun-face back">Back</div>
      <div className="sun-face left">Left</div>
      <div className="sun-face right">Right</div>
      <div className="sun-face top">Top</div>
      <div className="sun-face bottom">Bottom</div>
    </motion.div>
  );
}

export default Sun;