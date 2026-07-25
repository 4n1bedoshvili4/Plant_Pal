import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getDoc } from "firebase/firestore";

export async function createUserProfile(user, firstName, lastName, age) {

    await setDoc(doc(db, "users", user.uid), {

        firstName,
        lastName,
        age: Number(age),
        email: user.email,
        createdAt: new Date()

    });

}

export async function getUserProfile(uid) {

    const docRef = doc(db, "users", uid);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

        return docSnap.data();

    }

    return null;

}