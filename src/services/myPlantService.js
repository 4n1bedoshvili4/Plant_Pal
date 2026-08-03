import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    query,
    where
} from "firebase/firestore";

import { db, auth } from "../firebase/firebase";




export async function getMyPlants() {


    const user = auth.currentUser;


    if(!user) {

        return [];

    }



    const plantsRef = collection(

        db,

        "users",

        user.uid,

        "plants"

    );



    const snapshot = await getDocs(plantsRef);



    return snapshot.docs.map(item => ({

        id: item.id,

        ...item.data()

    }));

}







export async function isPlantSaved(pageid) {


    const user = auth.currentUser;


    if(!user) {

        return {

            saved:false,

            id:null

        };

    }



    const plantsRef = collection(

        db,

        "users",

        user.uid,

        "plants"

    );



    const q = query(

        plantsRef,

        where(

            "pageid",

            "==",

            pageid

        )

    );



    const snapshot = await getDocs(q);



    if(snapshot.empty) {


        return {

            saved:false,

            id:null

        };


    }



    return {

        saved:true,

        id:snapshot.docs[0].id

    };


}









export async function addPlant(plant) {


    const user = auth.currentUser;


    if(!user) {

        return null;

    }



    const alreadySaved = await isPlantSaved(

        plant.pageid

    );



    if(alreadySaved.saved) {


        return alreadySaved.id;

    }



    const plantsRef = collection(

        db,

        "users",

        user.uid,

        "plants"

    );



    const newPlant = await addDoc(

        plantsRef,

        {

            pageid: plant.pageid,

            title: plant.title,

            image: plant.thumbnail?.source || "",

            extract: plant.extract || ""

        }

    );



    return newPlant.id;

}







export async function removePlant(plantId) {


    const user = auth.currentUser;


    if(!user) {

        return;

    }



    await deleteDoc(

        doc(

            db,

            "users",

            user.uid,

            "plants",

            plantId

        )

    );

}