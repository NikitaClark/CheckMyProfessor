import React from 'react';
import styles from "./Professor.module.css";

const Professor = () => {
  return (
    <div className={styles.header}>
      <div className={styles.ratingBlock}>
        <span className={styles.ratingValue}>4.2</span>
        <span className={styles.outOfFive}> / 5</span>
        <div className={styles.qualityStatement}>Overall Quality Based on 11 ratings</div>
      </div>

      <div className={styles.professorInfo}>
        <h1 className={styles.professorName}>Norton Starr</h1>
        <p className={styles.department}>Professor in the Mathematics department at Amherst College</p>
      </div>

      <div className={styles.additionalInfo}>
        <div className={styles.wouldTakeAgain}>
          <span className={styles.na}>N/A</span>
          <span className={styles.infoText}>Would take again</span>
        </div>
        <div className={styles.levelOfDifficulty}>
          <span className={styles.difficultyValue}>3.1</span>
          <span className={styles.infoText}>Level of Difficulty</span>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button className={styles.rateButton}>Rate</button>
        <button className={styles.compareButton}>Compare</button>
      </div>
    </div>
  );
};

export default Professor;
