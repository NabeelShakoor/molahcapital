import React, { useState, useEffect } from "react";
import Navbar from "../Header/Header.jsx";
import "./Layout.css";
import Footer from "../Footer/Footer.jsx";
import { motion } from "framer-motion";

function Layout({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;

    if (scrollTop > viewportHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page">
      <Navbar />

      {isVisible && (
        <div
          className="border px-3 py-2 bi bi-chevron-double-up"
          onClick={scrollToTop}
          disabled={isVisible}
          style={{
            position: "fixed",
            zIndex: "1000",
            bottom: "20px",
            right: "20px",
            // padding: "10px 20px",
            backgroundColor: "white",
            color: "var(--primary)",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
      )}

      <div className="content primary ">
        {children}
        <motion.div
          initial={{
            opacity: 0,
            y: 250,
          }}
          whileInView={{
            opacity: 1,
            y: 50,
            transition: {
              duration: 1,
            },
          }}
        >
          <Footer></Footer>
        </motion.div>
      </div>
    </div>
  );
}

export default Layout;
