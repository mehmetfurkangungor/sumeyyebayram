import { useState } from "react";
import { motion } from "framer-motion";

const leaves = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: 8 + ((index * 19) % 84),
  delay: 0.1 + (index % 6) * 0.11,
  drift: index % 2 === 0 ? 42 : -38,
  rotate: index % 2 === 0 ? 120 : -140,
  duration: 2.25 + (index % 5) * 0.15,
}));

export function EnvelopeIntro({ invitation }) {
  const [phase, setPhase] = useState("closed");

  function openEnvelope() {
    if (phase === "closed") {
      setPhase("open");
    }
  }

  return (
    <motion.section
      className={`intro-overlay ${phase === "open" ? "is-open" : ""}`}
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        className="intro-envelope-button"
        type="button"
        aria-label={invitation.intro.openLabel}
        onClick={openEnvelope}
        disabled={phase !== "closed"}
        whileTap={phase === "closed" ? { scale: 0.97 } : undefined}
      >
        <EnvelopeVisual invitation={invitation} isOpen={phase === "open"} />
      </motion.button>

      <motion.p
        className="intro-hint"
        animate={{
          opacity: phase === "closed" ? [0.58, 1, 0.58] : [0.72, 1, 0.72],
          y: phase === "closed" ? [0, -4, 0] : [8, 0, 8],
        }}
        transition={{
          duration: phase === "closed" ? 1.9 : 1.55,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {phase === "closed" ? invitation.intro.openHint : invitation.hero.scrollLabel}
      </motion.p>

      {phase === "open" ? (
        <div className="falling-leaves" aria-hidden="true">
          {leaves.map((leaf) => (
            <motion.span
              className="falling-leaf"
              key={leaf.id}
              style={{ left: `${leaf.left}%` }}
              initial={{ opacity: 0, y: -70, x: 0, rotate: 0, scale: 0.7 }}
              animate={{
                opacity: [0, 0.86, 0.72, 0],
                y: "116vh",
                x: [0, leaf.drift, leaf.drift * -0.25],
                rotate: leaf.rotate,
                scale: [0.7, 1, 0.86],
              }}
              transition={{
                duration: leaf.duration,
                delay: leaf.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      ) : null}
    </motion.section>
  );
}

export function EnvelopeVisual({ invitation, isOpen, scrollStyles }) {
  const [firstName, secondName] = invitation.couple.names
    .split("&")
    .map((name) => name.trim());

  return (
    <div className={`envelope-visual ${isOpen ? "is-open" : ""}`}>
      <motion.div
        className="envelope-body"
        animate={scrollStyles ? undefined : { y: isOpen ? 34 : 0 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="envelope-note"
          style={scrollStyles?.note}
          initial={
            scrollStyles ? false : { y: 40, scale: 0.72, opacity: 0 }
          }
          animate={
            scrollStyles
              ? undefined
              : {
                  y: isOpen ? -154 : 40,
                  scale: isOpen ? 1.05 : 0.72,
                  opacity: isOpen ? 1 : 0,
                }
          }
          transition={{ duration: 1.12, delay: isOpen ? 0.42 : 0 }}
        >
          <span>{invitation.hero.subtitle}</span>
          <strong className="couple-name">
            <span>{firstName}</span>
            <span className="ampersand">&</span>
            <span>{secondName}</span>
          </strong>
          <small>{invitation.hero.intro}</small>
        </motion.div>
        <div className="envelope-back" />
        <motion.div
          className="envelope-flap"
          style={scrollStyles?.flap}
          animate={
            scrollStyles
              ? undefined
              : { rotateX: isOpen ? -162 : 0, y: isOpen ? -2 : 0 }
          }
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="envelope-pocket envelope-pocket-left" />
        <div className="envelope-pocket envelope-pocket-right" />
        <div className="envelope-pocket envelope-pocket-bottom" />
        <div className="envelope-seal">{invitation.couple.initials}</div>
      </motion.div>
    </div>
  );
}
