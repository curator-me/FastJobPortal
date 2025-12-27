import "./Services.css";
import { services } from "../../data/servicesSection.jsx";
import { motion } from "motion/react";
import { whileInViewPort } from "../../animation/whileInViewPort.js";

export function ServicesSection() {
  return (
    <section className="services-section">
      <motion.h2 className="section-title" {...whileInViewPort}>
        Services We Provide
      </motion.h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div transition={{ duration: 0.3 }} whileHover={{ y: -5 }}>
            <motion.div
              className="service-card"
              key={index}
              {...whileInViewPort}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
