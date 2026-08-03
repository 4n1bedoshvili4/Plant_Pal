import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    addPlant,
    removePlant,
    isPlantSaved
} from "../../services/myPlantService";

import Toast from "../Toast/Toast";

import styles from "./PlantCard.module.css";


function PlantCard({ plant }) {


    const [saved, setSaved] = useState(false);

    const [savedPlantId, setSavedPlantId] = useState(null);

    const [showToast, setShowToast] = useState(false);





    useEffect(() => {


        async function checkSaved() {


            const result = await isPlantSaved(

                plant.pageid

            );


            setSaved(result.saved);

            setSavedPlantId(result.id);


        }


        checkSaved();


    }, [plant.pageid]);








    async function handleAddPlant() {


        const id = await addPlant(plant);


        setSaved(true);

        setSavedPlantId(id);


        setShowToast(true);



        setTimeout(() => {

            setShowToast(false);

        }, 4000);


    }








    async function handleUndo() {


        if(savedPlantId) {


            await removePlant(savedPlantId);


        }


        setSaved(false);

        setSavedPlantId(null);

        setShowToast(false);


    }







    return (

        <>

            <Toast

                show={showToast}

                message={`${plant.title} added to My Plants`}

                onUndo={handleUndo}

            />





            <div className={styles.card}>


                {

                    plant.thumbnail?.source ?

                    (

                        <img

                            src={plant.thumbnail.source}

                            alt={plant.title}

                            className={styles.image}

                        />

                    )

                    :

                    (

                        <div className={styles.noImage}>

                            Plant

                        </div>

                    )

                }





                <div className={styles.info}>


                    <h3>

                        {plant.title}

                    </h3>



                    <p className={styles.scientific}>

                        {plant.title}

                    </p>




                    <div className={styles.actions}>


                        <Link

                            to={`/plant/${plant.pageid}`}

                            className={styles.detailsButton}

                        >

                            View Details

                        </Link>





                        {

                            saved ?

                            (

                                <button

                                    className={styles.savedButton}

                                    disabled

                                >

                                    ✓ In My Plants

                                </button>

                            )

                            :

                            (

                                <button

                                    className={styles.addButton}

                                    onClick={handleAddPlant}

                                >

                                    + Add Plant

                                </button>

                            )

                        }



                    </div>


                </div>


            </div>


        </>

    );

}


export default PlantCard;