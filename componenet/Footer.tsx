import Link from "next/link"
import Image from "next/image"
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.div1}>
                    <Image alt='Leading Code' src="/logo3.png" width="350" height="128" />
                    <p>The Solution Provider of all the Coding Problem.</p>
                    <div className={styles.nextimg}>
                            <Link target="_blank" href={"https://github.com/basitgggg"}><Image alt='Github' src="/bxl-github.svg" width="40" height="18" /></Link>
                            <Link target="_blank" href={"https://web.facebook.com/profile.php?id=100053174165999"}><Image alt='Facebook' src="/bxl-facebook-square.svg" width="40" height="18" /></Link>
                            <Link target="_blank" href={"mailto:ba3568008@gmail.com"}><Image alt='Gmail' src="/bxl-gmail.svg" width="40" height="18" /></Link>
                            <Link target="_blank" href={"https://linkedin.com/in/abdul-basit-417920251/"}><Image alt='LinkedIn Code' src="/bxl-linkedin-square.svg" width="40" height="18" /></Link>
                            <Link target="_blank" href={""}><Image alt='Whatsapp' src="/bxl-whatsapp.svg" width="40" height="18" /></Link>
                            <Link target="_blank" href={"https://www.youtube.com/@leadingbright2580"}><Image alt='Youtube' src="/bxl-youtube.svg" width="40" height="18" /></Link>
                        </div>

                </div>
                <div className={styles.div2}>
                    <h6>If you have any query then paste here your Problem</h6>
                    <div className={styles.emailgetter}>
                        <input type="text" placeholder="Ask Question" /><button>Submit</button>
                    </div>
                </div>
                <div className={styles.div3}>
                    <p>Our Services</p>
                    <div className={styles.followus}>
                        <p>Service 1</p>
                        <p>Service 2</p>
                        <p>Service 3</p>
                        <p>Service 4</p>
                        <p>Service 5</p>
                        <p>Service 6</p>
                        <p>Service 7</p>
                        <p>Service 8</p>
                        <p>Service 9</p>
                    </div>
                </div>
                <div className={styles.div4}>
                    <p>Call US</p>
                    <p>021 9344234 3423</p>
                </div>
                <br />
            </footer>
            <div className={styles.copyright}>
                <p>Copyright <a style={{ cursor:"auto"}} target="_blank" href="http://localhost:3000/api/hello">©</a> 2023 Leading Cod<a style={{ cursor:"auto"}} target="_blank" href="http://localhost:3000/api/blogpost">e</a></p>
            </div>
        </>
    )
}