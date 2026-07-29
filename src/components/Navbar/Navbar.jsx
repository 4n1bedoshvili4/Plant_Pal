import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


function Navbar() {


    return (

        <nav className={styles.navbar}>


            <Link
                to="/dashboard"
                className={styles.logo}
            >
                PlantPal
            </Link>




            <div className={styles.links}>


                <Link to="/dashboard">
                    Dashboard
                </Link>



                <Link to="/search">
                    Search
                </Link>



                <Link to="/myplants">
                    My Plants
                </Link>


            </div>


        </nav>

    );

}


export default Navbar;