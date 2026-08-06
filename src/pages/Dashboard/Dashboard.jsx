import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import Brand from "../../components/Brand/Brand";

import { useEffect, useState } from "react";

import { getUserProfile } from "../../services/firestoreService";
import { getMyPlants } from "../../services/myPlantService";
import { getMyReminders } from "../../services/reminderService";

import monstera from "../../assets/monstera.png";

import {
    FiHome,
    FiSearch,
    FiDroplet,
    FiGrid,
    FiPlus,
    FiSun,
    FiLogOut
} from "react-icons/fi";



function Dashboard() {


    const { user, loading, logout } = useAuth();


    const [profile, setProfile] = useState(null);

    const [plants, setPlants] = useState([]);

    const [reminders, setReminders] = useState([]);





    async function handleLogout(){

        await logout();

        window.location.href="/login";

    }







    useEffect(() => {


        async function loadDashboard(){


            if(!user) return;



            try {


                const profileData = await getUserProfile(user.uid);


                setProfile(profileData);




                const plantData = await getMyPlants();


                setPlants(plantData);





                const reminderData = await getMyReminders();



                const activeReminders = reminderData.filter(
                    reminder => !reminder.completed
                );



                setReminders(activeReminders);



            }
            catch(error){

                console.error(
                    "Dashboard loading error:",
                    error
                );

            }



        }




        loadDashboard();



    },[user]);









    if(loading){


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

                        to="/dashboard"

                        className={styles.active}

                    >

                        <FiHome/>

                        Dashboard

                    </Link>





                    <Link to="/search">

                        <FiSearch/>

                        Discover

                    </Link>





                    <Link to="/plants">

                        <FiGrid/>

                        My Plants

                    </Link>





                    <Link to="/reminders">

                        <FiDroplet/>

                        Reminders

                    </Link>git push



                    <button

                        className={styles.logout}

                        onClick={handleLogout}

                    >

                        <FiLogOut/>

                        Logout


                    </button>


                </nav>


            </aside>









            <section className={styles.content}>


                <section className={styles.hero}>


                    <div>


                        <h1>

                            Good morning,{" "}

                            {profile?.firstName || "Plant Lover"}

                        </h1>




                        <p className={styles.subtitle}>

                            Your plants are waiting for a little care today.

                        </p>





                        <div className={styles.actions}>


                            <Link to="/plants">


                                <FiPlus/>

                                Add Plant


                            </Link>





                            <Link to="/search">


                                <FiSearch/>

                                Find Plants


                            </Link>


                        </div>



                    </div>








                    <div className={styles.heroStats}>


                        <div>


                            <strong>

                                {plants.length}

                            </strong>


                            <span>

                                Plants

                            </span>


                        </div>







                        <div>


                            <strong>

                                {reminders.length}

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








                    <div className={styles.plantPreview}>


                        {

                            plants.length === 0 ? (


                                <div className={styles.emptyCard}>


                                    <FiPlus/>


                                    <h3>

                                        Add your first plant

                                    </h3>




                                    <p>

                                        Start building your digital garden.

                                    </p>



                                </div>



                            )



                            :



                            plants.slice(0,3).map((plant)=>(


                                <div

                                    className={styles.savedPlant}

                                    key={plant.id}

                                >



                                    {

                                        plant.image && (


                                            <img

                                                src={plant.image}

                                                alt={plant.title}

                                            />

                                        )

                                    }





                                    <h3>

                                        {plant.title}

                                    </h3>




                                    <p>

                                        {plant.extract?.slice(0,80)}...

                                    </p>




                                </div>



                            ))

                        }



                    </div>



                </section>












                <section className={styles.section}>


                    <h2>

                        Today's Care

                    </h2>





                    <div className={styles.careGrid}>




                        <div className={styles.careCard}>


                            <FiDroplet/>



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


                            <FiSun/>



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