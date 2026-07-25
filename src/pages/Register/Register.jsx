import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Logo from "../../components/Logo/Logo";
import styles from "./Register.module.css";
import { createUserProfile } from "../../services/firestoreService";

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


        if (
            !firstName ||
            !lastName ||
            !age ||
            !email ||
            !password ||
            !confirmPassword
        ) {

            return "Please fill all fields";

        }


        if (age < 1 || age > 120) {

            return "Please enter a valid age";

        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailRegex.test(email)) {

            return "Please enter a valid email";

        }


        if (password.length < 8) {

            return "Password must contain at least 8 characters";

        }


        if (password !== confirmPassword) {

            return "Passwords do not match";

        }


        return null;

    }



    async function handleRegister(e) {

        e.preventDefault();


        setError("");


        const validationError = validateForm();


        if (validationError) {

            setError(validationError);
            return;

        }


        try {

            setLoading(true);


            const userCredential = await registerUser(email, password);

                await createUserProfile(
                    userCredential.user,
                    firstName,
                    lastName,
                    age
                );

                navigate("/dashboard");


        } catch(err) {

            setError(err.message);

        } finally {

            setLoading(false);

        }

    }



    if (loading) {

        return (
            <LoadingScreen text="Creating your garden..." />
        );

    }



    return (

        <div className={styles.container}>


            <div className={styles.card}>


                <Logo />


                <h1>
                    Create Account
                </h1>


                <p className={styles.subtitle}>
                    Start taking care of your plants
                </p>



                <form onSubmit={handleRegister}>


                    <div className={styles.inputGroup}>

                        <label>
                            First Name
                        </label>

                        <input
                            type="text"
                            placeholder="Your first name"
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
                            placeholder="Your last name"
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                        />

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
                            placeholder="Your email"
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
                            placeholder="Create password"
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
                            placeholder="Repeat password"
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
                        disabled={loading}
                    >

                        Create Account

                    </button>



                </form>



                <p className={styles.login}>

                    Already have an account?

                    <Link to="/">
                        <span>
                            Login
                        </span>
                    </Link>

                </p>


            </div>


        </div>

    );

}


export default Register;