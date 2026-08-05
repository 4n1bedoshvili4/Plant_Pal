import { NavLink } from "react-router-dom";

import styles from "./PublicNavbar.module.css";


function PublicNavbar() {


    return (

        <nav className={styles.navbar}>





            <div className={styles.links}>


                <a href="#about">
                    About
                </a>


                <a href="#features">
                    Features
                </a>


                <NavLink to="/login">
                    Login
                </NavLink>


                <NavLink
                    to="/register"
                    className={styles.signup}
                >
                    Get Started
                </NavLink>


            </div>


        </nav>

    );

}


export default PublicNavbar;