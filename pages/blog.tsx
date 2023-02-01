import Link from "next/link";
import { useState } from "react";
import styles from "../styles/blog.module.css"






export default function GetBlog(props: any) {
    const [blogs, setblog] = useState(props.propsdata)

    return (
        <div className={styles.body}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <main className={styles.main}>
                <div className={styles.blogs}>
                    <h1 style={{ margin: "0 0 3rem 0", color: "blue" }}> Latest Blogs</h1>
                    {
                        blogs.map((item: any) => {
                            return (
                                    <div className={styles.blogitem}>
                                        <h3><Link href={`blogdata/${item.link}`}>{item.title}</Link></h3>
                                        <p><Link href={`blogdata/${item.link}`}>{item.description.substr(0, 107)}...
                                            <button className={styles.squarebtn}><Link href={`blogdata/${item.link}`}>Rear More</Link></button>
                                        </Link>
                                        </p>
                                        <br />
                                        <h6>Dated : {item.date}</h6>
                                    </div>
                            )
                        })

                    }
                </div>

                <br />
                <button className={styles.makeblog}><Link href="/makeblogwithcorrectpass">Make a Blog</Link></button>
            </main >
        </div >
    )
}




export async function getServerSideProps(context: any) {
    let apiorgdata = await fetch("http://localhost:3000/api/blog");
    let propsdata = await apiorgdata.json();

    return {
        props: { propsdata },
    }
}