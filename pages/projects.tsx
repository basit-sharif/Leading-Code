import Link from "next/link"
import Image from "next/image"
import styles from "../styles/project.module.css"
export default function Project() {
    return (
        <div className={styles.body}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.project}>
                <h1 style={{ color: "blueviolet", marginBottom: "4rem" }}>My Project Description</h1>
                <div className={styles.projects}>
                    <div>
                        <Link target="_blank" href={"https://venerable-bonbon-c5e48e.netlify.app/"}><Image className={styles.Image} alt='Abdul-Basit' src="/n-g-g.png" width="364" height="250" id="label" /></Link>
                        <h5 style={{ marginLeft: "1.4rem", marginTop: "8px" }}>Free Code</h5>
                        <p style={{ marginLeft: "1.4rem", marginTop: "8px", marginBottom: "10px" }}>My Number-Guessing Game Project .This is also available on github i mean its code is on Github <a target="_blank" style={{color:"blue"}} href="https://github.com/basitgggg/JavaScript-Projects/tree/master/Buli%20A%20game%20using%20js%20html%20css">View on Github</a></p>
                        <button className={styles.btn}><Link target="_blank" href={"https://venerable-bonbon-c5e48e.netlify.app/"} >Explore Project</Link></button>
                    </div>
                    <div>
                        <Link target="_blank" href={"https://silver-tanuki-8ab16e.netlify.app/"} ><Image className={styles.Image} alt='Calculator' src="/cal.png" width="364" height="250" id="label" /></Link>
                        <h5 style={{ marginLeft: "1.4rem", marginTop: "8px" }}>Free Code</h5>
                        <p style={{ marginLeft: "1.4rem", marginTop: "8px", marginBottom: "10px" }}>My Calculator Project .This is also available on github i mean its code is on Github <a target="_blank" style={{color:"blue"}} href="https://github.com/basitgggg/JavaScript-Projects/tree/master/Calculator">View on Github</a></p>
                        <button className={styles.btn}><Link target="_blank" href={"https://silver-tanuki-8ab16e.netlify.app/"} >Explore Project</Link></button>
                    </div>
                    <div>
                        <Link target="_blank" href={"https://calm-meerkat-adf623.netlify.app/"} ><Image className={styles.Image} alt='Quiz App' src="/q-a.png" width="364" height="250" id="label" /></Link>
                        <h5 style={{ marginLeft: "1.4rem", marginTop: "8px" }}>Free Code</h5>
                        <p style={{ marginLeft: "1.4rem", marginTop: "8px", marginBottom: "10px" }}>My first Todo Project This is also available on github i mean its code is on github and you wana to go<a target="_blank" href="">View on Github</a></p>
                        <button className={styles.btn}><Link target="_blank" href={"https://calm-meerkat-adf623.netlify.app/"} > Explore Project</Link></button>
                    </div>
                </div>



                <div className={styles.projects}>
                    <div>
                        <Link target="_blank" href={"https://legendary-cheesecake-93307a.netlify.app/"} ><Image className={styles.Image} alt='Scroll-Bar' src="/sc-ba.png" width="364" height="250" id="label" /></Link>
                        <h5 style={{ marginLeft: "1.4rem", marginTop: "8px" }}>Free Code</h5>
                        <p style={{ marginLeft: "1.4rem", marginTop: "8px", marginBottom: "10px" }}>My first Todo Project This is also available on github i mean its code is on github and you wana to go<a target="_blank" href="">View on Github</a></p>
                        <button className={styles.btn}><Link target="_blank" href={"https://legendary-cheesecake-93307a.netlify.app/"} >Explore Project</Link></button>
                    </div>
                    <div>
                        <Link target="_blank" href={"https://aquamarine-figolla-7f033e.netlify.app/"}><Image className={styles.Image} alt='Video-Player' src="/v-p.png" width="364" height="250" id="label" /></Link>
                        <h5 style={{ marginLeft: "1.4rem", marginTop: "8px" }}>Free Code</h5>
                        <p style={{ marginLeft: "1.4rem", marginTop: "8px", marginBottom: "10px" }}>My first Todo Project This is also available on github i mean its code is on github and you wana to go<a target="_blank" href="">View on Github</a></p>
                        <button className={styles.btn}><Link target="_blank" href={"https://aquamarine-figolla-7f033e.netlify.app/"}>Explore Project</Link></button>
                    </div>
                    <div>
                        <Link target="_blank" href={"https://glittery-strudel-96dd8f.netlify.app/"}><Image className={styles.Image} alt='University-Managment' src="/u-m-s.png" width="364" height="250" id="label" /></Link>
                        <h5 style={{ marginLeft: "1.4rem", marginTop: "8px" }}>Free Code</h5>
                        <p style={{ marginLeft: "1.4rem", marginTop: "8px", marginBottom: "10px" }}>My University-Managment Project is Most Beautifull.This is also available on github I mean its code is on Github<a target="_blank" style={{color:"blue"}} href="https://github.com/basitgggg/University-Managment/tree/master/New">View on Github</a></p>
                        <button className={styles.btn}> Explore Project</button>
                    </div>

                </div>


            </div>
            <p style={{margin:"3rem "}}>I have made that all Projects</p>
        </div>
    )
}