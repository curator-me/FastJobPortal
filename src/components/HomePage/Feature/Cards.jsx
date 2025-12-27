/* eslint-disable no-unused-vars */
import { MdWork } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa6";
import { ImStarHalf } from "react-icons/im";
import { motion } from 'motion/react';
import { whileInViewPort } from '../../../animation/whileInViewPort';
import './Feature.css'


export function Cards() {
  return (
    <>
      <motion.div
        className="card"
        {...whileInViewPort}
        transition={{ duration: 0.6 }}
      >
        <MdWork className="icon" />
        <p className="text">
          <span className="a">Top 500 Active Jobs.</span> Top companies with
          high demand job.
        </p>
      </motion.div>
      <motion.div
        className="card"
        {...whileInViewPort}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <FaNetworkWired className="icon" />
        <p className="text">
          <span className="a">100k+ community members.</span> This wouldn't be
          possible without you.
        </p>
      </motion.div>
      <motion.div
        className="card"
        {...whileInViewPort}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <ImStarHalf className="icon" />
        <p className="text">
          <span className="a">4.8/5-Star Rating.</span> Unmatched Quality and
          Exceptional Service
        </p>
      </motion.div>
    </>
  );
}


