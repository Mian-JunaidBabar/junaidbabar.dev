"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number; // ms per char
  deletingSpeed?: number; // ms per char
  pauseTime?: number; // ms at end of phrase
  className?: string;
}

export default function Typewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1200,
  className = "",
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    if (phrases.length === 0) return;

    if (!isDeleting && subIndex === phrases[index].length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const delta = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(() => {
      setSubIndex((s) => s + (isDeleting ? -1 : 1));
    }, delta);

    return () => clearTimeout(timer);
  }, [
    subIndex,
    index,
    isDeleting,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className={className} aria-hidden>
      {phrases[index].slice(0, subIndex)}
      <span
        className={`inline-block w-0.5 align-middle ml-1 ${
          blink ? "bg-current" : "bg-transparent"
        }`}
        style={{ height: "1em" }}
      />
    </span>
  );
}
