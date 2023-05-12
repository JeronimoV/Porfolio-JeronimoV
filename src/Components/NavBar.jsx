"use client"

import { useEffect, useState } from "react"
import styles from "./NavBar.module.css"

const NavBar = () => {

    const [isClient, setIsClient] = useState(false)
    const [userWidth, setUserWidth] = useState("414px")
    const [menuMode, setMenuMode] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if(isClient){
            setUserWidth(window.screen.availWidth)
        }
    }, [isClient])

    const handleMenu = () => {
        if(menuMode){
            setMenuMode(false)
        }else{
            setMenuMode(true)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container2}>
                <a className={styles.link} href="https://docs.google.com/document/d/1lhp1KmzUS53s8fd_FxmgAjOwqJy-1uFB/edit?usp=share_link&ouid=104513528692140047356&rtpof=true&sd=true"><button className={styles.button}>Download CV</button></a>
                {userWidth > 1000 ?
                <div className={styles.nav}>
                    <a className={styles.a} href="#div1"><h3 name="start" className={styles.links}>Start</h3></a>
                    <a className={styles.a} href="#technologies"><h3 name="technologies" className={styles.links}>Technologies</h3></a>
                    <a className={styles.a} href="#projects"><h3 name="contact" className={styles.links}>Projects</h3></a>
                    <a className={styles.a} href="#contact"><h3 name="contact" className={styles.links}>Contact</h3></a>
                </div>
                : 
                <div className={styles.nav2}>
                    <div>
                        <img className={styles.menu} onClick={handleMenu} src="https://www.svgrepo.com/show/376964/menu.svg"/>
                    </div>
                </div>
                }
            </div>
                <div className={menuMode ? styles.showedMenu : styles.hiddenMenu}>
                    <a href="#div1"><h3 name="start" className={styles.links}>Start</h3></a>
                    <a href="#technologies"><h3 name="technologies" className={styles.links}>Technologies</h3></a>
                    <a href="#projects"><h3 name="contact" className={styles.links}>Projects</h3></a>
                    <a href="#contact"><h3 name="contact" className={styles.links}>Contact</h3></a>
                </div>
        </div>
    )
}

export default NavBar