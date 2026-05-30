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
        whileTap={phase === "closed" ? { scale: 0.985 } : undefined}
      >
        <EnvelopeVisual
          invitation={invitation}
          isOpen={phase === "open"}
          mode="intro"
        />
      </motion.button>

      {phase === "open" ? (
        <div className="falling-leaves" aria-hidden="true">
          {leaves.map((leaf) => (
            <span
              className="falling-leaf"
              key={leaf.id}
              style={{
                "--leaf-left": `${leaf.left}%`,
                "--leaf-drift": `${leaf.drift}px`,
                "--leaf-rotate": `${leaf.rotate}deg`,
                "--leaf-delay": `${leaf.delay}s`,
                "--leaf-duration": `${leaf.duration + 2.8}s`,
              }}
            />
          ))}
        </div>
      ) : null}
    </motion.section>
  );
}

export function EnvelopeVisual({
  invitation,
  isOpen,
  scrollStyles,
  mode = "default",
}) {
  const [firstName, secondName] = invitation.couple.names
    .split("&")
    .map((name) => name.trim());

  return (
    <motion.div
      className={`envelope-visual envelope-visual-${mode} ${isOpen ? "is-open" : ""}`}
      animate={
        scrollStyles
          ? undefined
          : {
              scale: mode === "intro" ? (isOpen ? 0.9 : 1.08) : 1,
              y: mode === "intro" ? (isOpen ? 18 : 0) : 0,
            }
      }
      transition={{ duration: 1.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="envelope-note"
        style={scrollStyles?.note}
        initial={scrollStyles ? false : { y: 128, scale: 0.72, opacity: 0 }}
        animate={
          scrollStyles
            ? undefined
            : {
                y: isOpen ? -96 : 128,
                scale: isOpen ? 1.04 : 0.72,
                opacity: isOpen ? 1 : 0,
              }
        }
        transition={{ duration: 1.32, delay: isOpen ? 0.88 : 0 }}
      >
        <span>{invitation.hero.subtitle}</span>
        <strong className="couple-name">
          <span>{firstName}</span>
          <span className="ampersand">&</span>
          <span>{secondName}</span>
        </strong>
        <small>{invitation.hero.intro}</small>
      </motion.div>

      <motion.div
        className="envelope-body"
        animate={
          scrollStyles
            ? undefined
            : {
                y: isOpen ? 98 : 0,
                scale: isOpen ? 0.94 : 1,
                opacity: isOpen ? 0.08 : 1,
              }
        }
        transition={{
          duration: 1.25,
          delay: isOpen ? 0.16 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
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
    </motion.div>
  );
}
