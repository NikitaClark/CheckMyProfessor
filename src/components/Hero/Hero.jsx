import React, { useState } from 'react';
import styles from './Hero.module.css'; // Import the CSS module
import logoImage from './CheckMyProfessorLogo.jpg'; // Make sure the logo image path is correct

export const Hero = ({ onProfessorSelect }) => { // Accept onProfessorSelect as a prop
    const [selectedSchool, setSelectedSchool] = useState('');
    const [selectedProfessor, setSelectedProfessor] = useState('');

    const handleSchoolChange = (e) => {
        setSelectedSchool(e.target.value);
        setSelectedProfessor(''); // Reset professor selection when a new school is selected
    };

    const handleProfessorChange = (e) => {
        setSelectedProfessor(e.target.value);
        onProfessorSelect(e.target.value); // Notify the parent component about the professor selection
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Выбранное учебное заведение:', selectedSchool);
        console.log('Выбранный профессор:', selectedProfessor);
    };

    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <img src={logoImage} alt="CheckMyProfessor Logo" className={styles.logo} />
                <h1>{selectedSchool ? `Выберите профессора из ${selectedSchool}` : 'Выберите ваш университет'}</h1>
                <form className={styles.searchBar} onSubmit={handleSearchSubmit}>
                    {!selectedSchool && (
                        <input
                            type="text"
                            placeholder="Поиск вашего университета..."
                            value={selectedSchool}
                            onChange={handleSchoolChange}
                            list="schools"
                        />
                    )}
                    {selectedSchool && (
                        <input
                            type="text"
                            placeholder="Поиск вашего профессора..."
                            value={selectedProfessor}
                            onChange={handleProfessorChange}
                            list="professors"
                        />
                    )}
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
                    </datalist>
                    <datalist id="professors">
                    <option value="Александр Иванов" />
                    <option value="Мария Петрова" />
                    <option value="Дмитрий Смирнов" />
                    <option value="Елена Васильева" />
                    <option value="Игорь Николаев" />
                    <option value="Татьяна Кузнецова" />
                    <option value="Сергей Попов" />
                    <option value="Ольга Соколова" />
                    <option value="Владимир Михайлов" />
                    <option value="Наталья Федорова" />
                    <option value="Андрей Алексеев" />
                    <option value="Юлия Морозова" />
                    <option value="Григорий Волков" />
                    <option value="Анна Павлова" />
                    <option value="Никита Богданов" />
                    <option value="Ирина Лебедева" />
                    <option value="Максим Орлов" />
                    <option value="Светлана Козлова" />
                    <option value="Роман Новиков" />
                    <option value="Екатерина Зайцева" />
                    </datalist>
                </form>
            </div>
        </div>
    );
};
