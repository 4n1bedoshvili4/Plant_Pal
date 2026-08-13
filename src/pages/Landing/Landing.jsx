import PublicNavbar from "../../components/PublicNavbar/PublicNavbar";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import landingPlant from "../../assets/landing.jpg";

function Landing() {

    function scrollToSection(id, event) {

        event.preventDefault();

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });

    }

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


                    <Link
                        to="/register"
                        className={styles.primary}
                    >

                        Start Growing

                    </Link>




                    <a
                        href="#about"
                        className={styles.secondary}
                        onClick={(event) => scrollToSection("about", event)}
                    >

                        Learn More

                    </a>


                </div>


                </div>






                <div className={styles.imageSection}>


                    <div className={styles.imageCard}>

                    <img
                        src={landingPlant}
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