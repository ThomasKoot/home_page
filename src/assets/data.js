import { med, bmus, bed, dj, docent, sd } from './credentials_texts'

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const credentials = {
    titles: [ 
        {
            strong: "Master of Education in Arts",
            p: "ArtEZ Kunstacademie Zwolle",
            caption: med,
        },
        {
            strong: "Bachelor of Music (Media Music)",
            p: "ArtEZ Conservatorium Enschede",
            caption: bmus,
        },
        {
            strong: "Bachelor of Education in Music",
            p: "Codarts Hogeschool voor de Kunsten Rotterdam",
            caption: bed,
        }
    ],
    work: [
        {
            strong: "DJ",
            p: "Verschillende venues in binnen en buitenland",
            caption: dj,
        },
        {
            strong: "HBO Docent Media Music",
            p: "ArtEZ Conservatorium Enschede",
            caption: docent,
        },
        {
            strong: "Sound Designer / Beta Tester",
            p: "Arturia / Native Instruments",
            caption: sd,
        }
    ],
    eLearning: [
        {
            strong: "Fullstack Web Development with React",
            p: "Hong Kong University of Science & Technology",
            caption: loremIpsum,
        },
        {
            strong: "Mathematics for Machine Learning",
            p: "Imperial College London",
            caption: loremIpsum,
        },
        {
            strong: "Building Modern Node Applications on AWS",
            p: "AWS",
            caption: loremIpsum,
        }
    ],
}

export const about = `
    Mijn amerikaanse compositiedocent op het Conservatorium gaf mij de bijnaam "Mr. Random", vanwege mijn experimenten waarbij ik geluid en muziek met de computer genereerde. 
    Iets creëeren met de computer heeft me altijd geboeid. Ik heb veel programmeerd in Reaktor Core, een visuele programmeeromgeving voor DSP-algoritmes. Het afgelopen jaar heb ik mezelf door middel van 
    e-learning bijschoold tot Javascript/React developer. Na 10 jaar met veel plezier als DJ gewerkt te hebben wil ik me nu op een developer-functie richten. 
`