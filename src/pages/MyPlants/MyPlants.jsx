import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Brand from "../../components/Brand/Brand";
import PlantCard from "../../components/PlantCard/PlantCard";

import {
    FiHome,
    FiSearch,
    FiGrid,
    FiDroplet
} from "react-icons/fi";

import {
    getMyPlants,
    removePlant
} from "../../services/myPlantService";


import monstera from "../../assets/monstera.png";

import styles from "./MyPlants.module.css";


function MyPlants(){


    const [plants,setPlants] = useState([]);





    useEffect(()=>{


        async function loadPlants(){


            const data = await getMyPlants();


            setPlants(data);


        }


        loadPlants();


    },[]);







    async function handleRemove(id){


        await removePlant(id);


        setPlants(prev =>

            prev.filter(
                plant => plant.id !== id
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

                        Discover Plants

                    </Link>





                    <Link
                        to="/plants"
                        className={styles.active}
                    >

                        <FiGrid/>

                        My Plants

                    </Link>







                    <Link to="/reminders">

                        <FiDroplet/>

                        Reminders

                    </Link>

                </nav>


            </aside>









            <section className={styles.content}>


                <header className={styles.header}>


                    <h1>
                        My Collection
                    </h1>


                    <span>
                        Your personal digital garden.
                    </span>


                </header>









                {
                    plants.length === 0 ?


                    (

                        <section className={styles.empty}>


                            <h2>
                                Your garden is empty
                            </h2>



                            <p>
                                Discover plants and add them to your collection.
                            </p>





                            <Link to="/search">

                                Explore Plants

                            </Link>



                        </section>


                    )


                    :


                    (

                        <section className={styles.collection}>


                            <h2>
                                Your Plants
                            </h2>




                            <div className={styles.grid}>


                                {
                                    plants.map(plant => (


                                        <PlantCard

                                            key={plant.id}

                                            plant={plant}

                                            isSaved={true}

                                            onRemove={handleRemove}

                                        />


                                    ))
                                }



                            </div>


                        </section>


                    )

                }





            </section>





        </main>


    );


}


export default MyPlants;