import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
       <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt=' All about Me' className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt= "cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a Frontend Developer proficient in HTML, CSS, JavaScript, and React, crafting responsive and user-friendly interfaces. </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt= "Server icon"/>
                    <div className={styles.aboutItemtext}>
                        <h3>Backend Developer</h3>
                        <p>Experienced Backend Developer proficient in Node.js ,building scalable and efficient server-side apllications.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt= "UI icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Problem Solving</h3>
                        <p>I have a good understanding of Data Structures amd Algorithms which helps in resolving complex issues efficiently. </p>
                    </div>
                </li>
            </ul>
        </div> 
    </section>
  );
};
