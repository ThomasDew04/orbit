import React, { useState, useRef } from "react";
import Sun from "../components/Sun";
import Mercury from "../components/Mercury";
import Venus from "../components/Venus";
import Earth from "../components/Earth";
import Mars from "../components/Mars";
import Jupiter from "../components/Jupiter";
import Saturn from "../components/Saturn";

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
    const rotationSpeed = 0.25; // Reduced speed
    
    setRotation((prev) => ({
      x: prev.x - deltaY * rotationSpeed,
      y: prev.y - deltaX * rotationSpeed, // Inverted sign
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
      <div
        className="solar-system"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />

      </div>
    </div>
  );
}

export default SolarSystem;