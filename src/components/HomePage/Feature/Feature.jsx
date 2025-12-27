/* eslint-disable no-unused-vars */
import "./Feature.css";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Flipper } from "./Flipper";
import { Cards } from "./Cards";
import { IconScroller } from "./IconList";
import { MdKeyboardArrowRight } from "react-icons/md";
import { whileInViewPort } from "../../../animation/whileInViewPort";

export function Feature() {
  const [currState, setCurrState] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrState((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="feature">
      <div className="container">
        <motion.p className="title-pm" {...whileInViewPort}>
          The Country's most popular platform for finding your dream job
        </motion.p>
        <motion.div
          className="flippers"
          {...whileInViewPort}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[...Array(4)].map((_, ind) => (
            <Flipper key={ind} ind={ind} currState={currState} />
          ))}
        </motion.div>

        <div className="feature-cards">
          <Cards />
        </div>
        <motion.div className="feature-list">
          <p className="title">
            Launch your Career with our Talent Matching
            <br /> Engine & over 500 Industry Partners.
          </p>
          <IconScroller />
        </motion.div>

        <motion.div className="link-btn-ft" {...whileInViewPort}>
          <div className="link-btn">
            <a href="#">
              Browse All Partners 
              <motion.div
                className="left-arrow"
                initial={{ x: 0, y: 3 }}
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <MdKeyboardArrowRight />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
