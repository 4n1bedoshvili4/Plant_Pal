import { Link } from "react-router-dom";
import styles from "./PlantCard.module.css";


function PlantCard({ plant }) {


    return (

        <div className={styles.card}>


            {
                plant.thumbnail?.source ? (

                    <img
                        src={plant.thumbnail.source}
                        alt={plant.title}
                        className={styles.image}
                    />

                ) : (

                    <div className={styles.noImage}>
                        🌱
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



                    <button
                        className={styles.addButton}
                    >

                        + Add Plant

                    </button>


                </div>


            </div>


        </div>

    );

}


export default PlantCard;