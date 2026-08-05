import { NavLink } from "react-router-dom";

import styles from "./Footer.module.css";


function Footer() {


    return (

        <footer className={styles.footer}>


            <div className={styles.container}>


                <div className={styles.brand}>


                    <h2>
                        PlantPal
                    </h2>


                    <p>
                        Your personal plant companion.
                        Discover, organize and care for your plants.
                    </p>


                </div>





                <div className={styles.column}>


                    <h3>
                        Explore
                    </h3>


                    <NavLink to="/about">
                        About
                    </NavLink>


                    <NavLink to="/features">
                        Features
                    </NavLink>


                    <NavLink to="/login">
                        Login
                    </NavLink>


                </div>





                <div className={styles.column}>


                    <h3>
                        Contact
                    </h3>


                    <p>
                        hello@plantpal.com
                    </p>


                    <p>
                        Tbilisi, Georgia
                    </p>


                </div>


            </div>





            <div className={styles.bottom}>


                © 2026 PlantPal. All rights reserved.


            </div>


        </footer>

    );

}


export default Footer;