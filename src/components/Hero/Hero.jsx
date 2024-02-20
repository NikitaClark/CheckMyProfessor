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
                    <datalist id="schools">
    <option value="Московский государственный университет им. М.В. Ломоносова" />
    <option value="Санкт-Петербургский государственный университет" />
    <option value="Новосибирский государственный университет" />
    <option value="Московский физико-технический институт" />
    <option value="Санкт-Петербургский политехнический университет Петра Великого" />
    <option value="Томский политехнический университет" />
    <option value="Национальный исследовательский университет Высшая школа экономики" />
    <option value="Казанский (Приволжский) федеральный университет" />
    <option value="Уральский федеральный университет имени первого Президента России Б.Н. Ельцина" />
    <option value="Дальневосточный федеральный университет" />
    <option value="Национальный исследовательский ядерный университет «МИФИ»" />
    <option value="Российский государственный гуманитарный университет" />
    <option value="Московский государственный институт международных отношений (Университет) МИД России" />
    <option value="Самарский национальный исследовательский университет имени академика С.П. Королёва" />
    <option value="Санкт-Петербургский государственный университет аэрокосмического приборостроения" />
    <option value="Сибирский федеральный университет" />
    <option value="Южно-Уральский государственный университет" />
    <option value="Фармацевтическая академия им. С.М. Кирова" />
    <option value="Московский государственный технический университет им. Н.Э. Баумана" />
    <option value="Российский государственный педагогический университет им. А.И. Герцена" />
   
</datalist>

                </form>
            </div>
        </div>
    );
};
