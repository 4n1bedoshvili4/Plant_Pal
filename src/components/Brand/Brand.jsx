import { Link } from "react-router-dom";
import styles from "./Brand.module.css";


function Brand() {

    return (

        <Link 
            to="/dashboard"
            className={styles.brand}
        >

            <span className={styles.icon}>
                🌱
            </span>

            <span>
                PlantPal
            </span>

        </Link>

    );

}


export default Brand;