import {
    FiDroplet,
    FiSun,
    FiTrash2,
    FiCheck
} from "react-icons/fi";

import styles from "./ReminderCard.module.css";


function ReminderCard({
    reminder,
    onComplete,
    onDelete
}) {


    function getIcon(){

        if(reminder.type === "Watering"){
            return <FiDroplet />;
        }


        if(reminder.type === "Sunlight"){
            return <FiSun />;
        }


        return <FiDroplet />;

    }





    return (

        <div className={styles.card}>


            <div className={`${styles.icon} ${
                reminder.type === "Watering"
                ? styles.water
                : styles.sun
            }`}>
                {getIcon()}

            </div>



            <div className={styles.info}>


                <h3>
                    {reminder.type}
                </h3>


                <p>
                    {reminder.plant}
                </p>


                <span>
                    {reminder.date}
                </span>


            </div>





            <div className={styles.actions}>


                <button
                    className={styles.complete}
                    onClick={() => onComplete(reminder.id)}
                >

                    <FiCheck/>

                </button>




                <button
                    className={styles.delete}
                    onClick={() => onDelete(reminder.id)}
                >

                    <FiTrash2/>

                </button>



            </div>


        </div>

    );

}


export default ReminderCard;