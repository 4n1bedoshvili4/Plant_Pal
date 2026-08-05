import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";


function Navbar() {


    return (

        <nav className={styles.navbar}>


            <div className={styles.logo}>
                PlantPal
            </div>



            <div className={styles.links}>


                <NavLink
                    to="/"
                >
                    Login
                </NavLink>



                <NavLink
                    to="/register"
                >
                    Register
                </NavLink>



                <NavLink
                    to="/dashboard"
                >
                    Home
                </NavLink>



                <NavLink
                    to="/search"
                >
                    Explore Plants
                </NavLink>



                <NavLink
                    to="/plants"
                >
                    My Plants
                </NavLink>



                <NavLink
                    to="/reminders"
                >
                    Reminders
                </NavLink>



                <NavLink
                    to="/profile"
                >
                    Profile
                </NavLink>



            </div>


        </nav>

    );

}


export default Navbar;