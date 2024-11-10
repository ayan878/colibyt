import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Reveal from "./ui/Reveal";

const phrases = [
  "Software.",
  "Mobile App.",
  "IOT Devices.",
  "ERP.",
  "Blockchain.",
  "AI Models.",
];

function HeroHeading() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const typingSpeed = 150; // Typing speed in milliseconds
  const pauseDuration = 1500; // Pause duration between phrases

  useEffect(() => {
    const typeEffect = setInterval(() => {
      if (displayedText.length < phrases[currentPhraseIndex].length) {
        setDisplayedText(
          (prev) => prev + phrases[currentPhraseIndex][displayedText.length]
        );
      } else {
        clearInterval(typeEffect);
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setDisplayedText("");
        }, pauseDuration);
      }
    }, typingSpeed);

    return () => clearInterval(typeEffect);
  }, [displayedText, currentPhraseIndex]);

  return (
    <div className="text-[60px] font-bold text-white leading-tight mb-4">
      <Reveal>
        <p>We Help Companies</p>
      </Reveal>
      <Reveal>
        <p>To Build their very </p>
      </Reveal>
      <Reveal>
        <mark className="bg-transparent text-primary">
          <span className="text-white">own</span> {displayedText}
        </mark>
      </Reveal>
    </div>
  );
}

export default HeroHeading;
