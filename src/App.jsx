import React, { useState } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import Professor from './components/Professor/Professor';

function App() {
  const [selectedProfessor, setSelectedProfessor] = useState('');

  return (
    <div className={styles.App}>
      <Navbar />
      {selectedProfessor ? (
        <Professor selectedProfessor={selectedProfessor} />
      ) : (
        <Hero onProfessorSelect={setSelectedProfessor} />
      )}
    </div>
  );
}

export default App;
