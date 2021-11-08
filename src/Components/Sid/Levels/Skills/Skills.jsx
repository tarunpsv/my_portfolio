import React from "react";
import styles from "./Skills.module.css";
import {Grid} from "@material-ui/core";
import Tilt from "react-parallax-tilt";
import {SiCplusplus, SiJavascript} from "react-icons/si";
import {FaReact, FaHtml5, FaGitAlt, FaNode} from "react-icons/fa";
import {GrMysql} from "react-icons/gr";
import {DiCss3} from "react-icons/di";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
    Aos.init({
        delay: 100,
        duration: 3000
    })

    return (
        <div id="skills" className={styles.container}>
            <h1 className={styles.heading}>SKILLS</h1>
            <Grid container spacing={6} justifyContent="center">
                <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="zoom-out">
                    <Tilt className={styles.skillBox}>
                        <div>
                            <SiCplusplus size="5.5rem" />
                        </div>
                        <div className={styles.skillName}>C++</div>
                    </Tilt>
                </Grid>

                <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="zoom-in">
                    <Tilt className={styles.skillBox}>
                        <div>
                            <FaHtml5 size="5.5rem" />
                        </div>
                        <div className={styles.skillName}>HTML</div>
                    </Tilt>
                </Grid>

                <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="zoom-out">
                    <Tilt className={styles.skillBox}>
                        <div>
                            <DiCss3 size="5.5rem" />
                        </div>
                        <div className={styles.skillName}>CSS</div>
                    </Tilt>
                </Grid>

                <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="zoom-in">
                    <Tilt className={styles.skillBox}>
                        <div>
                            <SiJavascript size="5.5rem" />
                        </div>
                        <div className={styles.skillName}>Javascript</div>
                    </Tilt>
                </Grid>

                <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="zoom-in">
                    <Tilt className={styles.skillBox}>
                        <div>
                            <FaGitAlt size="5.5rem" />
                        </div>
                        <div className={styles.skillName}>Git</div>
                    </Tilt>
                </Grid>

                <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="zoom-out">
                    <Tilt className={styles.skillBox}>
                        <div>
                            <GrMysql size="5.5rem" />
                        </div>
                        <div className={styles.skillName}>MySQL</div>
                    </Tilt>
                </Grid>

                <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="zoom-in">
                    <Tilt className={styles.skillBox}>
                        <div>
                            <FaNode size="5.5rem" />
                        </div>
                        <div className={styles.skillName}>Node JS</div>
                    </Tilt>
                </Grid>

                <Grid item xs={6} sm={4} md={3} className={styles.grid} data-aos="zoom-out">
                    <Tilt className={styles.skillBox}>
                        <div>
                            <FaReact size="5.5rem" />
                        </div>
                        <div className={styles.skillName}>React JS</div>
                    </Tilt>
                </Grid>

                

            </Grid>
        </div>
    )
}

export default Skills;