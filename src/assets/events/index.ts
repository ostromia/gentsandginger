const data = [
    {
        title: "FLAT MOON (ALBUM LAUNCH!) + GENTS & GINGER",
        date: "2026.02.26",
        url: "https://www.thefulfordarms.com/event/flat-moon-album-launch-gents-ginger/",
        location: "The Fulford Arms, York"
    },
    {
        title: "Flat Moon Presents: Cookin' Up A Groove UK Tour - Manchester",
        date: "2026.02.06",
        url: "https://www.eventbrite.com/e/flat-moon-presents-cookin-up-a-groove-uk-tour-manchester-tickets-1975841695700?aff=oddtdtcreator",
        location: "The Rat & Pigeon, Manchester"
    },
    {
        title: "Blue Monday! Feat. Flat Moon - Gents & Ginger - Trip Sitter - Pedestrian",
        date: "2026.01.19",
        url: "https://www.fatsoma.com/e/bjgwu570/blue-monday-feat-flat-moon-gents-ginger-trip-sitter-pedestrian",
        location: "The Fulford Arms, York"
    },
    {
        title: "Gents & Ginger plus Khamra & No More Band",
        date: "2025.12.12",
        url: "https://www.fatsoma.com/e/jex2d0ul/gents-ginger-plus-khamra-no-more-band",
        location: "The Washington, Sheffield"
    },
    {
        title: "BLOOM Live at the Rat and Pigeon",
        date: "2025.11.12",
        url: "https://www.fatsoma.com/e/po0je8yg/bloom-live-at-the-rat-and-pigeon",
        location: "The Rat & Pigeon, Manchester"
    },
    {
        title: "We Hate The Sharkman Support",
        date: "2025.10.31",
        url: "https://www.fatsoma.com/e/i90vvcaf/la/ppw0",
        location: "33 Oldham Street, Manchester"
    },
    {
        title: "The Crescent 10th Birthday: Gig Night w/ Pennine Suite, Gents & Ginger, YouVee + Flatnumbertwo",
        date: "2025.09.25",
        url: "https://www.seetickets.com/event/the-crescent-10th-birthday-gig-night/the-crescent/3493493",
        location: "The Crescent, York"
    },
    {
        title: "Truckfestival 2025",
        date: "2025.06.24",
        url: "https://truckfestival.com/line-up/",
        location: "Hill Farm, Oxfordshire"
    },
    {
        title: "Gents & Ginger Reunion: GENTS & GINGER - THE TONICS - THE BLAZERS - CATCH!",
        date: "2025.06.08",
        url: "https://www.thefulfordarms.com/event/gents-ginger/",
        location: "The Fulford Arms, York"
    },
    {
        title: "Elephunk in the Room: Gents & Ginger + The Palpitations",
        date: "2024.08.02",
        url: "https://bandonthewall.org/events/elephunk-in-the-room-gents-and-gingers-the-palpitations/",
        location: "Band on the Wall, Manchester"
    },
    {
        title: "Those Were The Days Tour 6: Matt & Phred's",
        date: "2024.04.18",
        url: "",
        location: "Matt & Phred's, Manchester"
    },
    {
        title: "Those Were The Days Tour 5: Farewell Fest",
        date: "2024.04.15",
        url: "",
        location: "The Crescent, York"
    },
    {
        title: "Those Were The Days 4: Micklegigs The Ghost Ship Album Launch",
        date: "2024.04.12",
        url: "",
        location: "Micklegate Social, York"
    },
    {
        title: "Those Were The Days Tour 3: The Finsbury",
        date: "2024.03.25",
        url: "",
        location: "The Finsbury, London"
    },
    {
        title: "Those Were The Days Tour 2: Folkstone",
        date: "2024.03.22",
        url: "",
        location: "Folkstone, Kent"
    },
    {
        title: "Those Were The Days Tour Opening",
        date: "2024.03.18",
        url: "",
        location: "The Fulford Arms, York"
    },
    {
        title: "Blue Monday Beach Party",
        date: "2024.01.15",
        url: "",
        location: "The Fulford Arms, York"
    },
    {
        title: "Christmas w/ Everything After Midnight",
        date: "2023.12.01",
        url: "",
        location: "The Golden Ball, York"
    },
    {
        title: "Micklegigs: Gents & Ginger, Joe Haydon and the Ghost Ship and Divorce Lawer",
        date: "2023.09.29",
        url: "",
        location: "Micklegate Social, York"
    },
    {
        title: "Fulford Arms Battle of the Bands 2023",
        date: "2023.09.21",
        url: "",
        location: "The Fulford Arms, York"
    },
    {
        title: "PH7 Fulford Arms",
        date: "2023.06.01",
        url: "",
        location: "The Fulford Arms, York"
    },
    {
        title: "The Micklegate Social: Where's Slater?",
        date: "2023.05.19",
        url: "",
        location: "Micklegate Social, York"
    },
    {
        title: "Plantfood",
        date: "2022.11.16",
        url: "",
        location: "The Crescent, York"
    },
    {
        title: "INhibition Opening Night",
        date: "2022.11.14",
        url: "",
        location: "Norman Rea Gallery, York "
    },
    {
        title: "Everything After Midnight",
        date: "2022.10.24",
        url: "",
        location: "The Crescent, York"
    },
    {
        title: "Greenhouse Jam",
        date: "2022.06.19",
        url: "",
        location: "Micklegate Social, York"
    },
    {
        title: "Victoria Vaults",
        date: "2022.06.09",
        url: "",
        location: "Victoria Vaults, York "
    },
    {
        title: "Univeristy of York Battle of the Bands 2022",
        date: "2022.03.11",
        url: "",
        location: "The Fulford Arms, York"
    }
];

function formatDate(date: Date): string {
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const events = data.map((event) => {
    const date = new Date(event.date);
    const dateFormatted = formatDate(date);

    return {
        title: event.title,
        url: event.url,
        location: event.location,
        date: date,
        dateFormatted: dateFormatted,
        day: dateFormatted.split(" ")[0],
        month: dateFormatted.split(" ")[1],
        year: dateFormatted.split(" ")[2]
    };
});

export default events;
