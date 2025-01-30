import React, { useState, useRef } from "react";
import Sun from "./Sun";
import "../styles.css";

function SolarSystem() {
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

    const deltaX = event.clientX - lastMousePosition.current.x;
    const deltaY = event.clientY - lastMousePosition.current.y;
    const rotationSpeed = 0.5;

    setRotation((prev) => ({
      x: prev.x - deltaY * rotationSpeed,
      y: prev.y + deltaX * rotationSpeed,
    }));

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
      <Sun rotation={rotation} />
    </div>
  );
}

export default SolarSystem;