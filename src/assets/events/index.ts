import thefulfordarms from "./thefulfordarms.jpg";
import truckfestival from "./truckfestival.jpeg";
import bandonthewall from "./bandonthewall.jpg";
import lumafilmtvfestival from "./lumafilmtvfestival.jpg";

const data = [
    {
        id: "truckfestival-2025",
        title: "Truckfestival 2025",
        date: ["2025.06.24", "2025.06.27"],
        image: truckfestival.src,
        url: "https://truckfestival.com/line-up/",
        location: "Hill Farm, Oxfordshire"
    },

    {
        title: "Luma Film Festival",
        date: ["2025.06.09", "2025.06.11"],
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
    },

    {
        title: "YUSU Summer Ball 2024",
        date: ["2024.06.04"],
        url: "https://yorksu.org/events/id/3408-yusu-summer-ball-2024",
        location: "York Racecourse, York"
    },

    {
        title: "Those Were The Days Tour 6: Matt & Phred's",
        date: ["2024.04.18"],
        url: "https://mattandphreds.com/april-2024/gents-and-ginger",
        location: "Matt & Phred's, Manchester"
    },

    {
        title: "Those Were The Days Tour 5: BandSoc Presents: Farewell Fest",
        date: ["2024.04.15"],
        url: "https://thecrescentyork.com/events/bandsoc-presents-farewell-fest/",
        location: "The Crescent, York"
    },

    {
        title: "Those Were The Days 4: Micklegigs: The Ghost Ship Album Launch",
        date: ["2024.04.12"],
        url: "https://www.eventbrite.co.uk/e/micklegigs-the-ghost-ship-album-launch-tickets-868567176807",
        location: "Micklegate Social, York"
    },

    {
        title: "Those Were The Days Tour 3: The Finsbury",
        date: ["2024.03.25"],
        url: "https://www.thefinsbury.co.uk",
        location: "The Finsbury, London"
    },

    {
        title: "Those Were The Days Tour 2",
        date: ["2024.03.22"],
        url: "https://www.instagram.com/p/C3VJ66rIW87/",
        location: ""
    },

    {
        title: "Those Were The Days Tour Opening",
        date: ["2024.03.18"],
        url: "https://www.instagram.com/p/C3VJ66rIW87/",
        location: "The Fulford Arms, York"
    },

    {
        title: "Blue Monday Beach Party",
        date: ["2024.01.15"],
        image: bandonthewall.src,
        url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.yorkpress.co.uk/local-events/York/1430403.Event.Pub_Painting_-_Yates_York/%3F_evDiscoveryPath%3D/event/32863123t-blue-monday-beach-party-feat-flat-moon-ph7-gents-ginger-mango&ved=2ahUKEwju5ova9paOAxW2UEEAHbShEcoQFnoECBYQAQ&usg=AOvVaw3ktgEAj65iccdWzVQ14eCA",
        location: "The Fulford Arms, York"
    },

    {
        title: "Christmas w/ Everything After Midnight",
        date: ["2023.12.01"],
        url: "",
        location: "The Golden Ball, York"
    },

    {
        title: "Micklegigs: Gents & Ginger, Joe Haydon and the Ghost Ship and Divorce Lawer",
        date: ["2023.09.29"],
        url: "https://www.eventbrite.co.uk/e/micklegigs-gents-ginger-joe-haydon-and-the-ghost-ship-and-divorce-lawer-tickets-717718725027",
        location: "Micklegate Social, York"
    },

    {
        title: "GOODFEST22nd SEPT 5pm",
        date: ["2023.09.22"],
        url: "",
        location: ""
    },

    {
        title: "FULFORD ARMS BATTLE OF THE BANDS 2023",
        date: ["2023.09.21"],
        url: "",
        location: "The Fulford Arms, York"
    },

    {
        title: "YUSU Summer Ball 2023",
        date: ["2023.06.13"],
        url: "https://yorksu.org/events/id/2443-yusu-summer-ball-2023",
        location: "York Racecourse, York"
    },

    {
        title: "FULFORD ARMS - SUPPORTING PH7",
        date: [""],
        url: "",
        location: ""
    },

    {
        title: "WHERE’S SLATER? - 19th MAY - 8pm - THE MICKLEGATE SOCIAL",
        date: ["2023.05.19"],
        url: "",
        location: ""
    },

    {
        title: "BANDSOC UNPLUGGED 001",
        date: [""],
        url: "",
        location: ""
    },

    {
        title: "PH7 - 1st JUNE - FULFORD ARMS",
        date: ["2023.06.01"],
        url: "",
        location: "The Fulford Arms, York"
    },

    {
        title: "A NIGHT OF STARS",
        date: ["2022.12.05"],
        url: "",
        location: ""
    },
    {
        title: "INhibition OPENING NIGHT",
        date: ["2022.11.14"],
        url: "",
        location: ""
    },

    {
        title: "AMNESTY BALL",
        date: [""],
        url: "",
        location: ""
    },

    {
        title: "The Crescent",
        date: ["2022.11.16"],
        url: "",
        location: ""
    },

    {
        title: "The Crescent",
        date: ["2022.10.24"],
        url: "",
        location: ""
    },

    {
        title: "David Kato",
        date: ["2022.09.28"],
        url: "",
        location: ""
    },

    {
        title: "Halifax",
        date: ["2022.09.25"],
        url: "",
        location: ""
    },

    {
        title: "Greenhouse Jam",
        date: ["2022.06.19"],
        url: "",
        location: ""
    },

    {
        title: "YUSU Summer Ball 2022",
        date: ["2022.06.09"],
        url: "",
        location: ""
    },

    {
        title: "Victoria Vaults",
        date: ["2022.06.09"],
        url: "",
        location: ""
    },

    {
        title: "Halifax",
        date: ["2022.06.11"],
        url: "",
        location: ""
    },

    {
        title: "Goodfest",
        date: ["2022.06.05"],
        url: "",
        location: ""
    },

    {
        title: "Battle of the Bands 2022",
        date: ["2022"],
        url: "",
        location: ""
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
        date: date,
        dateFormatted: dateFormatted,
        image: event.image,
        url: event.url,
        location: event.location
    };
});

export default events;
