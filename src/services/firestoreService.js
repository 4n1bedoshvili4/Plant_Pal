import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export async function createUserProfile(user, firstName, lastName, age) {

    await setDoc(doc(db, "users", user.uid), {

        firstName,
        lastName,
        age: Number(age),
        email: user.email,
        createdAt: new Date()

    });

}