import React from "react";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <div id="contact" className={styles.containersTarun}>
            <div>
                <a className={styles.icon}  href="https://www.linkedin.com/in/tarun-kumar-824767191/" target="_blank"><i className="fab fa-linkedin fa-2x"></i> </a>
                <a className={styles.icon}  href="https://github.com/tarunpsv" target="_blank"><i className="fab fa-github fa-2x"></i> </a>
                <a className={styles.icon}  href="https://www.instagram.com/tarun_psv/" target="_blank"><i className="fab fa-instagram fa-2x"></i> </a>
                <a className={styles.icon}  href="https://www.facebook.com/people/Tarun-Kumar/100004212076527/" target="_blank"><i className="fab fa-facebook fa-2x"></i> </a>
            </div>

            <div className={styles.details}>
            
                <a className={styles.icon} href="mailto: tarunpsv@gmail.com"><i className="fas fa-envelope fa-lg"></i> tarunpsv@gmail.com</a>
            </div>

            <div className={styles.details}>
                <a className={styles.icon} href="#home"><i className="fas fa-phone fa-lg"></i> 6301763665</a>
            </div>

        </div>
    )
}

export default Contact;