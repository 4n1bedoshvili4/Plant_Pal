import styles from "./About.module.css";


function About() {


    return (

        <section
            id="about"
            className={styles.section}
        >


            <div className={styles.container}>


                <div className={styles.text}>


                    <h2>
                        Your personal plant companion
                    </h2>


                    <p>
                        PlantPal helps plant lovers discover new
                        species, organize their personal collection,
                        and keep track of daily plant care.
                    </p>


                    <p>
                        Instead of managing plants with notes or
                        scattered information, PlantPal brings
                        everything together in one simple platform.
                    </p>


                </div>




                <div className={styles.card}>


                    <div className={styles.stat}>

                        <h3>
                            100+
                        </h3>

                        <p>
                            Plants to discover
                        </p>

                    </div>



                    <div className={styles.stat}>

                        <h3>
                            Easy
                        </h3>

                        <p>
                            Plant management
                        </p>

                    </div>



                    <div className={styles.stat}>

                        <h3>
                            Cloud
                        </h3>

                        <p>
                            Your collection saved safely
                        </p>

                    </div>


                </div>


            </div>


        </section>

    );

}


export default About;