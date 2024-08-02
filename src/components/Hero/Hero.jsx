import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

 export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Aayushi</h1>
            <p className={styles.description}>A Developer with strong foundation in programming languages (Python, C++), data structures, and algorithms. Proficient in web development frameworks and eager to learn and grow in a dynamic tech environment.</p>
            <a href='mailto:aayushidahiya05@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/file3.png")} alt='Hero image of me' className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  );
};


