import React, { useState, useEffect } from "react";
import "./ApologyMessage.css";

const ApologyMessage = () => {
  const [displayText, setDisplayText] = useState("");
  const [icons, setIcons] = useState([]);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const fullMessage = "Good morning Neeha,\nI'm sorry daa,\n I really like to vibe with you,\n \n Ex's oddu friends muddhu  \nPlease forgive me.";
  const cuteIcons = ["🌟", "🐱", "🐶", "🦄", "🍩", "🎀", "🍭", "🦋", "🐧", "🌸"];

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setDisplayText(fullMessage.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        showRandomIcons();
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullMessage]);

  const showRandomIcons = () => {
    const newIcons = [];
    const numIcons = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < numIcons; i++) {
      const randomIcon = cuteIcons[Math.floor(Math.random() * cuteIcons.length)];
      const randomLeft = Math.random() * 90 + 5;
      const randomTop = Math.random() * 90 + 5;
      newIcons.push({ icon: randomIcon, left: randomLeft, top: randomTop });
    }
    setIcons(newIcons);
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="apology-container">
      {/* YouTube Music */}
      {isMusicPlaying && (
        <iframe
          className="youtube-music"
          src="https://www.youtube.com/embed/GhXU_FTKNbE?autoplay=1&loop=1&playlist=GhXU_FTKNbE"
          title="Background Music"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      )}

      {/* Play Music Button */}
      <button className="play-button" onClick={toggleMusic}>
        {isMusicPlaying ? "Pause Music" : "Play Music"}
      </button>

      {/* Message */}
      <div className="message">
        <div className="message-text">
          {displayText.split("\n").map((line, index) => (
            <div key={index}>
              {line}
              <span className="sparkle">✨</span>
            </div>
          ))}
        </div>
      </div>

      {/* Random Icons */}
      {icons.map((icon, index) => (
        <div
          key={index}
          className="icon"
          style={{ left: `${icon.left}%`, top: `${icon.top}%` }}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  );
};

export default ApologyMessage;
