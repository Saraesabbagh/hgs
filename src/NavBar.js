import React, { useState, useEffect } from "react";
import "./App.css";

const NavBar = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      const currentScrollY = window.scrollY;
      const calculatedOpacity = Math.min(currentScrollY / scrollThreshold, 0.5);
      setOpacity(calculatedOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div
      className="nav-container"
      style={{ background: `rgba(255, 255, 255, ${opacity})` }}
    >
      <nav>
        <span>
          <ul>
            <li>
              <a href="#donate">Donate</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#volunteer">Tea Parties</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
