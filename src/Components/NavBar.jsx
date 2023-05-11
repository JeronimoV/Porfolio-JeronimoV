"use client"

import styles from "./NavBar.module.css"

const NavBar = () => {

    return (
        <div className={styles.container}>
            <a className={styles.link} href="https://docs.google.com/document/d/1lhp1KmzUS53s8fd_FxmgAjOwqJy-1uFB/edit?usp=share_link&ouid=104513528692140047356&rtpof=true&sd=true"><button className={styles.button}>Download CV</button></a>
            <div className={styles.nav}>
                <a className={styles.a} href="#div1"><h3 name="start" className={styles.links}>Start</h3></a>
                <a className={styles.a} href="#technologies"><h3 name="technologies" className={styles.links}>Technologies</h3></a>
                <a className={styles.a} href="#projects"><h3 name="contact" className={styles.links}>Projects</h3></a>
                <a className={styles.a} href="#contact"><h3 name="contact" className={styles.links}>Contact</h3></a>
            </div>
        </div>
    )
}

export default NavBar