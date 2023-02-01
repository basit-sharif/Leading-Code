import Image from 'next/image'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navigation from '../componenet/Navigation'

export default function App({ Component, pageProps }: AppProps) {
  const showprofile = () => {
    let pr = document.getElementById("flexenable");
    if (pr) {
      if (pr.style.display === "none") {
        pr.style.display = "flex"

      } else {
        pr.style.display = "none"
      }
    }
  }
  const disappearlogin = () => {
    let pr = document.getElementById("flexenable");
    if (pr) {
      pr.style.display = "none"
    }
  }

  return (
    <>
      <div className={styles.description}>
        <nav>
          <div className={styles.profile}>
            <Image onClick={showprofile} className={styles.profilepic} alt='Abdul-Basit' src="/abdul-basit.jpg" width="50" height="46" />
            <div id='flexenable' className={styles.showprofilebox}>
              <div>
                <div>
                </div>
                <h2 className={styles.prname}>
                  <Image onClick={showprofile} style={{ margin: "0 0 0 1.4rem", borderRadius: "48%" }} alt='Abdul-Basit' src="/abdul-basit.jpg" width="80" height="78" />

                </h2>
                <h2 style={{ margin: '-5.5rem 0 0 0', fontFamily: "vardana" }}>Abdul-Basit</h2>
              </div>
              <button onClick={disappearlogin}><Link href="login">LogIn</Link></button>
            </div>
          </div>
          <p>
            {/* <ul>
              <li><Link href="/"><Image alt='Home' src="/home.svg" width="25" height="17" />Home</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul> */}
            {/* <div className={styles.navigationFirst}>
              <div><Link href="/"><Image alt='Home' src="/home.svg" width="25" height="17" />Home</Link></div>
              <div><Link href="/blog">Blogs</Link></div>
              <div><Link href="/projects">Projects</Link></div>
              <div><Link href="/about">About</Link></div>
              <div><Link href="/contact">Contact</Link></div>
            </div> */}
            <Navigation />
          </p>
          <Image className={styles.logo} alt='Leading Code' src="/logo3.png" width="350" height="128" />
          <Image onClick={showprofile} className={styles.profilePicForMobile} alt='Abdul-Basit' src="/abdul-basit.jpg" width="50" height="46" />

        </nav>
      </div>

      <Component {...pageProps} />
    </>
  )
}
