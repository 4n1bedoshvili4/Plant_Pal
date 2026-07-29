const BASE_URL = "https://en.wikipedia.org/w/api.php";


export async function searchPlants(query) {

    try {

        const response = await fetch(
            `${BASE_URL}?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=0&srlimit=10&format=json&origin=*`
        );


        const data = await response.json();


        if (!data.query) {
            return [];
        }


        const pages = await Promise.all(

            data.query.search.map(async (result) => {


                const detailResponse = await fetch(
                    `${BASE_URL}?action=query&pageids=${result.pageid}&prop=pageimages|extracts&exintro=true&explaintext=true&pithumbsize=300&format=json&origin=*`
                );


                const detailData = await detailResponse.json();


                return Object.values(detailData.query.pages)[0];

            })

        );


        const filteredPlants = pages.filter((page) => {


            const title = page.title.toLowerCase();

            const description = (
                page.extract || ""
            ).toLowerCase();



            const searchWords = query
                .toLowerCase()
                .split(" ")
                .filter(word => word.length > 2);


            const containsSearch =
                searchWords.some(word => title.includes(word));



            const isPlant =
                description.includes("species of flowering plant") ||
                description.includes("species of plant") ||
                description.includes("flowering plant");



            return containsSearch && isPlant;


        });



        return filteredPlants;


    } catch(error) {


        console.error("Wikipedia API error:", error);

        return [];


    }

}