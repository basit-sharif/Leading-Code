"useClient"
import { useState } from "react";
import styles from "../styles/makeblog.module.css"
export default function () {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [date, setdate] = useState("");
    const [writer, setwriter] = useState("")
    const [link , setlink ] = useState("")

    const inputhandle = (e: any) => {
        if (e.target.name === "title") {
            settitle(e.target.value)
        } else if (e.target.name === "description") {
            setdescription(e.target.value)
        } else if (e.target.name === "date") {
            setdate(e.target.value)
        } else if (e.target.name === "writer") {
            setwriter(e.target.value)
        }else if(e.target.name === "link"){
            setlink(e.target.value)
        }
    }


    const handlechange = (e: any) => {
        e.preventDefault();

        let dataToStore = { title, description, date , writer , link}

        fetch('http://localhost:3000/api/blogpost', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToStore),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                settitle("");
                setdescription("");
                setdate('');
                setwriter("");
                setlink("");
                alert("Thanks For making Blog")
            })
            .catch((error) => {
                console.error('Error:', error);
            });

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
                <h2 className={styles.writeABlogPost}>Write a Blog Post</h2>
                <br />
                <fieldset className={styles.fieldset}>
                    <label htmlFor="title">Your Blog Title </label>
                    <br />
                    {/* <input name="title" type="text" id="title" /> */}
                    <input value={title} onChange={inputhandle} name="title" type="text" id="title" />
                    <br />
                    <label htmlFor="description">Your Blog Content </label>
                    <br />
                    {/* <textarea name="description" style={{ width: "70%", height: "14rem", border: "1px solid green" }} className="description" /> */}
                    <textarea value={description} onChange={inputhandle} name="description" className={styles.description} />
                    <br />
                    <label htmlFor="date">Date when Published</label>
                    <br />
                    {/* <input name="date" type="date" id="date" /> */}
                    <input value={date} onChange={inputhandle} name="date" type="date" id="date" />
                    <br />
                    <label htmlFor="writer">Blog Writer </label>
                    <br />
                    {/* <input name="writer" type="text" id="writer" /> */}
                    <input value={writer} onChange={inputhandle} name="writer" type="text" id="writer" />
                    <br />
                    <label htmlFor="link">Link for accessing Blog || Title</label>
                    <br />
                    <input value={link} onChange={inputhandle} name="link" type="text" id="link" /> 
                    <p>i.e link-for-your-blog</p>
                    <br />
                    <button onClick={handlechange}>Submit</button>
                </fieldset>
            </main>
        </>
    )
}
