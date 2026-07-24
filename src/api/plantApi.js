const BASE_URL = "https://en.wikipedia.org/w/api.php";


export async function searchPlants(query) {

    try {

        const response = await fetch(
            `${BASE_URL}?action=query&generator=search&gsrsearch=${query} plant&gsrlimit=10&prop=pageimages|extracts&exintro=true&explaintext=true&pithumbsize=300&format=json&origin=*`
        );


        const data = await response.json();


        if (!data.query) {
            return [];
        }


        return Object.values(data.query.pages);


    } catch(error) {

        console.error("Wikipedia API error:", error);

        return [];

    }

}