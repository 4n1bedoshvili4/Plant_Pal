import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Brand from "../../components/Brand/Brand";

import {
    FiHome,
    FiSearch,
    FiGrid,
    FiDroplet,
    FiUser,
    FiLogOut,
    FiSave
} from "react-icons/fi";

import { useAuth } from "../../context/AuthContext";
import { getUserProfile } from "../../services/firestoreService";

import monstera from "../../assets/monstera.png";

import styles from "./Profile.module.css";


function Profile(){


    const { user, logout } = useAuth();

    const navigate = useNavigate();


    const [profile,setProfile] = useState(null);

    const [firstName,setFirstName] = useState("");





    useEffect(()=>{


        async function loadProfile(){


            if(!user) return;


            const data = await getUserProfile(user.uid);


            setProfile(data);


            setFirstName(
                data?.firstName || ""
            );


        }


        loadProfile();


    },[user]);






    async function handleLogout(){


        await logout();


        navigate("/login");


    }







    return (


        <main className={styles.page}>


            <img
                src={monstera}
                className={styles.backgroundPlant}
                alt=""
            />



            <div className={styles.blurOne}/>
            <div className={styles.blurTwo}/>





            <aside className={styles.sidebar}>


                <Brand />


                <nav>


                    <Link to="/dashboard">
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
                    </Link>



                    <Link
                        to="/profile"
                        className={styles.active}
                    >
                        <FiUser/>
                        Profile
                    </Link>


                </nav>


            </aside>









            <section className={styles.content}>


                <header className={styles.header}>


                    <h1>
                        My Profile
                    </h1>


                    <span>
                        Manage your PlantPal account.
                    </span>


                </header>









                <section className={styles.profileCard}>


                    <div className={styles.avatar}>


                        {firstName
                            ? firstName[0].toUpperCase()
                            : "🌱"
                        }


                    </div>




                    <h2>
                        {profile?.firstName || "Plant Lover"}
                    </h2>



                    <p>
                        {user?.email}
                    </p>




                    <div className={styles.form}>


                        <label>
                            First Name
                        </label>


                        <input
                            value={firstName}
                            onChange={
                                e=>setFirstName(e.target.value)
                            }
                        />



                        <button>

                            <FiSave/>

                            Save Changes

                        </button>



                    </div>







                    <button
                        className={styles.logout}
                        onClick={handleLogout}
                    >

                        <FiLogOut/>

                        Logout

                    </button>



                </section>



            </section>




        </main>


    );


}


export default Profile;