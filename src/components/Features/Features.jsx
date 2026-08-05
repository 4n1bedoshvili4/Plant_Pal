import {
    Search,
    Leaf,
    Bell,
    Cloud
} from "lucide-react";

import styles from "./Features.module.css";

function Features() {


   const features = [

    {
        icon: <Search size={32} />,
        title: "Discover Plants",
        text: "Browse hundreds of plant species with detailed information and care tips."
    },

    {
        icon: <Leaf size={32} />,
        title: "Build Your Collection",
        text: "Save your favorite plants and keep your digital garden organized."
    },

    {
        icon: <Bell size={32} />,
        title: "Smart Reminders",
        text: "Create watering and care reminders so your plants stay healthy."
    },

    {
        icon: <Cloud size={32} />,
        title: "Cloud Storage",
        text: "Your collection is securely stored in Firebase and available whenever you log in."
    }

];



    return (

            <section
                id="features"
                className={styles.section}
            >

            <div className={styles.heading}>


                <h2>
                    Everything your plants need
                </h2>


                <p>
                    PlantPal helps you discover, organize and care for your plants.
                </p>


            </div>





            <div className={styles.grid}>


                {
                    features.map((feature) => (

                        <div 
                            className={styles.card}
                            key={feature.title}
                        >


                            <div className={styles.icon}>

                                {feature.icon}

                            </div>



                            <h3>

                                {feature.title}

                            </h3>



                            <p>

                                {feature.text}

                            </p>


                        </div>

                    ))
                }


            </div>


        </section>

    );

}
export default Features;