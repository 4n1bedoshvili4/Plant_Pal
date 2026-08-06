import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { getPlantDetails } from "../../api/plantApi";

import { addPlant } from "../../services/myPlantService";

import monstera from "../../assets/monstera.png";

import {
    FiArrowLeft,
    FiPlus,
    FiCheck
} from "react-icons/fi";

import styles from "./PlantDetails.module.css";



function PlantDetails(){


    const { pageid } = useParams();

    const navigate = useNavigate();



    const [plant,setPlant] = useState(null);

    const [loading,setLoading] = useState(true);

    const [added,setAdded] = useState(false);





    useEffect(()=>{


        async function loadPlant(){


            try{


                const data = await getPlantDetails(pageid);


                setPlant(data);


            }
            catch(error){


                console.error(
                    "Plant details error:",
                    error
                );


            }
            finally{


                setLoading(false);


            }


        }



        loadPlant();



    },[pageid]);









    async function handleAddPlant(){


        if(!plant) return;



        await addPlant(plant);



        setAdded(true);



        setTimeout(()=>{


            setAdded(false);


        },3000);



    }









    if(loading){


        return (

            <div className={styles.loading}>

                Loading plant...

            </div>

        );

    }






    if(!plant){


        return (

            <div className={styles.loading}>

                Plant not found.

            </div>

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







            {
                added && (

                    <div className={styles.toast}>

                        <FiCheck/>

                        Plant added to My Plants

                    </div>

                )
            }









            <button

                className={styles.backButton}

                onClick={()=>navigate("/search")}

            >

                <FiArrowLeft/>

                Back to Search


            </button>









            <section className={styles.card}>


                <div className={styles.imageSection}>


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

                            ?

                            plant.extract.length > 900

                            ?

                            plant.extract.slice(0,900)+"..."

                            :

                            plant.extract


                            :

                            "No description available."

                        }


                    </p>








                    <button

                        className={styles.addButton}

                        onClick={handleAddPlant}

                    >

                        <FiPlus/>

                        Add to My Plants

                    </button>





                </div>




            </section>






        </main>


    );


}



export default PlantDetails;