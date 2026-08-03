const STORAGE_KEY = "myPlants";



export function getMyPlants() {

    const plants = localStorage.getItem(STORAGE_KEY);

    return plants
        ? JSON.parse(plants)
        : [];

}





export function isPlantSaved(pageid) {

    return getMyPlants().some(

        plant => plant.pageid === pageid

    );

}





export function addPlant(plant) {


    const plants = getMyPlants();


    if(!isPlantSaved(plant.pageid)) {


        plants.push(plant);


        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(plants)

        );

    }

}





export function removePlant(pageid) {


    const plants = getMyPlants();


    const updatedPlants = plants.filter(

        plant => plant.pageid !== pageid

    );


    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(updatedPlants)

    );

}





export function togglePlant(plant) {


    if(isPlantSaved(plant.pageid)) {


        removePlant(plant.pageid);


        return false;


    }


    addPlant(plant);


    return true;


}