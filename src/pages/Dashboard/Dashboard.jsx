import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Brand from "../../components/Brand/Brand";

function Dashboard() {

    const { user, loading } = useAuth();

    if (loading) {
    return <h1>Loading...</h1>;
    }
    return (

        <div className={styles.dashboard}>

            <aside className={styles.sidebar}>

                <Brand />


            <nav>

                <Link 
                    className={styles.active}
                    to="/dashboard"
                >
                    🏡 Dashboard
                </Link>


                <Link to="/search">
                    🔍 Search Plants
                </Link>


                <Link to="/plants">
                    🌿 My Plants
                </Link>


                <Link to="/reminders">
                    💧 Reminders
                </Link>


                <Link to="/profile">
                    👤 Profile
                </Link>

            </nav>


            </aside>



            <main className={styles.content}>


                 <h1>
                    Good morning, {user?.email} 🌱
                </h1>

                <p className={styles.subtitle}>
                    Let's take care of your plants today
                </p>



                <div className={styles.cards}>


                    <div className={styles.card}>

                        <h3>
                            🌿 My Plants
                        </h3>

                        <p>
                            6 plants in your collection
                        </p>

                    </div>



                    <div className={styles.card}>

                        <h3>
                            💧 Water Today
                        </h3>

                        <p>
                            2 plants need watering
                        </p>

                    </div>



                    <div className={styles.card}>

                        <h3>
                            ☀️ Light Status
                        </h3>

                        <p>
                            All plants are healthy
                        </p>

                    </div>


                </div>



                <section className={styles.plants}>

                    <h2>
                        Your Plants
                    </h2>


                    <div className={styles.plantGrid}>


                        <div className={styles.plantCard}>
                            🌿
                            <h3>Monstera</h3>
                            <p>Water every 7 days</p>
                        </div>


                        <div className={styles.plantCard}>
                            🌵
                            <h3>Aloe Vera</h3>
                            <p>Water every 14 days</p>
                        </div>


                        <div className={styles.plantCard}>
                            🌱
                            <h3>Snake Plant</h3>
                            <p>Low maintenance</p>
                        </div>


                    </div>


                </section>


            </main>


        </div>

    );
}


export default Dashboard;