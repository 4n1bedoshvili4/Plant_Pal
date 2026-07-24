import { useState } from "react";
import { searchPlants } from "../../api/plantApi";
import PlantCard from "../../components/PlantCard/PlantCard";
import styles from "./Search.module.css";


function Search() {


    const [query, setQuery] = useState("");
    const [plants, setPlants] = useState([]);



    async function handleSearch() {

        const results = await searchPlants(query);

        setPlants(results);

    }



    return (

        <div className={styles.searchPage}>

            <h1>
                🌿 Search Plants
            </h1>


            <div className={styles.searchBox}>

                <input

                    type="text"

                    placeholder="Search plant..."

                    value={query}

                    onChange={(e)=>setQuery(e.target.value)}

                />


                <button onClick={handleSearch}>
                    Search
                </button>

            </div>



            <div className={styles.plantGrid}>

                {
                    plants.map((plant)=>(

                        <PlantCard
                            key={plant.id}
                            plant={plant}
                        />

                    ))
                }

            </div>


        </div>

    );

}


export default Search;