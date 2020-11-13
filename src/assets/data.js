import { med, bmus, bed, dj, docent, sd, reactCourse, mathCourse, awsCourse } from './credentials_texts'
import linear_regression_demo from '../assets/linear_regression_demo.jpg'
import lys_demo from '../assets/lys_demo.jpg';
import fishsing_demo from '../assets/fishsing_demo.jpg'
import bezier_demo from '../assets/bezier_demo.jpg'

export const credentials = {
    titels: [ 
        {
            strong: "Bachelor of Music (Media Music)",
            p: "ArtEZ Conservatorium Enschede",
            caption: bmus,
        },
        {
            strong: "Bachelor of Education in Music",
            p: "Codarts Hogeschool voor de Kunsten Rotterdam",
            caption: bed,
        },
        {
            strong: "Master of Education in Arts",
            p: "ArtEZ Kunstacademie Zwolle",
            caption: med,
        },
    ],
    werk: [
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
    ["e-learning"]: [
        {
            strong: "Fullstack Web Development with React",
            p: "Hong Kong University of Science & Technology (Coursera)",
            caption: reactCourse.text,
            key_skills: reactCourse.key_skills
        },
        {
            strong: "Mathematics for Machine Learning",
            p: "Imperial College London (Coursera)",
            caption: mathCourse.text,
            key_skills: mathCourse.key_skills,
        },
        {
            strong: "Building Modern Node Applications on AWS",
            p: "AWS (Coursera)",
            caption: awsCourse.text,
            key_skills: awsCourse.key_skills,
        }
    ],
}

export const about = `
    Mijn amerikaanse compositiedocent op het conservatorium gaf mij de bijnaam "Mr. Random", vanwege mijn experimenten waarbij ik geluid en muziek met de computer genereerde. 
    Iets creëeren met de computer heeft me altijd geboeid. Ik heb veel programmeerd in Reaktor Core, een visuele programmeeromgeving voor DSP-algoritmes. De afgelopen periode heb ik mezelf door middel van 
    e-learning bijgeschoold tot JavaScript/React developer. Na 10 jaar met veel plezier als DJ gewerkt te hebben wil ik me nu op een developer-functie richten. 
`

export const portfolio = [
        {
            title: "Lys",
            text: "Lys is een interactieve web-app voor het genereren van complexe lissajous curves. De applicatie is gebouwd met een Redux-architectuur en gebruikt naast de Redux state container alleen JavaScript.",
            src: lys_demo,
            key_skills: "Javascript / Redux / SVG-animation",
            link: "http://lys.thomascode.nl"
        },
        {
            title: "Linear Regression",
            text: "Linear Regression is een interactieve animatie van het gradient-descent algoritme. Ik heb deze applicatie gemaakt na het volgen van de Mathematics for Machine Learning specialisatie op Coursera.",
            src: linear_regression_demo,
            key_skills: "P5.js / HTML Canvas",
            link: "http://linear-regression.thomascode.nl"
        },
        {   
            title: "Big Beziers",
            text: "Big Beziers is een interactieve web-app voor visualiseren van bezier-curves. De app maakt gebruik van het HTML-canvas in React, en bevat een aantal custom SVG UI-elementen.",
            src: bezier_demo,
            key_skills: "React / Styled Components / Responsive Design",
            link: "http://bezier.thomascode.nl"
        },
        {
            title: "FishSing",
            text: "FishSing was mijn afstudeerproject op het conservatorium van Rotterdam. Het is een variatie op een klassiek spel waarbij een vis andere vissen moet ontwijken. In FishSing bestuur je de vis door hoger of lager te zingen. De toonhoogte en volume-herkenning is geschreven in Reaktor Core.",
            src: fishsing_demo,
            key_skills: "DSP / Reaktor Core",
            link: "Om FishSing te openen is een Reaktor licentie nodig"
        }
    ]