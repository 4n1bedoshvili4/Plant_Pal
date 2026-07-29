import { useEffect, useState } from "react";

import { searchPlants } from "../../api/plantApi";

import PlantCard from "../../components/PlantCard/PlantCard";

import styles from "./Search.module.css";


function Search() {


    const [query, setQuery] = useState("");

    const [plants, setPlants] = useState([]);

    const [loading, setLoading] = useState(false);

    const [searched, setSearched] = useState(false);



    const popularPlants = [

        {
            name: "Monstera",
            search: "Monstera deliciosa"
        },

        {
            name: "Aloe Vera",
            search: "Aloe vera"
        },

        {
            name: "Snake Plant",
            search: "Dracaena trifasciata"
        },

        {
            name: "Rose",
            search: "Rosa"
        },

        {
            name: "Lavender",
            search: "Lavandula"
        }

    ];





    async function loadPlants(searchValue) {


        try {

            setLoading(true);

            setSearched(true);


            const results = await searchPlants(searchValue);


            setPlants(results);


        } catch(error) {


            console.error(
                "Plant search error:",
                error
            );


            setPlants([]);


        } finally {

            setLoading(false);

        }

    }





    useEffect(() => {


        async function initialLoad() {


            try {

                setLoading(true);


                const results = await searchPlants(
                    "Monstera deliciosa"
                );


                setPlants(results);


            } catch(error) {


                console.error(
                    "Initial loading error:",
                    error
                );


                setPlants([]);


            } finally {

                setLoading(false);

            }

        }



        initialLoad();


    }, []);







    function handleSearch(e) {


        e.preventDefault();


        if(!query.trim()) {

            return;

        }


        loadPlants(query);


    }







    return (

        <main className={styles.searchPage}>


            <section className={styles.header}>


                <h1>
                    Explore Plants
                </h1>


                <p>
                    Discover plants and find your next green companion.
                </p>





                <form
                    className={styles.searchBox}
                    onSubmit={handleSearch}
                >


                    <input

                        type="text"

                        placeholder="Search for a plant..."

                        value={query}

                        onChange={(e)=>
                            setQuery(e.target.value)
                        }

                    />



                    <button type="submit">

                        Search

                    </button>


                </form>


            </section>








            <section className={styles.popular}>


                <h2>
                    Popular Plants
                </h2>



                <div className={styles.tags}>


                    {
                        popularPlants.map((plant)=>(


                            <button

                                key={plant.name}

                                onClick={() => {

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









            {
                loading && (

                    <p className={styles.loading}>
                        Searching plants...
                    </p>

                )
            }









            {
                !loading && plants.length > 0 && (


                    <section className={styles.results}>


                        <h2>
                            Plant Results
                        </h2>





                        <div className={styles.plantGrid}>


                            {
                                plants.map((plant)=>(


                                    <PlantCard

                                        key={plant.pageid}

                                        plant={plant}

                                    />


                                ))
                            }


                        </div>


                    </section>


                )
            }









            {
                searched &&
                !loading &&
                plants.length === 0 && (


                    <section className={styles.noResults}>


                        <h2>
                            No plants found
                        </h2>


                        <p>
                            Try searching for another plant.
                        </p>


                    </section>


                )
            }



        </main>

    );

}


export default Search;