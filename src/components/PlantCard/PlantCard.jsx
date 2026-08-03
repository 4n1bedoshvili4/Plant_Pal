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

    const [showToast, setShowToast] = useState(false);



    useEffect(() => {

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSaved(

            isPlantSaved(plant.pageid)

        );

    }, [plant]);





    function handleAddPlant() {

        addPlant(plant);

        setSaved(true);

        setShowToast(true);



        setTimeout(() => {

            setShowToast(false);

        }, 4000);

    }





    function handleUndo() {

        removePlant(plant.pageid);

        setSaved(false);

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