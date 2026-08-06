import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Brand from "../../components/Brand/Brand";
import AddReminderModal from "../../components/AddReminderModal/AddReminderModal";
import ReminderCard from "../../components/ReminderCard/ReminderCard";

import {
    FiHome,
    FiSearch,
    FiGrid,
    FiDroplet,
    FiPlus
} from "react-icons/fi";


import {
    getMyReminders,
    addReminder,
    removeReminder,
    completeReminder
} from "../../services/reminderService";


import monstera from "../../assets/monstera.png";

import styles from "./Reminders.module.css";





function Reminders(){


    const [reminders,setReminders] = useState([]);

    const [showModal,setShowModal] = useState(false);





    useEffect(()=>{


        async function loadReminders(){


            const data = await getMyReminders();


            setReminders(data);


        }


        loadReminders();


    },[]);









    async function handleAddReminder(reminder){


        const id = await addReminder(reminder);



        setReminders(prev => [


            ...prev,


            {

                id,

                ...reminder,

                completed:false

            }


        ]);



    }









    async function handleDelete(id){


        await removeReminder(id);



        setReminders(prev =>


            prev.filter(

                reminder => reminder.id !== id

            )


        );


    }









    async function handleComplete(id){


        await completeReminder(id);



        setReminders(prev =>


            prev.filter(

                reminder => reminder.id !== id

            )


        );


    }









    return (


        <main className={styles.page}>


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





                    <Link

                        to="/reminders"

                        className={styles.active}

                    >

                        <FiDroplet/>

                        Reminders

                    </Link>



                </nav>


            </aside>












            <section className={styles.content}>




                <header className={styles.header}>



                    <h1>
                        Plant Care Reminders
                    </h1>



                    <span>
                        Keep your plants healthy and happy.
                    </span>



                </header>









                <button


                    className={styles.addButton}


                    onClick={()=>setShowModal(true)}


                >


                    <FiPlus/>


                    Add Reminder


                </button>









                <section className={styles.list}>


                    {

                        reminders.length === 0 ?


                        (


                            <div className={styles.empty}>


                                <h2>
                                    No reminders yet
                                </h2>


                                <p>
                                    Add your first plant care reminder.
                                </p>



                            </div>


                        )


                        :


                        reminders.map(reminder=>(


                            <ReminderCard


                                key={reminder.id}


                                reminder={reminder}


                                onDelete={handleDelete}


                                onComplete={handleComplete}


                            />


                        ))


                    }



                </section>







            </section>









            {

                showModal &&

                (

                    <AddReminderModal


                        onClose={()=>setShowModal(false)}


                        onSave={handleAddReminder}


                    />


                )


            }





        </main>


    );


}



export default Reminders;