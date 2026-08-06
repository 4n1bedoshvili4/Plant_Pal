import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    doc
} from "firebase/firestore";

import { db, auth } from "../firebase/firebase";





export async function getMyReminders(){


    const user = auth.currentUser;


    if(!user){

        return [];

    }



    const remindersRef = collection(

        db,

        "users",

        user.uid,

        "reminders"

    );



    const snapshot = await getDocs(remindersRef);



    return snapshot.docs.map(item => ({


        id:item.id,

        ...item.data()


    }));



}









export async function addReminder(reminder){


    const user = auth.currentUser;


    if(!user){

        return null;

    }



    const remindersRef = collection(

        db,

        "users",

        user.uid,

        "reminders"

    );



    const newReminder = await addDoc(

        remindersRef,

        {


            plant: reminder.plant,

            type: reminder.type,

            date: reminder.date,

            completed:false


        }

    );



    return newReminder.id;


}









export async function removeReminder(reminderId){


    const user = auth.currentUser;


    if(!user){

        return;

    }



    await deleteDoc(

        doc(

            db,

            "users",

            user.uid,

            "reminders",

            reminderId

        )

    );


}









export async function completeReminder(reminderId){


    const user = auth.currentUser;


    if(!user){

        return;

    }



    await updateDoc(

        doc(

            db,

            "users",

            user.uid,

            "reminders",

            reminderId

        ),


        {

            completed:true

        }


    );


}