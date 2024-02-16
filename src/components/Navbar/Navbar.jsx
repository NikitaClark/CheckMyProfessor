import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from "./Navbar.module.css";
export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.icons}>
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <a href="/login" className={styles.menuLink}>Log In</a>
            </li>
            <li className={styles.menuItem}>
              <a href="/signup" className={`${styles.menuLink} ${styles.signUp}`}>Sign Up</a>
            </li>
          </ul>
        </nav>
    );
}