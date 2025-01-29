import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import "../styles.css";

function Sun() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMousePosition = useRef(null);

  const handleMouseDown = (event) => {
    isDragging.current = true;
    lastMousePosition.current = { x: event.clientX, y: event.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (event) => {
    if (!isDragging.current || !lastMousePosition.current) return;

    // Distance between current and previous mouse position
    const deltaX = event.clientX - lastMousePosition.current.x;
    const deltaY = event.clientY - lastMousePosition.current.y;

    // Consistent rotation speed (no matter how far you move)
    const rotationSpeed = 0.5;

    // Apply rotation with fixed proportional movement for both axes
    setRotation((prev) => ({
      // Invert deltaY here to make sure dragging down rotates the object down
      x: prev.x - deltaY * rotationSpeed,  // Fixed: Dragging down should rotate down
      y: prev.y + deltaX * rotationSpeed,  // Left/Right rotates as expected
    }));

    // Update the last mouse position
    lastMousePosition.current = { x: event.clientX, y: event.clientY };
  };

  return (
    <div
      className="wrapper"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="sun"
        animate={{ rotateX: rotation.x, rotateY: rotation.y }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      >
        <div className="sun-face front">Front</div>
        <div className="sun-face back">Back</div>
        <div className="sun-face left">Left</div>
        <div className="sun-face right">Right</div>
        <div className="sun-face top">Top</div>
        <div className="sun-face bottom">Bottom</div>
      </motion.div>
    </div>
  );
}

export default Sun;
