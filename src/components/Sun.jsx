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
      <div className="sun-face front" />
      <div className="sun-face back" />
      <div className="sun-face left" />
      <div className="sun-face right"/>
      <div className="sun-face top" />
      <div className="sun-face bottom" />
    </motion.div>
  );
}

export default Sun;