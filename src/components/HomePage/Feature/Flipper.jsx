/* eslint-disable no-unused-vars */
import "./Feature.css";
import { FaGoogleWallet } from "react-icons/fa";
import { motion } from "motion/react";

const posY = 100,
  delay = 0.2;

const states = [
  {
    // curr
    style: { zIndex: 2 },
    initial: { opacity: 1, y: posY },
    animate: { opacity: [0, 1], y: [posY, 0] },
  },
  {
    // prev
    style: { zIndex: 1 },
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: -posY },
  },
  {
    // next
    style: { zIndex: 0 },
    initial: { opacity: 0, y: 2 * posY },
    animate: { opacity: 0, y: 0 },
  },
];

export function Flipper({ ind, currState }) {
  return (
    <>
      <div key={ind} className="flipper-vrt">
        <motion.div
          className={`flipper-item`}
          {...states[currState]}
          transition={{ duration: 1, ease: "easeOut", delay: ind * delay }}
        >
          <FaGoogleWallet />
          <p className="text">WaterWayC</p>
        </motion.div>
        <motion.div
          className={`flipper-item`}
          {...states[(currState + 1) % 3]}
          transition={{ duration: 1, ease: "easeOut", delay: ind * delay }}
        >
          <FaGoogleWallet />
          <p className="text">WaterWayP</p>
        </motion.div>
        <motion.div
          className={`flipper-item`}
          {...states[(currState + 2) % 3]}
          transition={{ duration: 1, ease: "easeOut", delay: ind * delay }}
        >
          <FaGoogleWallet />
          <p className="text">WaterPlusN</p>
        </motion.div>
      </div>
    </>
  );
}
