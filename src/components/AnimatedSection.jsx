import { motion } from "framer-motion";

export function AnimatedSection({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      className={`animated-section ${className}`}
      initial={{ opacity: 0, y: 52 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
