import { useEffect, useMemo, useState } from "react";

function getTimeLeft(targetISO, isActive) {
  if (!isActive) {
    return null;
  }

  const target = new Date(targetISO).getTime();
  const now = Date.now();
  const difference = Math.max(target - now, 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function formatUnit(value) {
  return String(value).padStart(2, "0");
}

export function Countdown({ config }) {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(config.targetISO, config.isActive),
  );

  useEffect(() => {
    if (!config.isActive) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(config.targetISO, config.isActive));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [config.isActive, config.targetISO]);

  const units = useMemo(
    () =>
      config.units.map((unit) => ({
        ...unit,
        value: timeLeft ? formatUnit(timeLeft[unit.key]) : "--",
      })),
    [config.units, timeLeft],
  );

  return (
    <div className="countdown-block">
      <p className="section-eyebrow">{config.eyebrow}</p>
      <h2>{config.title}</h2>
      <div className="countdown-grid" aria-live="polite">
        {units.map((unit) => (
          <div className="countdown-unit" key={unit.key}>
            <strong>{unit.value}</strong>
            <span>{unit.label}</span>
          </div>
        ))}
      </div>
      <p className="muted-text">{config.body}</p>
    </div>
  );
}
