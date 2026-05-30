import { motion } from "framer-motion";

export function FloatingParticles({ particles }) {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.span
          className="gold-particle"
          key={`${particle.left}-${particle.top}-${index}`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -18, 8, 0],
            opacity: [0.16, 0.72, 0.28, 0.16],
            scale: [1, 1.7, 0.9, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
