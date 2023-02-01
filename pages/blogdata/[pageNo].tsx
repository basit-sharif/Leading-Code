import styles from '../../styles/slug.module.css'

import * as fs from 'fs'
import { useRouter } from "next/router"
import { useState } from "react";
export default function Blogs(props: any) {
    const [blog, setblog] = useState(props.propsdata);
    const router = useRouter();
    let slug = router.query.pageNo;
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
            {
                blog.map((item: any) => {
                    if (slug === item.link) {
                        return (
                            <>
                                <div className={styles.mian}>
                                    <h2 className={styles.heading}>{item.title}</h2>
                                    <br />
                                    <fieldset>
                                        <p className={styles.content}>{item.description}</p>
                                        <br />
                                    </fieldset>
                                        <p className={styles.writer}>Writer : {item.writer}</p>
                                </div>

                            </>
                        )
                    }
                })
            }
        </div>
    )
}



export async function getServerSideProps(context: any) {
    let apiorgdata = await fetch(`http://localhost:3000/api/blog?${context.query}`);
    let propsdata = await apiorgdata.json();
    console.log(propsdata)
    return {
        props: { propsdata },
    }
}