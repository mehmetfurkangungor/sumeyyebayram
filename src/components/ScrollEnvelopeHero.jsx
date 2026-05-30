import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EnvelopeVisual } from "./EnvelopeIntro";

export function ScrollEnvelopeHero({ invitation }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const flapRotate = useTransform(scrollYProgress, [0.08, 0.34], [0, -162]);
  const flapY = useTransform(scrollYProgress, [0.08, 0.34], [0, -2]);
  const noteY = useTransform(scrollYProgress, [0, 0.25, 0.66], [46, 20, -138]);
  const noteScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.66],
    [0.72, 0.8, 1.06],
  );
  const noteOpacity = useTransform(noteY, [46, 20, -138], [0.14, 0.62, 1]);
  const sceneScale = useTransform(scrollYProgress, [0.66, 1], [1, 0.92]);
  const helperOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="scroll-envelope-section"
      aria-label={invitation.event.type}
    >
      <div className="scroll-envelope-sticky">
        <motion.div className="scroll-envelope-scene" style={{ scale: sceneScale }}>
          <EnvelopeVisual
            invitation={invitation}
            isOpen
            scrollStyles={{
              flap: { rotateX: flapRotate, y: flapY },
              note: { y: noteY, scale: noteScale, opacity: noteOpacity },
            }}
          />
        </motion.div>

        <motion.div className="scroll-helper" style={{ opacity: helperOpacity }}>
          <span>Aşağı kaydır</span>
          <ChevronDown size={18} strokeWidth={1.8} />
        </motion.div>
      </div>
    </section>
  );
}
