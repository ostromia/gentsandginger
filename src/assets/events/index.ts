const data = [
    {
        title: "The Crescent 10th Birthday: Gig Night w/ Pennine Suite, Gents & Ginger, YouVee + Flatnumbertwo",
        date: ["2025.09.25"],
        url: "https://www.seetickets.com/event/the-crescent-10th-birthday-gig-night/the-crescent/3493493",
        location: "The Crescent, York"
    },

    {
        title: "Truckfestival 2025",
        date: ["2025.06.24"],
        url: "https://truckfestival.com/line-up/",
        location: "Hill Farm, Oxfordshire"
    },

    {
        title: "Gents & Ginger Reunion: GENTS & GINGER - THE TONICS - THE BLAZERS - CATCH!",
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
        title: "Those Were The Days Tour 6: Matt & Phred's",
        date: ["2024.04.18"],
        url: "",
        location: "Matt & Phred's, Manchester"
    },

    {
        title: "Those Were The Days Tour 5: Farewell Fest",
        date: ["2024.04.15"],
        url: "",
        location: "The Crescent, York"
    },

    {
        title: "Those Were The Days 4: Micklegigs The Ghost Ship Album Launch",
        date: ["2024.04.12"],
        url: "",
        location: "Micklegate Social, York"
    },

    {
        title: "Those Were The Days Tour 3: The Finsbury",
        date: ["2024.03.25"],
        url: "",
        location: "The Finsbury, London"
    },

    {
        title: "Those Were The Days Tour 2: Folkstone",
        date: ["2024.03.22"],
        url: "",
        location: "Folkstone, Kent"
    },

    {
        title: "Those Were The Days Tour Opening",
        date: ["2024.03.18"],
        url: "",
        location: "The Fulford Arms, York"
    },

    {
        title: "Blue Monday Beach Party",
        date: ["2024.01.15"],
        url: "",
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
        url: "",
        location: "Micklegate Social, York"
    },

    {
        title: "Fulford Arms Battle of the Bands 2023",
        date: ["2023.09.21"],
        url: "",
        location: "The Fulford Arms, York"
    },

    {
        title: "PH7 Fulford Arms",
        date: ["2023.06.01"],
        url: "",
        location: "The Fulford Arms, York"
    },

    {
        title: "The Micklegate Social: Where's Slater?",
        date: ["2023.05.19"],
        url: "",
        location: "Micklegate Social, York"
    },

    {
        title: "Plantfood",
        date: ["2022.11.16"],
        url: "",
        location: "The Crescent, York"
    },

    {
        title: "INhibition Opening Night",
        date: ["2022.11.14"],
        url: "",
        location: "Norman Rea Gallery, York "
    },

    {
        title: "Everything After Midnight",
        date: ["2022.10.24"],
        url: "",
        location: "The Crescent, York"
    },

    {
        title: "Greenhouse Jam",
        date: ["2022.06.19"],
        url: "",
        location: "Micklegate Social, York"
    },

    {
        title: "Victoria Vaults",
        date: ["2022.06.09"],
        url: "",
        location: "Victoria Vaults, York "
    },

    {
        title: "Univeristy of York Battle of the Bands 2022",
        date: ["2022.03.11"],
        url: "",
        location: "The Fulford Arms, York"
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
        year: dateFormatted.split(" ")[2],
        date: date,
        dateFormatted: dateFormatted,
        url: event.url,
        location: event.location
    };
});

export default events;
