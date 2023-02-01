import styles from '../styles/makeblogwithcontact.module.css'
import Link from "next/link"
import { useState } from 'react'

export default function () {
    const [getpassword , setpassword] = useState('');
    const changepasword = (e:any) =>{
        setpassword(e.target.value)
    }
    const checkpass = () =>{
        if(getpassword === "passblog"){
            // alert("Correct Pass");
            window.location.href = "makeblog"
        }else{
            alert("Wrong Password")
        }
    }
    return (
        <>
            <main className={styles.body}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <fieldset className={styles.fieldset}>
                <h2>Password That is provieded on your Mail</h2>
                <input type="password" onChange={changepasword} value={getpassword} placeholder='Password' />
                <p>Did not have Password <Link href="contact"><span style={{ color: "blue" }}>Contact US</span></Link> </p>
                <button onClick={checkpass}>Continue</button>
                </fieldset>
            </main>
        </>
    )
}