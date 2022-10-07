import React from "react";
import { Link } from "react-router-dom";
import useMedia from "use-media";
const Footer = () => {
  const media = useMedia({ maxWidth: 800 });

  return (
    <div style={{ height: "fit-content", backgroundColor: "#2B2B2B" }} className = 'py-2'>
      <div className = "w-100 text-center text-white">
          <h1>
            Party<span style={{ color: "#1aa94b" }}>Maker</span>
          </h1>
        </div>
    </div>
  );
};

export default Footer;
