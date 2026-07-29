const BASE_URL = "https://commons.wikimedia.org/w/api.php";


export async function getPlantImage(query) {

    console.log("WIKIMEDIA SEARCH:", query);

    try {

        const response = await fetch(
            `${BASE_URL}?action=query&generator=search&gsrsearch=${encodeURIComponent(query)} plant&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url&iiurlwidth=300&format=json&origin=*`
        );


        const data = await response.json();

        console.log("WIKIMEDIA RESPONSE:", data);


        if (!data.query) {
            return null;
        }


        const page = Object.values(data.query.pages)[0];


        console.log("IMAGE FOUND:", page.imageinfo?.[0]?.thumburl);


        return page.imageinfo?.[0]?.thumburl || null;


    } catch(error) {

        console.error("Wikimedia error:", error);

        return null;

    }

}