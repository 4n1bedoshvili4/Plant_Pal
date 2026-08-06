import { useState } from "react";
import { Link } from "react-router-dom";

import {
    addPlant
} from "../../services/myPlantService";

import Toast from "../Toast/Toast";

import styles from "./PlantCard.module.css";


function PlantCard({
    plant,
    isSaved = false,
    onRemove
}) {


    const [showToast, setShowToast] = useState(false);

    const [saved, setSaved] = useState(isSaved);

    const [savedPlantId, setSavedPlantId] = useState(
        plant.id || null
    );




    async function handleAddPlant(){


        const id = await addPlant(plant);


        setSaved(true);

        setSavedPlantId(id);


        setShowToast(true);



        setTimeout(()=>{

            setShowToast(false);

        },4000);


    }






    async function handleRemove(){


        if(onRemove){

            await onRemove(
                savedPlantId || plant.id
            );

        }


        setSaved(false);

        setSavedPlantId(null);


    }






    return (

        <>


            <Toast

                show={showToast}

                message={`${plant.title} added to My Plants`}

                onUndo={handleRemove}

            />





            <div className={styles.card}>


                {
                    plant.thumbnail?.source || plant.image

                    ?

                    (

                        <img

                            src={
                                plant.thumbnail?.source ||
                                plant.image
                            }

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

                        Botanical information

                    </p>





                    <div className={styles.actions}>


                        <Link

                            to={`/plant/${plant.pageid}`}

                            className={styles.detailsButton}

                        >

                            View Details

                        </Link>






                        {

                            saved

                            ?

                            (

                                <button

                                    className={styles.savedButton}

                                    onClick={handleRemove}

                                >

                                    Remove

                                </button>

                            )

                            :

                            (

                                <button

                                    className={styles.addButton}

                                    onClick={handleAddPlant}

                                >

                                    Add Plant

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