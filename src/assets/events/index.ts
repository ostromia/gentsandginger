import thefulfordarms from "./thefulfordarms.jpg";
import truckfestival from "./truckfestival.jpeg";
import bandonthewall from "./bandonthewall.jpg";
import lumafilmtvfestival from "./lumafilmtvfestival.jpg";

const data = [
    {
        title: "Truckfestival 2025",
        // date: ["2025.06.24", "2025.06.27"],
        date: ["2025.06.24"],
        image: truckfestival.src,
        url: "https://truckfestival.com/line-up/",
        location: "Hill Farm, Oxfordshire"
    },

    {
        title: "Luma Film Festival",
        // date: ["2025.06.09", "2025.06.11"],
        date: ["2025.06.09"],
        image: lumafilmtvfestival.src,
        url: "https://www.lumafilmfestival.co.uk",
        location: "The School of Art, York"
    },

    {
        title: "Gents & Ginger Reunion",
        date: ["2025.06.08"],
        url: "https://www.thefulfordarms.com/event/gents-ginger/",
        location: "The Fulford Arms, York"
    },

    {
        title: "Elephunk in the Room: Gents & Ginger + The Palpitations",
        date: ["2024.08.02"],
        url: "https://bandonthewall.org/events/elephunk-in-the-room-gents-and-gingers-the-palpitations/",
        location: "Band on the Wall, Manchester"
    }
];

function formatDate(date: Date): string {
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const events = data.map((event) => {
    const date = event.date.map((str) => new Date(str));
    let dateFormatted: string;

    if (date.length === 2) {
        const startDay = date[0].getDate();
        const endFormatted = formatDate(date[1]);
        dateFormatted = `${startDay} - ${endFormatted}`;
    } else {
        dateFormatted = formatDate(date[0]);
    }

    return {
        title: event.title,
        day: dateFormatted.split(" ")[0],
        month: dateFormatted.split(" ")[1],
        date: date,
        dateFormatted: dateFormatted,
        image: event.image,
        url: event.url,
        location: event.location
    };
});

export default events;
