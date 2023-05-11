"use client"

import { useState } from "react"
import styles from "./page.module.css"

const Home = () => {

    const screenHeight = window.screen.availHeight + "px"

    const [counter, setCounter] = useState([1, 2, 3])

    const handleArrow = () => {
        const oldCount = [...counter]
        oldCount.shift()
        if(oldCount[1] === 7){
            oldCount.push(1)
        }else{
            oldCount.push(oldCount[1]+1)
        }
        console.log(oldCount);
        setCounter(oldCount)
    }

    const sendEmail = () => {
        window.location.href = `mailto:jeronimoevilar@outlook.com`
    };

    return(
        <div>
            <div id="div1" className="container">
                <style jsx>{`
                    .container {
                        display: flex;
                        gap: 10%;
                        align-items: center;
                        justify-content: center;
                        height: ${screenHeight};
                    }
                `}</style>
                <div className={styles.name}>
                    <h1>Jeronimo Vilar</h1>
                    <h3>FullStack Web Developer</h3>
                </div>
                <img className={styles.image} src="/cara.png" width={361} height={361}></img>
            </div>
            <div id="technologies" className={styles.technologies}>
                <h1>Technologies</h1>
                <style jsx>{`
                    #technologies {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        height: ${screenHeight};
                    }
                `}</style>
                <div className={styles.cards}>
                    <img className={styles.arrow} src="https://www.svgrepo.com/show/513819/chevron-left.svg" onClick={handleArrow}/>
                    <img className={styles.technologiesCard}  src={`./${counter[0]}.png`}/>
                    <img className={styles.technologiesCard} src={`./${counter[1]}.png`}/>
                    <img className={styles.technologiesCard} src={`./${counter[2]}.png`}/>
                    <img className={styles.arrow} src="https://www.svgrepo.com/show/513818/chevron-right.svg" onClick={handleArrow}/>
                </div>
            </div>
            <div id="projects" className={styles.projects}>
                <h1>Projects</h1>
                <style jsx>{`
                    #projects {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        height: ${screenHeight};
                    }
                `}</style>
                <div className={styles.allProjects}>
                    <a href="https://viztastore.onrender.com"><img className={styles.projectsCards}  src="./vizta page.png"/></a>
                </div>
            </div>
                <div id="contact" className={styles.contact}>
                    <h1>Contact</h1>
                    <style jsx>{`
                        #contact {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            height: ${screenHeight};
                            background-color: #1B1B1B;
                        }
                    `}</style>
                    <div className={styles.network}>
                        <a href="https://www.linkedin.com/in/jeronimo-vilar-457295245/"><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"/></a>
                        <a href="https://github.com/JeronimoV"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>
                        <img src="https://www.freepnglogos.com/uploads/email-png/mail-message-email-send-image-pixabay-5.png" onClick={sendEmail}/>
                        <a href="https://wa.link/oy206p"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"/></a>
                    </div>
                </div>
        </div>
    )
}

export default typeof window !== "undefined" ? Home : null