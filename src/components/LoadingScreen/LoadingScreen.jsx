import styles from "./LoadingScreen.module.css";
import Logo from "../Logo/Logo";

function LoadingScreen({ text = "Loading..." }) {
    return (
        <div className={styles.overlay}>

            <div className={styles.container}>

                <Logo />
                <p>{text}</p>

                <div className={styles.dots}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

        </div>
    );
}

export default LoadingScreen;