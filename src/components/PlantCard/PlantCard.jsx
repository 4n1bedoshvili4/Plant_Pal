import styles from "./PlantCard.module.css";

function PlantCard({ plant }) {
    return (
        <div className={styles.plantCard}>

            <img
                className={styles.plantImage}
                src={
                    plant.thumbnail?.source ||
                    "https://placehold.co/300x200?text=Plant"
                }
                alt={plant.title}
            />

            <div className={styles.plantInfo}>

                <h3>{plant.title}</h3>

                <p className={styles.scientific}>
                    {plant.extract?.slice(0, 120) || "No description available."}
                    {plant.extract?.length > 120 ? "..." : ""}
                </p>

                <button className={styles.addButton}>
                    + Add Plant
                </button>

            </div>

        </div>
    );
}

export default PlantCard;