import { NavLink } from "react-router-dom";

import styles from "./PublicNavbar.module.css";


function PublicNavbar() {
    
    function scrollToSection(id, event) {

        event.preventDefault();

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });

    }

    return (

        <nav className={styles.navbar}>





            <div className={styles.links}>


                <a
                    href="#about"
                    onClick={(event) => scrollToSection("about", event)}
                >
                    About
                </a>


                <a
                    href="#features"
                    onClick={(event) => scrollToSection("features", event)}
                >
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