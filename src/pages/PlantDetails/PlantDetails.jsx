import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { getPlantDetails } from "../../api/plantApi";

import styles from "./PlantDetails.module.css";


function PlantDetails() {


    const { pageid } = useParams();

    const navigate = useNavigate();

    const [plant, setPlant] = useState(null);

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        async function loadPlant() {

            try {

                const data = await getPlantDetails(pageid);

                setPlant(data);

            }

            catch(error) {

                console.error(
                    "Plant details error:",
                    error
                );

            }

            finally {

                setLoading(false);

            }

        }


        loadPlant();


    }, [pageid]);





    if(loading) {

        return (

            <div className={styles.loading}>
                Loading plant...
            </div>

        );

    }





    return (

        <main className={styles.page}>


            <button

                className={styles.backButton}

                onClick={() => navigate("/search")}

            >

                ← Back to Search

            </button>





            <section className={styles.plantCard}>


                <div className={styles.imageWrapper}>


                    {
                        plant.thumbnail?.source ? (

                            <img

                                src={plant.thumbnail.source}

                                alt={plant.title}

                                className={styles.image}

                            />

                        )

                        :

                        (

                            <div className={styles.noImage}>
                                🌱
                            </div>

                        )
                    }


                </div>





                <div className={styles.info}>


                    <h1>
                        {plant.title}
                    </h1>


                    <p className={styles.scientific}>
                        {plant.title}
                    </p>



                    <div className={styles.divider}></div>



                    <h2>
                        About this plant
                    </h2>


                    <p className={styles.description}>

                        {
                            plant.extract
                                ? plant.extract.slice(0,900) + "..."
                                : "No description available."
                        }

                    </p>





                    <button

                        className={styles.addButton}

                    >

                        + Add to My Plants

                    </button>



                </div>


            </section>


        </main>

    );

}


export default PlantDetails;