import React, { useState, useEffect } from "react";
import SolarSystem from "./SolarSystem";

function Home() {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      setZoom((prevZoom) => Math.max(0.1, prevZoom + event.deltaY * -0.001));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}>
      <SolarSystem />
    </div>
  );
}

export default Home;