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


import { searchPlants } from "../../api/plantApi";

import monstera from "../../assets/monstera.png";

import styles from "./Search.module.css";



function Search() {


    const [query,setQuery] = useState("");

    const [plants,setPlants] = useState([]);

    const [loading,setLoading] = useState(false);

    const [searched,setSearched] = useState(false);




    const popularPlants = [

        {
            name:"Monstera",
            search:"Monstera deliciosa"
        },

        {
            name:"Aloe Vera",
            search:"Aloe vera"
        },

        {
            name:"Snake Plant",
            search:"Dracaena trifasciata"
        },

        {
            name:"Rose",
            search:"Rosa"
        },

        {
            name:"Lavender",
            search:"Lavandula"
        }

    ];





    async function loadPlants(value){


        try{

            setLoading(true);

            setSearched(true);


            const results = await searchPlants(value);


            setPlants(results || []);


        }
        catch(error){

            console.error(error);

            setPlants([]);

        }
        finally{

            setLoading(false);

        }

    }






    useEffect(()=>{


        async function initialSearch(){


            await loadPlants("Monstera deliciosa");


        }


        initialSearch();


    },[]);







    function handleSearch(e){


        e.preventDefault();


        if(!query.trim()) return;


        loadPlants(query);


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




                    <Link
                        to="/search"
                        className={styles.active}
                    >

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




                </nav>



            </aside>









            <section className={styles.content}>


                <section className={styles.hero}>


                    <h1>
                        Discover new plants
                    </h1>


                    <p className={styles.subtitle}>
                        Search for plants and learn more about your next green companion.
                    </p>




                    <form
                        className={styles.searchBox}
                        onSubmit={handleSearch}
                    >


                        <input

                            type="text"

                            placeholder="Search plants..."

                            value={query}

                            onChange={
                                e=>setQuery(e.target.value)
                            }

                        />



                        <button type="submit">

                            Search

                        </button>



                    </form>



                </section>









                <section className={styles.section}>


                    <h2>
                        Popular Plants
                    </h2>



                    <div className={styles.tags}>


                        {
                            popularPlants.map((plant)=>(


                                <button

                                    key={plant.name}

                                    onClick={()=>{


                                        setQuery(
                                            plant.search
                                        );


                                        loadPlants(
                                            plant.search
                                        );


                                    }}

                                >

                                    {plant.name}

                                </button>


                            ))
                        }



                    </div>



                </section>









                <section className={styles.section}>


                    <h2>
                        Plant Results
                    </h2>





                    {
                        loading &&

                        <p className={styles.message}>
                            Searching plants...
                        </p>

                    }







                    {
                        !loading &&
                        plants.length > 0 &&


                        <div className={styles.plantGrid}>


                            {
                                plants.map((plant)=>(


                                    <PlantCard

                                        key={plant.pageid}

                                        plant={plant}

                                        isSaved={false}

                                    />


                                ))
                            }


                        </div>


                    }








                    {
                        searched &&
                        !loading &&
                        plants.length === 0 &&


                        <div className={styles.message}>

                            No plants found.

                        </div>


                    }





                </section>





            </section>



        </main>

    );


}



export default Search;