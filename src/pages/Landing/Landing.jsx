import PublicNavbar from "../../components/PublicNavbar/PublicNavbar";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import styles from "./Landing.module.css";


function Landing() {


    return (

        <main className={styles.page}>


            <PublicNavbar />



            <section className={styles.hero}>


                <div className={styles.content}>


                    <div className={styles.brand}>

                        PlantPal

                    </div>




                    <h1>

                        Grow healthier plants
                        with ease.

                    </h1>




                    <p>

                        Discover plants, create your personal
                        collection, and manage your plant care
                        in one simple place.

                    </p>




                    <div className={styles.buttons}>


                        <button 
                            className={styles.primary}
                        >

                            Start Growing

                        </button>




                        <button 
                            className={styles.secondary}
                        >

                            Learn More

                        </button>



                    </div>


                </div>






                <div className={styles.imageSection}>


                    <div className={styles.imageCard}>


                        <img

                            src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b"

                            alt="Indoor plant"

                        />


                    </div>


                </div>



            </section>


            <About />


            <Features />





            <Footer />



        </main>

    );

}


export default Landing;