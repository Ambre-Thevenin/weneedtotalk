import React from 'react';

import styles from './About.module.css';
import GitHub from '../../assets/github-sign.png';
import Linkedin from '../../assets/linkedin-logo.png';
import heart from '../../assets/heart.png';

const About = () => {
    return (
        <div className={styles.About}>
            <h1>About this game</h1>
            <p>Ce jeu a été créé avec <img src={heart} alt='love' id={styles.heart} /> par Ambre Thévenin.</p>
            <p>Créé utilisant React, Node.js & Express ainsi que MySQL, ce jeu est un projet mené dans le cadre de la formation Développeur Web et Web-Mobile de la Wild Code School Paris.</p>
            <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/ambrethevenin/"><img src={Linkedin} alt='Linkedin logo' /></a>
            <a href="https://github.com/Ambre-Thevenin"><img src={GitHub} alt='GitHub logo' /></a>
            </div>
        </div>
    )
}

export default About;