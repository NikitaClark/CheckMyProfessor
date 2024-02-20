import React, { useState } from 'react';
import styles from './Hero.module.css'; // Import the CSS module
import logoImage from './CheckMyProfessorLogo.jpg'; // Make sure the logo image path is correct

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
                        list="schools" // Associate the input with the datalist
                    />
                    <datalist id="schools"> // Define the datalist
                        <option value="University of Miami" /> // University of Miami as an option
                        {/* Add more options here if needed */}
                    </datalist>
                </form>
            </div>
        </div>
    );
};
