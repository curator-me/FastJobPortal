import "./Hero.css";
import bgimg from "../../../data/img/hero-bg.jpg";
import { IoSearch } from "react-icons/io5";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Hero() {
  const [opacity, setOpacity] = useState(1);
  const [transY, setTransY] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log(scrollTop);

      // Opacity: fade out between 200px and 400px
      const newOpacity = Math.max(0, 1 - Math.max(scrollTop - 200, 0) / 200);
      setOpacity(newOpacity);

      // Movement: start at 300px, accelerate using square root for easing
      let newTransY = 0;
      if (scrollTop >= 300) {
        const progress = (scrollTop - 300) / 400;
        // Cap the progress at 1.0 to prevent infinite growth
        const cappedProgress = Math.min(progress, 1.0);
        newTransY = Math.pow(cappedProgress, 1.5) * 600; // Max 600px // 0.7 for acceleration curve
      }
      setTransY(newTransY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="hero">
      <div className="bg-image">
        <img src={bgimg} width={1900} />
      </div>
      <div
        className="container"
        style={{
          opacity,
          transform: `translateY(${transY}px)`,
          // transition: "opacity 0.1s linear, transform 0.1s linear",
        }}
      >
        <motion.div className="box-wrapper">
          <motion.div
            className="title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>Find your dream job </p>
            <p>Faster then ever</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="input-box">
              <p className="icon">
                <IoSearch />
              </p>
              <input type="text" placeholder="Enter any keyword..." onClick={scrollToTop} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
