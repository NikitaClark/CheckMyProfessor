import React, { useState } from 'react';
import styles from './Hero.module.css'; // Import the CSS module
import logoImage from './CheckMyProfessorLogo.jpg'; // Make sure the logo image path is correct
import universityVideo from './vid.mp4'; // Path to the video you want to display

export const Hero = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement your search logic here
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <img src={logoImage} alt="CheckMyProfessor Logo" className={styles.logo} />
                <h1>Enter your school to get started</h1>
                <form className={styles.searchBar} onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search for your school..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        list="schools"
                    />
                    <datalist id="schools">
                        <option value="University of Miami" />
                        {/* Add more options here if needed */}
                    </datalist>
                </form>
                {searchTerm === 'University of Miami' && (
                    <div className={styles.universityInfo}>
                        <p>Welcome to the University of Miami!</p>
                        <video src={universityVideo} controls className={styles.universityVideo}>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
            </div>
        </div>
    );
};
