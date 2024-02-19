"use client";

import React, {useState} from 'react';
import styles from '../movieDetails.module.css'; // Import your stylesheet


const TruncatedOverview = ({ overview }: {overview: string}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.truncatedOverview}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <p title={overview}>
        {isHovered ? overview : overview.slice(0, 100)}
        {overview.length > 100 && !isHovered && (
          <span className={styles.showMore}>{'\u2026'}</span>
        )}
      </p>
    </div>
  );
};

export default TruncatedOverview;
