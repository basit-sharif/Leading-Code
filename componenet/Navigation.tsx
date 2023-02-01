import styles from '../styles/Home.module.css'

import Link from "next/link"
import Image from "next/image"
export default function Navigation() {
    return (
        <>
            <div className={styles.navigationFirst}>
                <div><Link href="/"><Image alt='Home' src="/home.svg" width="25" height="17" />Home</Link></div>
                <div><Link href="/blog">Blogs</Link></div>
                <div><Link href="/projects">Projects</Link></div>
                <div><Link href="/about">About</Link></div>
                <div><Link href="/contact">Contact</Link></div>
            </div>

        </>
    )
}