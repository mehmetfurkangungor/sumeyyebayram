import { useEffect, useMemo } from "react";
import {
  CalendarHeart,
  Clock,
  Gift,
  GlassWater,
  Globe2,
  Heart,
  MapPin,
  MessageCircle,
  Music2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { EnvelopeIntro } from "./components/EnvelopeIntro";
import { FloatingParticles } from "./components/FloatingParticles";
import { ScrollEnvelopeHero } from "./components/ScrollEnvelopeHero";
import { getWhatsappHref, invitation } from "./data/invitation";

const reveal = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const programIcons = [Globe2, Heart, GlassWater, Gift];

function CoupleName({ names, as: Component = "span", className = "" }) {
  const [firstName, secondName] = names.split("&").map((name) => name.trim());

  return (
    <Component className={`couple-name ${className}`}>
      <span>{firstName}</span>
      <span className="ampersand">&</span>
      <span>{secondName}</span>
    </Component>
  );
}

function AnimatedSection({ children, className = "" }) {
  return (
    <motion.section
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.28 }}
    >
      {children}
    </motion.section>
  );
}

function SectionHeading({ kicker, title, copy }) {
  return (
    <div className="garden-heading">
      <p>{kicker}</p>
      <h2>{title}</h2>
      {copy ? <span>{copy}</span> : null}
    </div>
  );
}

function GardenHero() {
  return (
    <section className="garden-hero">
      <motion.img
        className="garden-hero-image"
        src={invitation.visual.sceneImage}
        alt=""
        draggable="false"
        initial={{ scale: 1.08 }}
        animate={{ scale: [1.08, 1.02, 1.06], x: [0, -5, 4] }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <div className="garden-hero-tint" />
      <motion.p
        className="preview-ribbon"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 0.72, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {invitation.garden.previewLabel}
      </motion.p>

      <motion.div
        className="hero-invite-card"
        initial={{ opacity: 0, y: 34, scale: 0.94, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>{invitation.garden.category}</p>
        <CoupleName names={invitation.couple.names} as="h1" />
        <span>{invitation.garden.sampleLabel}</span>
        <div className="tiny-divider">
          <i />
          <Heart size={13} fill="currentColor" strokeWidth={0} />
          <i />
        </div>
        <strong>{invitation.event.dateTimeLabel}</strong>
        <small>{invitation.event.location}</small>
      </motion.div>

      <motion.button
        className="floating-language"
        type="button"
        aria-label="Dil seç"
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <Globe2 size={21} strokeWidth={1.7} />
      </motion.button>

      <motion.button
        className="floating-music"
        type="button"
        aria-label="Müzik"
        initial={{ opacity: 0, scale: 0.72 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.24, duration: 0.5 }}
      >
        <Music2 size={18} strokeWidth={1.8} />
      </motion.button>
    </section>
  );
}

function LoveQuote() {
  return (
    <AnimatedSection className="love-section">
      <motion.div className="love-copy" variants={stagger}>
        <motion.p variants={reveal}>{invitation.garden.quoteTitle}</motion.p>
        <motion.h2 variants={reveal}>{invitation.garden.quoteBody}</motion.h2>
        <motion.blockquote variants={reveal}>
          "{invitation.garden.quote}"
        </motion.blockquote>
        <motion.span variants={reveal}>{invitation.garden.withLove}</motion.span>
      </motion.div>
    </AnimatedSection>
  );
}

function CountdownBand() {
  const units = useMemo(
    () => [
      { value: "--", label: "Gün" },
      { value: "--", label: "Saat" },
      { value: "--", label: "Dakika" },
      { value: "--", label: "Saniye" },
    ],
    [],
  );

  return (
    <AnimatedSection className="countdown-band">
      <p>{invitation.garden.countdownTitle}</p>
      <div className="garden-countdown">
        {units.map((unit, index) => (
          <div className="countdown-cell" key={unit.label}>
            <strong>{unit.value}</strong>
            <span>{unit.label}</span>
            {index < units.length - 1 ? <i>:</i> : null}
          </div>
        ))}
      </div>
      <small>{invitation.garden.countdownPlaceholder}</small>
    </AnimatedSection>
  );
}

function WhenWhere() {
  return (
    <AnimatedSection className="when-section">
      <SectionHeading
        kicker={invitation.details.eyebrow}
        title={invitation.garden.whenWhereTitle}
      />
      <div className="date-card">
        <div>
          <CalendarHeart size={22} strokeWidth={1.7} />
          <span>Tarih</span>
          <strong>Yakında</strong>
        </div>
        <div>
          <Clock size={22} strokeWidth={1.7} />
          <span>Saat</span>
          <strong>Yakında</strong>
        </div>
      </div>
      <div className="venue-card">
        <img src={invitation.visual.sceneImage} alt="" draggable="false" />
        <h3>{invitation.garden.venueTitle}</h3>
        <p>{invitation.event.location}</p>
        <a href={invitation.map.href} onClick={(event) => event.preventDefault()}>
          <MapPin size={18} strokeWidth={1.8} />
          {invitation.garden.mapLabel}
        </a>
      </div>
    </AnimatedSection>
  );
}

function Program() {
  return (
    <AnimatedSection className="program-section">
      <SectionHeading kicker={invitation.event.type} title={invitation.garden.scheduleTitle} />
      <div className="program-timeline">
        {invitation.garden.schedule.map((item, index) => {
          const Icon = programIcons[index] ?? Sparkles;
          return (
            <motion.div
              className="program-item"
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <span className="program-icon">
                <Icon size={19} strokeWidth={1.7} />
              </span>
              <div>
                <strong>{item.time}</strong>
                <p>{item.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}

function Story() {
  return (
    <AnimatedSection className="story-section">
      <SectionHeading
        kicker={invitation.garden.storyTitle}
        title={invitation.garden.storyLead}
        copy={invitation.garden.storyBody}
      />
      <div className="story-card-row">
        <div className="story-card story-card-one" />
        <div className="story-card story-card-two" />
      </div>
    </AnimatedSection>
  );
}

function FinalInvite() {
  const rsvpHref = getWhatsappHref(invitation.rsvp);

  return (
    <AnimatedSection className="final-section">
      <div className="floral-footer" />
      <p>{invitation.garden.footerLine}</p>
      <CoupleName names={invitation.couple.names} as="h2" />
      <span>{invitation.garden.finalNote}</span>
      <a
        href={rsvpHref}
        target={rsvpHref === "#" ? undefined : "_blank"}
        rel={rsvpHref === "#" ? undefined : "noreferrer"}
        onClick={(event) => {
          if (rsvpHref === "#") event.preventDefault();
        }}
      >
        <MessageCircle size={18} strokeWidth={1.8} />
        {invitation.rsvp.buttonLabel}
      </a>
    </AnimatedSection>
  );
}

export default function App() {
  useEffect(() => {
    document.title = invitation.meta.title;
  }, []);

  return (
    <main
      className="garden-shell"
      style={{ "--scene-image": `url(${invitation.visual.sceneImage})` }}
    >
      <EnvelopeIntro invitation={invitation} />
      <FloatingParticles particles={invitation.visual.particles} />
      <GardenHero />
      <ScrollEnvelopeHero invitation={invitation} />
      <LoveQuote />
      <CountdownBand />
      <WhenWhere />
      <Program />
      <Story />
      <FinalInvite />
    </main>
  );
}
