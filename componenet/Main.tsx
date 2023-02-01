import Link from 'next/link'
import styles from '../styles/main.module.css'
import Image from 'next/image'

export default function Main() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.firstQuater}>
                    {/* <div className={styles.logo}></div> */}
                    <Image className={styles.logo} alt='Calculator' src="/cal.png" width="390" height="290" />
                    <div className={styles.logocontent}>
                        <p>This is my First JavaScript Course Design for Absolute Bigenners and Programers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo dolorum officiis, explicabo porro voluptatibus nesciunt repudiandae esse corrupti odit qui dignissimos dolor quaerat autem velit, earum aut fugit molestias illum libero assumenda a nostrum animi minus. Ab tempore tempora earum perferendis qui est commodi ducimus nisi ratione doloribus, temporibus nihil facere, quis a modi soluta. Eum consequatur aliquam ut id! Corporis, saepe eum! Blanditiis facilis nesciunt natus a iste sit dolor, distinctio placeat quisquam nulla, similique voluptates. Expedita sed, obcaecati rem magni ipsa aliquam in itaque nihil provident quos harum doloribus mollitia ea! Consectetur sit eum id optio laboriosam itaque, placeat enim saepe perspiciatis, alias deleniti, voluptate cupiditate sed et sint quia tempora provident sapiente debitis neque rem vitae. Sunt sapiente perferendis animi debitis excepturi beatae autem non atque illum quidem amet libero alias. </p>
                    </div>
                </div>
                <div className={styles.firstQuater}>
                    {/* <div className={styles.logo}></div> */}
                    <Image className={styles.logo} alt='Video-Player' src="/v-p.png" width="390" height="290" />
                    <div className={styles.logocontent}>
                        <p>This is my First JavaScript Course Design for Absolute Bigenners and Programers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo dolorum officiis, explicabo porro voluptatibus nesciunt repudiandae esse corrupti odit qui dignissimos dolor quaerat autem velit, earum aut fugit molestias illum libero assumenda a nostrum animi minus. Ab tempore tempora earum perferendis qui est commodi ducimus nisi ratione doloribus, temporibus nihil facere, quis a modi soluta. Eum consequatur aliquam ut id! Corporis, saepe eum! Blanditiis facilis nesciunt natus a iste sit dolor, distinctio placeat quisquam nulla, similique voluptates. Expedita sed, obcaecati rem magni ipsa aliquam in itaque nihil provident quos harum doloribus mollitia ea! Consectetur sit eum id optio laboriosam itaque, placeat enim saepe perspiciatis, alias deleniti, voluptate cupiditate sed et sint quia tempora provident sapiente debitis neque rem vitae. Sunt sapiente perferendis animi debitis excepturi beatae autem non atque illum quidem amet libero alias. </p>
                    </div>
                </div>
            </div>

            <div className={styles.containers}>
                <h2>Recomended Videos</h2>
                <div className={styles.container}>
                    <div>
                        <Link target="_blank" href="https://www.youtube.com/watch?v=hWh9Y6a7014"><Image className={styles.Imagee} alt='Dots' src="/JavaScript full Course for Bignners in HindiUrdu.png" width="365" height="240" /></Link>
                        <h4 style={{ marginLeft: "1rem", marginTop: "8px" }}>Free Course</h4>
                        <p style={{ marginLeft: "1rem", marginTop: "8px" }}>In this video you will learn Beginners JavaScript Class1 Alert Box</p>
                        <button className={styles.watchvideo}><Link target="_blank" href='https://www.youtube.com/watch?v=hWh9Y6a7014'>Watch Video</Link></button>
                    </div>
                    <div>
                        <Link target="_blank" href="https://www.youtube.com/watch?v=kfOMljiGUNo"><Image className={styles.Imagee} alt='Dots' src="/class2.jpg" width="365" height="240" /></Link>
                        <h4 style={{ marginLeft: "1rem", marginTop: "8px" }}>Free Course</h4>
                        <p style={{ marginLeft: "1rem", marginTop: "8px" }}>In this video you will learn How to use Vs Code for coding In JavaScript etc ...</p>
                        <button className={styles.watchvideo}><Link target="_blank" href={"https://www.youtube.com/watch?v=kfOMljiGUNo"}>Watch Video</Link></button>
                    </div>
                    <div>
                        <Link target="_blank" href={"https://www.youtube.com/playlist?list=PL0VhnZARkgZN4Lp51yQbWl7Tm7Nq73Jyt"}><Image className={styles.Imagee} alt='Dots' src="/img1.jpg" width="365" height="240" /></Link>
                        <h4 style={{ marginLeft: "1rem", marginTop: "8px" }}>Free Course</h4>
                        <p style={{ marginLeft: "1rem", marginTop: "8px" }}>In this PlayList you will learn All about JavaScript JavaScript full Course for Bignners in Hindi/Urdu</p>
                        <button className={styles.watchvideo}><Link target="_blank" href={"https://www.youtube.com/playlist?list=PL0VhnZARkgZN4Lp51yQbWl7Tm7Nq73Jyt"}>Watch Video</Link></button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className={styles.parteners}>

                <h2>Our Partner</h2>
                <div className={styles.partener}>
                    <div>
                        <Image className={styles.Image} alt='Abdul-Basit' src="/abdul-basit.jpg" width="90" height="90" />
                        <h3>Abdul-Basit</h3>
                        <p>Ceo</p>
                    </div>
                    <div>
                        <Image className={styles.Image} alt='Abdul-Basit' src="/abdul-basit.jpg" width="90" height="90" />
                        <h3>Abdul-Basit</h3>
                        <p>Ceo</p>
                    </div>
                    <div>
                        <Image className={styles.Image} alt='Abdul-Basit' src="/abdul-basit.jpg" width="130" height="130" />
                        <h3>Abdul-Basit</h3>
                        <p>Ceo</p>
                    </div>
                    <div>
                        <Image className={styles.Image} alt='Abdul-Basit' src="/abdul-basit.jpg" width="90" height="90" />
                        <h3>Abdul-Basit</h3>
                        <p>Ceo</p>
                    </div>
                    <div>
                        <Image className={styles.Image} alt='Abdul-Basit' src="/abdul-basit.jpg" width="90" height="90" />
                        <h3>Abdul-Basit</h3>
                        <p>Ceo Code</p>
                    </div>
                </div>
                <Image alt='Dots' src="/three-dots.svg" width="100" height="55" />
                <button className={styles.btn}>View More</button>
            </div>
            <div className={styles.comment}>
                <fieldset>
                    <legend>"</legend>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptate perspiciatis modi, nihil atque dolorum eum explicabo magni ipsa, corrupti ipsum, numquam doloribus. Perspiciatis numquam doloribus, magnam error maxime mollitia aliquam, fuga nemo rerum suscipit veritatis laudantium molestias aliquid, maiores cupiditate libero quo quibusdam fugiat veniam! Officia incidunt delectus ipsa assumenda esse! Soluta vero omnis quas placeat, expedita in harum nostrum nam voluptates tenetur laudantium earum impedit, facilis, libero quaerat id ratione laboriosam? Consequuntur expedita rem ut quis modi sint ad, beatae ducimus vel facere quas iste eaque fuga, hic, corporis iure aliquam animi. Eligendi, sed? Fugit nesciunt asperiores corporis consectetur voluptas dolorum vel hic, velit perferendis accusantium. Nulla beatae error dolorem nobis non ad officia voluptatum commodi praesentium modi qui magnam, sint veritatis vel dolore eveniet repellendus, porro, nihil dicta quibusdam. Numquam facere velit facilis alias modi praesentium beatae officiis obcaecati sapiente perspiciatis excepturi quam vitae labore, libero unde ducimus veniam, veritatis neque sit rem incidunt fugit suscipit! Nam et veritatis quas minus accusamus dolorem illum cum doloremque consequatur, ipsa exercitationem sequi earum odio ex autem. Neque pariatur animi magni totam earum quidem excepturi? Corrupti voluptas odit laudantium odio et! Minus nobis officiis odit quidem aliquid similique laborum sed, numquam temporibus officia fuga modi nulla molestias aut recusandae beatae, aliquam consectetur quae tempora sapiente voluptates magnam! Repellendus consequatur et rem eveniet. Corporis et amet vero atque omnis sapiente dolor esse, adipisci rerum veniam saepe ipsum, asperiores autem quam fugit harum! Dolore nulla, ipsa quo veritatis quis eum natus ad, culpa minus vero odit incidunt ea mollitia deserunt? Explicabo, repellat odit. Ullam eum sunt id culpa eveniet officia. Dolorum iure, eum commodi laudantium, fugit culpa deserunt maiores praesentium quod excepturi rerum unde blanditiis ipsa dolor exercitationem saepe itaque odio error, animi quo. Tenetur et eveniet neque voluptates possimus. Non doloremque eligendi dolorem architecto in cum dolorum nisi illo sed, fugiat expedita eos nesciunt quo numquam voluptatem ex ad illum, beatae iste minima quibusdam. Ducimus dolorum aut officia accusamus laudantium facilis soluta. Delectus ab sunt eos quis reiciendis possimus reprehenderit earum, est molestias quam aliquam blanditiis repellat? Amet iste sed dignissimos natus nostrum, accusamus enim nemo ad quo rem atque, modi perferendis exercitationem, accusantium magnam veritatis? Aliquam dolor, molestias facilis possimus quibusdam placeat vel at ipsum magni perspiciatis iure tempore repellat tempora dignissimos, sapiente eos inventore excepturi! Quibusdam dolores laboriosam pariatur quis placeat beatae facere libero ab dicta, debitis eum nulla.</p>
                </fieldset>
                <fieldset>
                    <legend>"</legend>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptate perspiciatis modi, nihil atque dolorum eum explicabo magni ipsa, corrupti ipsum, numquam doloribus. Perspiciatis numquam doloribus, magnam error maxime mollitia aliquam, fuga nemo rerum suscipit veritatis laudantium molestias aliquid, maiores cupiditate libero quo quibusdam fugiat veniam! Officia incidunt delectus ipsa assumenda esse! Soluta vero omnis quas placeat, expedita in harum nostrum nam voluptates tenetur laudantium earum impedit, facilis, libero quaerat id ratione laboriosam? Consequuntur expedita rem ut quis modi sint ad, beatae ducimus vel facere quas iste eaque fuga, hic, corporis iure aliquam animi. Eligendi, sed? Fugit nesciunt asperiores corporis consectetur voluptas dolorum vel hic, velit perferendis accusantium. Nulla beatae error dolorem nobis non ad officia voluptatum commodi praesentium modi qui magnam, sint veritatis vel dolore eveniet repellendus, porro, nihil dicta quibusdam. Numquam facere velit facilis alias modi praesentium beatae officiis obcaecati sapiente perspiciatis excepturi quam vitae labore, libero unde ducimus veniam, veritatis neque sit rem incidunt fugit suscipit! Nam et veritatis quas minus accusamus dolorem illum cum doloremque consequatur, ipsa exercitationem sequi earum odio ex autem. Neque pariatur animi magni totam earum quidem excepturi? Corrupti voluptas odit laudantium odio et! Minus nobis officiis odit quidem aliquid similique laborum sed, numquam temporibus officia fuga modi nulla molestias aut recusandae beatae, aliquam consectetur quae tempora sapiente voluptates magnam! Repellendus consequatur et rem eveniet. Corporis et amet vero atque omnis sapiente dolor esse, adipisci rerum veniam saepe ipsum, asperiores autem quam fugit harum! Dolore nulla, ipsa quo veritatis quis eum natus ad, culpa minus vero odit incidunt ea mollitia deserunt? Explicabo, repellat odit. Ullam eum sunt id culpa eveniet officia. Dolorum iure, eum commodi laudantium, fugit culpa deserunt maiores praesentium quod excepturi rerum unde blanditiis ipsa dolor exercitationem saepe itaque odio error, animi quo. Tenetur et eveniet neque voluptates possimus. Non doloremque eligendi dolorem architecto in cum dolorum nisi illo sed, fugiat expedita eos nesciunt quo numquam voluptatem ex ad illum, beatae iste minima quibusdam. Ducimus dolorum aut officia accusamus laudantium facilis soluta. Delectus ab sunt eos quis reiciendis possimus reprehenderit earum, est molestias quam aliquam blanditiis repellat? Amet iste sed dignissimos natus nostrum, accusamus enim nemo ad quo rem atque, modi perferendis exercitationem, accusantium magnam veritatis? Aliquam dolor, molestias facilis possimus quibusdam placeat vel at ipsum magni perspiciatis iure tempore repellat tempora dignissimos, sapiente eos inventore excepturi! Quibusdam dolores laboriosam pariatur quis placeat beatae facere libero ab dicta, debitis eum nulla.</p>
                </fieldset>
            </div>
            <div className={styles.gototop}>
                <button>
                    <Link style={{ cursor: "pointer", }} href={"/"}>
                        <Image alt='Dots' src="/bx-arrow-to-top.svg" width="65" height="35" />
                        Go to top
                    </Link>
                </button>
            </div>
        </>
    )
}