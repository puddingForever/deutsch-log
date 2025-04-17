/***
 * loading
 */
import { useState } from 'react';
import styles from './Loading.module.css';
import { useEffect } from 'react';

const Loading = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // counts up ever 10 miliseconds till 100
    const timerId = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return ++prev;
      });
    }, 10);

    // clear
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className={styles.loading}>
      <h1>deutsch log</h1>
      <h3>{percent}%</h3>
    </div>
  );
};

export default Loading;
