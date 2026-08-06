import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Brand from "../../components/Brand/Brand";
import { useEffect, useState } from "react";
import { getUserProfile } from "../../services/firestoreService";
import monstera from "../../assets/monstera.png";

import {
    FiHome,
    FiSearch,
    FiDroplet,
    FiUser,
    FiGrid,
    FiPlus,
    FiSun
} from "react-icons/fi";


function Dashboard() {


    const { user, loading } = useAuth();

    const [profile, setProfile] = useState(null);



    useEffect(() => {


        async function loadProfile() {


            if (!user) return;


            const data = await getUserProfile(user.uid);


            setProfile(data);


        }


        loadProfile();


    }, [user]);




    if (loading) {

        return (
            <div className={styles.loading}>
                Loading...
            </div>
        );

    }



    return (


        <main className={styles.dashboard}>


            <img
                src={monstera}
                className={styles.backgroundPlant}
                alt=""
            />



            <div className={styles.blurOne}></div>
            <div className={styles.blurTwo}></div>





            <aside className={styles.sidebar}>


                <Brand />


                <nav>


                    <Link
                        className={styles.active}
                        to="/dashboard"
                    >
                        <FiHome />
                        Dashboard
                    </Link>


                    <Link to="/search">
                        <FiSearch />
                        Discover
                    </Link>


                    <Link to="/plants">
                        <FiGrid />
                        My Plants
                    </Link>


                    <Link to="/reminders">
                        <FiDroplet />
                        Reminders
                    </Link>


                    <Link to="/profile">
                        <FiUser />
                        Profile
                    </Link>


                </nav>


            </aside>







            <section className={styles.content}>



                <section className={styles.hero}>


                    <div>


                        <p className={styles.smallTitle}>
                            PLANTPAL
                        </p>


                        <h1>
                            Good morning,{" "}
                            {profile?.firstName || "Plant Lover"}
                        </h1>


                        <p className={styles.subtitle}>
                            Your plants are waiting for a little care today.
                        </p>



                        <div className={styles.actions}>


                            <Link to="/plants">
                                <FiPlus />
                                Add Plant
                            </Link>


                            <Link to="/search">
                                <FiSearch />
                                Find Plants
                            </Link>


                        </div>



                    </div>




                    <div className={styles.heroStats}>


                        <div>

                            <strong>
                                0
                            </strong>

                            <span>
                                Plants
                            </span>


                        </div>



                        <div>

                            <strong>
                                0
                            </strong>

                            <span>
                                Reminders
                            </span>


                        </div>



                    </div>



                </section>







                <section className={styles.section}>


                    <div className={styles.sectionTitle}>

                        <h2>
                            Your Collection
                        </h2>


                        <Link to="/plants">
                            View all
                        </Link>


                    </div>





                    <div className={styles.plants}>


                        <div className={styles.emptyCard}>


                            <FiPlus />


                            <h3>
                                Add your first plant
                            </h3>


                            <p>
                                Start building your digital garden.
                            </p>


                        </div>



                    </div>


                </section>









                <section className={styles.section}>


                    <h2>
                        Today's Care
                    </h2>



                    <div className={styles.careGrid}>


                        <div className={styles.careCard}>


                            <FiDroplet />


                            <div>

                                <h3>
                                    Watering
                                </h3>


                                <p>
                                    No plants need watering today.
                                </p>

                            </div>


                        </div>





                        <div className={styles.careCard}>


                            <FiSun />


                            <div>

                                <h3>
                                    Plant Health
                                </h3>


                                <p>
                                    Your garden is looking good.
                                </p>

                            </div>


                        </div>



                    </div>



                </section>






            </section>



        </main>


    );

}


export default Dashboard;