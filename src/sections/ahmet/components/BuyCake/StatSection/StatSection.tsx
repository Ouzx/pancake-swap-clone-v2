import { useState, useEffect } from 'react';
import { BlockArray } from '../../../../../types/ahmet';
import './StatSection.scss';

const StatSection = ({ entry, data }: BlockArray) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (typeof data === 'number') {
      setStartAnimation(true);
    }
  }, [data]);

  useEffect(() => {
    if (startAnimation && typeof data === 'number') {
      const animationDuration = 200; // Adjust the duration as needed
      const step = data / animationDuration;
      let currentValue = 0;

      const intervalId = setInterval(() => {
        currentValue += step;
        if (currentValue >= data) {
          currentValue = data;
          clearInterval(intervalId);
        }
        setAnimatedValue(currentValue);
      }, 1);

      return () => clearInterval(intervalId);
    }
  }, [startAnimation, data]);

  return (
    <div className="stat-section-div">
      <div className="entry-div">{entry}</div>
      <div className="data-div">{animatedValue ? animatedValue.toLocaleString() : data}</div>
    </div>
  );
};

export default StatSection;
