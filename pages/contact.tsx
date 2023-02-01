"useClient"

import { useState } from 'react';
import styles from '../styles/contact.module.css'

// import styles from "../style/about.module.css"
export default function About() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [country, setcontury] = useState("");
    const inputhandle = (e: any) => {
        if (e.target.name === "fullname") {
            setname(e.target.value)
        } else if (e.target.name === "email") {
            setemail(e.target.value)
        } else if (e.target.name === "phone") {
            setphone(e.target.value)
        } else if (e.target.name === "country")
            setcontury(e.target.value)
    }
    const handlechange = (e: any) => {
        e.preventDefault();

        let dataToStore = { name, email, phone, country }

        fetch('http://localhost:3000/api/hello', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToStore),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setname("");
                setphone("");
                setemail('');
                setcontury("");
                alert("Thanks For contacting us")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className={styles.body}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form method='POST' onSubmit={handlechange}>
                <main className={styles.mian}>
                    <label htmlFor="name">Your Full Name </label>
                    <input name='fullname' value={name} className={styles.inputField} onChange={inputhandle} type="text" id='name' />
                    <br />
                    <br />
                    <label htmlFor="email">Your E-mail </label>
                    <input name='email' value={email} className={styles.inputField} onChange={inputhandle} type="email" id='email' />
                    <p style={{color:"blueviolet"}}>We will never Share your Mail with Anyone</p>
                    {/* <br /> */}
                    <br />
                    <label htmlFor="phone">Phone Number </label>
                    <input name='phone' value={phone} className={styles.inputField} onChange={inputhandle} type="tel" id='phone' />
                    <br />
                    <br />
                    <label htmlFor="country">Description </label>
                    <input name='country' value={country} className={styles.inputField} onChange={inputhandle} type="text" id='country' />
                    <br />
                    <br />
                    <button>Submit</button>
                    <br />
                    <p style={{color:"blueviolet"}}>We will contact you as soon as possible</p>
                </main>
            </form>
        </div>
    )
}