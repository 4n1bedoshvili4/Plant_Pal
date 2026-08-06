import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../services/authService";
import { createUserProfile } from "../../services/firestoreService";

import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

import monstera from "../../assets/monstera.png";

import styles from "./Register.module.css";



function Register() {


    const navigate = useNavigate();


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);





    function validateForm() {


        if(
            !firstName ||
            !lastName ||
            !age ||
            !email ||
            !password ||
            !confirmPassword
        ){

            return "Please fill all fields";

        }



        if(age < 1 || age > 120){

            return "Please enter a valid age";

        }




        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if(!emailRegex.test(email)){

            return "Please enter a valid email";

        }




        if(password.length < 8){

            return "Password must contain at least 8 characters";

        }





        if(password !== confirmPassword){

            return "Passwords do not match";

        }



        return null;

    }









    async function handleRegister(e){


        e.preventDefault();


        setError("");



        const validationError = validateForm();



        if(validationError){

            setError(validationError);

            return;

        }



        try{


            setLoading(true);



            const userCredential = await registerUser(

                email,

                password

            );




            await createUserProfile(

                userCredential.user,

                firstName,

                lastName,

                age

            );




            navigate("/dashboard");



        }

        catch(err){



            if(err.code === "auth/email-already-in-use"){


                setError(
                    "This email is already registered."
                );


            }


            else if(err.code === "auth/invalid-email"){


                setError(
                    "Please enter a valid email."
                );


            }


            else if(err.code === "auth/weak-password"){


                setError(
                    "Password is too weak."
                );


            }


            else{


                setError(
                    "Something went wrong. Please try again."
                );


            }



        }


        finally{


            setLoading(false);


        }


    }








    if(loading){


        return (

            <LoadingScreen
                text="Creating your garden..."
            />

        );


    }









    return (

        <main className={styles.page}>


            <section className={styles.container}>


                <div className={`${styles.backgroundBlob} ${styles.blob1}`}></div>

                <div className={`${styles.backgroundBlob} ${styles.blob2}`}></div>

                <div className={`${styles.backgroundBlob} ${styles.blob3}`}></div>





                <div className={styles.leftPanel}>


                    <img
                        src={monstera}
                        alt=""
                        className={styles.monstera}
                    />



                    <p className={styles.overline}>
                        PLANTPAL
                    </p>



                    <h1>
                        Start your
                        plant journey
                        today.
                    </h1>



                    <p className={styles.description}>
                        Create your PlantPal account and build a beautiful
                        digital garden that grows with you.
                    </p>




                    <div className={styles.features}>


                        <div>
                            🌿 Discover new plants
                        </div>


                        <div>
                            💧 Track watering schedules
                        </div>


                        <div>
                            🪴 Build your collection
                        </div>


                    </div>





                    <div className={styles.testimonial}>


                        <div className={styles.stars}>
                            ★★★★★
                        </div>



                        <p>
                            I started with one cactus and now I have
                            a thriving indoor jungle thanks to PlantPal.
                        </p>



                        <span>
                            Sarah Mitchell
                        </span>


                    </div>



                </div>









                <div className={styles.card}>


                    <Link
                        to="/"
                        className={styles.backHome}
                    >

                        ← Back to PlantPal

                    </Link>





                    <div className={styles.cardHeader}>


                        <h1>
                            Create your account
                        </h1>


                    </div>







                    <form onSubmit={handleRegister}>


                        <div className={styles.row}>


                            <div className={styles.inputGroup}>


                                <label>
                                    First Name
                                </label>


                                <input
                                    type="text"
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                />


                            </div>





                            <div className={styles.inputGroup}>


                                <label>
                                    Last Name
                                </label>


                                <input
                                    type="text"
                                    placeholder="Last name"
                                    value={lastName}
                                    onChange={(e)=>setLastName(e.target.value)}
                                />


                            </div>


                        </div>







                        <div className={styles.inputGroup}>


                            <label>
                                Age
                            </label>


                            <input
                                type="number"
                                placeholder="Your age"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                            />


                        </div>







                        <div className={styles.inputGroup}>


                            <label>
                                Email
                            </label>


                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />


                        </div>








                        <div className={styles.inputGroup}>


                            <label>
                                Password
                            </label>


                            <input
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />


                        </div>







                        <div className={styles.inputGroup}>


                            <label>
                                Confirm Password
                            </label>


                            <input
                                type="password"
                                placeholder="Repeat your password"
                                value={confirmPassword}
                                onChange={(e)=>setConfirmPassword(e.target.value)}
                            />


                        </div>







                        {
                            error && (

                                <p className={styles.error}>
                                    {error}
                                </p>

                            )
                        }







                        <button
                            className={styles.button}
                            type="submit"
                        >

                            Create Account

                        </button>





                    </form>







                    <p className={styles.login}>


                        Already have an account?


                        <Link to="/login">

                            <span>
                                {" "}Sign In
                            </span>

                        </Link>


                    </p>




                </div>





            </section>



        </main>


    );


}



export default Register;