import { motion  } from "motion/react";
import { IconList } from '../../../data/iconList';
import './IconList.css'


const InfAnimationLR = {
  animate: { x: ["-50%", "0%"] },
  transition: { repeat: Infinity, duration: 100, ease: "linear" },
};
const InfAnimationRL = {
  animate: { x: ["-50%", "0%"] },
  transition: { repeat: Infinity, duration: 100, ease: "linear" },
};

export function IconScroller() {
  

  return (
    <>
      {/* Right to Left */}
      <div className="icon-list-wrapper">
        <motion.div
          className="scrolling-list"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 100, ease: 'linear'}}
        >
          <div className="icon-group">
            {IconList.map((icon, id) => (
              <div key={id} className="icon">
                {icon}
              </div>
            ))}
          </div>
          <div className="icon-group">
            {IconList.map((icon, id) => (
              <div key={id} className="icon">
                {icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Left to Right */}
      <div className="icon-list-wrapper">
        <motion.div className="scrolling-list" {...InfAnimationRL}>
          <div className="icon-group">
            {IconList.map((icon, id) => (
              <div key={id} className="icon">
                {icon}
              </div>
            ))}
          </div>
          <div className="icon-group">
            {IconList.map((icon, id) => (
              <div key={id} className="icon">
                {icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
