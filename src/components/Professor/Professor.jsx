import React from 'react';
import styles from './Professor.module.css';

const Professor = () => {
  return (
    <div className={styles.professorContainer}>
      <header className={styles.header}>Professor's Profile</header>
      <div className={styles.profileSection}>
       
        <h2 className={styles.name}>Professor Name</h2>
        <p className={styles.title}>Title / Department</p>
        <p className={styles.bio}>Short bio or description about the professor...</p>
      </div>
    </div>
  );
};

export default Professor;
