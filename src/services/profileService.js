import {
    doc,
    getDoc,
    setDoc
} from "firebase/firestore";

import { db } from "../firebase/firebase";



export async function getUserProfile(uid) {


    const profileRef = doc(
        db,
        "users",
        uid
    );


    const snapshot = await getDoc(profileRef);



    if(snapshot.exists()) {

        return snapshot.data();

    }


    return null;

}





export async function updateUserProfile(uid, data) {


    const profileRef = doc(
        db,
        "users",
        uid
    );


    await setDoc(
        profileRef,
        data,
        {
            merge:true
        }
    );


}