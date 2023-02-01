import styles from '../styles/login.module.css'

export default function () {
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
            <br />
            <br />
            <form>
                <input className={styles.input} placeholder="Your Email" type="text" />
                <input className={styles.input} placeholder="Your Password" type="text" />
                <p style={{fontSize:"15px",color:"blueviolet"}}>Did n't have an account <a style={{color:"blue",cursor:"pointer"}}>SignUp</a></p>
                <div className={styles.notalign}>
                    <button>LogIn</button>
                </div>
            </form>
        </div>
    )
}