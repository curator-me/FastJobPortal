import "./Testimonial.css";
import { motion } from "motion/react";
import { commentsList, commentsList2 } from "../../../data/comments";
import { Comments } from "./Comments";

const InfAnimationRL80 = {
  animate: { x: ["0%", "-50%"] },
  transition: { repeat: Infinity, duration: 80, ease: "linear" },
};
const InfAnimationLR80 = {
  animate: { x: ["-50%", "0%"] },
  transition: { repeat: Infinity, duration: 80, ease: "linear" },
};

export function Testimonial() {

  return (
    <section className="testimonial">
      <div className="container">
        <div className="title">
          <h2>Hear From Those Who Landed Their Dream Jobs</h2>
        </div>
        <motion.div className="comment-wrapper-scrolling" {...InfAnimationRL80}>
          <div className="comment-wrapper">
            <Comments commentsList={commentsList} k={"a"} />
          </div>
          <div className="comment-wrapper">
            <Comments commentsList={commentsList} k={"b"} />
          </div>
        </motion.div>
        <motion.div className="comment-wrapper-scrolling" {...InfAnimationLR80}>
          <div className="comment-wrapper">
            <Comments commentsList={commentsList2} k={"a"} />
          </div>
          <div className="comment-wrapper">
            <Comments commentsList={commentsList2} k={"b"} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
