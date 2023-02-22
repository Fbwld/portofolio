import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setTimeout(() => {
      const char = text[currentIndex];
      setDisplayText(displayText + char);
      setCurrentIndex(currentIndex + 1);
    }, speed);

    if (currentIndex === text.length) {
      clearTimeout(typingInterval);
    }

    return () => {
      clearTimeout(typingInterval);
    };
  }, [currentIndex]);

  return <span>{displayText}</span>;
};

export default TypingText;
