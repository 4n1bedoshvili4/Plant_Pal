import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Brand.module.css";


function Brand() {


    return (

        <Link
            to="/dashboard"
            className={styles.brand}
        >

            <div className={styles.logoWrapper}>
                <Logo />
            </div>


            <span>
                PlantPal
            </span>


        </Link>

    );

}


export default Brand;