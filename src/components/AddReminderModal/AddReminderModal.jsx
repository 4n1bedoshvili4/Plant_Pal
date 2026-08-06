import { useState } from "react";

import {
    FiX
} from "react-icons/fi";

import styles from "./AddReminderModal.module.css";


function AddReminderModal({
    onClose,
    onSave
}) {


    const [plant,setPlant] = useState("");

    const [type,setType] = useState("Watering");

    const [date,setDate] = useState("");





    function handleSubmit(e){

        e.preventDefault();


        const reminder = {

            plant,

            type,

            date,

        };


        onSave(reminder);


        onClose();

    }






    return (

        <div className={styles.overlay}>


            <div className={styles.modal}>


                <button

                    className={styles.close}

                    onClick={onClose}

                >

                    <FiX/>

                </button>





                <h2>
                    Add Reminder
                </h2>





                <form onSubmit={handleSubmit}>


                    <label>
                        Plant
                    </label>


                    <input

                        placeholder="Monstera deliciosa"

                        value={plant}

                        onChange={
                            e=>setPlant(e.target.value)
                        }

                        required

                    />





                    <label>
                        Care type
                    </label>



                    <select

                        value={type}

                        onChange={
                            e=>setType(e.target.value)
                        }

                    >

                        <option>
                            Watering
                        </option>

                        <option>
                            Sunlight
                        </option>

                        <option>
                            Fertilizer
                        </option>


                    </select>







                    <label>
                        Date
                    </label>



                    <input

                        type="date"

                        value={date}

                        onChange={
                            e=>setDate(e.target.value)
                        }

                        required

                    />







                    <button

                        className={styles.save}

                    >

                        Save Reminder

                    </button>



                </form>


            </div>


        </div>

    );

}


export default AddReminderModal;