import React, { useEffect, useState, FC } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

import "./SlideMode.scss";

enum Direction {
  Up,
  Down,
}

enum PlayState {
  Playing,
  Paused,
}

interface SlideModeProps {
  Speed: number;
}

const SlideMode: FC<SlideModeProps> = ({ Speed = 1 }) => {
  const [isPlaying, setIsPlaying] = useState(PlayState.Paused);
  const [direction, setDirection] = useState(Direction.Down);

  useEffect(() => {
    if (isPlaying === PlayState.Paused) return;

    const play = setInterval(() => {
      handleScroll();
    }, 25);

    return () => clearInterval(play);
  }, [isPlaying, direction]);

  const handleScroll = () => {
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.pageYOffset;

    if (currentScroll >= scrollHeight - 100) {
      setDirection(Direction.Up);
    } else if (currentScroll <= 0) {
      setDirection(Direction.Down);
    }

    if (isPlaying === PlayState.Playing) {
      if (direction === Direction.Down) {
        window.scrollBy(0, Speed);
      } else {
        window.scrollBy(0, -Speed);
      }
    }
  };

  const handleClick = () => {
    setIsPlaying(
      isPlaying === PlayState.Playing ? PlayState.Paused : PlayState.Playing
    );
  };

  return (
    <button onClick={handleClick} className="slide-mode">
      {isPlaying === PlayState.Playing ? (
        <AiFillPauseCircle size={28} />
      ) : (
        <AiFillPlayCircle size={28} />
      )}
    </button>
  );
};

export default SlideMode;
