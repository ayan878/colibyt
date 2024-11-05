import React, { useEffect, useState } from "react";

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
    <h1 className="text-7xl font-bold text-white mb-4 leading-20">
      We Help Companies To Build their very own <nbsp />
      <mark className="bg-transparent text-dark">{displayedText}</mark>
    </h1>
  );
}

export default HeroHeading;
