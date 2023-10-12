import React from "react";
import express1 from "../assets/projects/express1.png"
import express2 from "../assets/projects/express2.png"
import estate1 from "../assets/projects/estate-1.png"  
import estate2 from "../assets/projects/estate-2.png"  
import crypto1 from "../assets/projects/crypto-1.jpg"
import crypto2 from "../assets/projects/crypto-2.jpg"  
import travel1 from "../assets/projects/travel-1.png"  
import travel2 from "../assets/projects/travel-2.png"  
import hotel1 from "../assets/projects/real-1.png"
import hotel2 from "../assets/projects/real-2.png"

export const ProjectData = [
    {
        id: 1,
        tags: ['UI/UX Design', 'E-commerce', 'WireFrame'],
        name: 'Food Swift - Food Delivery Solution',
        description: 'Food Swift is an innovative food delivery solution that enhances the dining experience for customers and streamlines operations for restaurants. Our user-friendly UI/UX design ensures easy navigation, and wireframes were meticulously created to ensure a smooth ordering process. With Food Swift, enjoy your favorite meals hassle-free!',
        images: [express1, express2],
        link: "www.google.com"
    },
    {
        id: 2,
        tags: ['UI/UX Design', 'Web Application', 'Mobile App'],
        name: 'Estating - Find Your Dream Home',
        description: 'Estating is your one-stop destination to find your dream home. Whether your looking for a web application or a mobile app, we have got you covered. Our user-centric design ensures a seamless property search experience. Say goodbye to the hassle of house-hunting and explore Estating today!',
        images: [estate1, estate2],
        link: "www.google.com"
    },
    {
        id: 3,
        tags: ['React-Native', 'Mobile Application', 'Full-Stack'],
        name: 'Crypto-Exchange Mobile App',
        description: 'Experience the world of cryptocurrencies with our cutting-edge Crypto-Exchange Mobile App. Built using React-Native, this full-stack mobile application provides a secure and user-friendly platform for buying, selling, and managing your digital assets. Dive into the crypto market with confidence!',
        images: [crypto1, crypto2],
        link: "www.google.com"
    },
    {
        id: 4,
        tags: ['React-Native', 'Mobile Application', 'Front-End'],
        name: 'Travel Agency Mobile App',
        description: 'Embark on exciting journeys with the Travel Agency Mobile App. This front-end React-Native application is your ticket to seamless travel planning and booking. Explore destinations, plan itineraries, and make reservations with ease. Your next adventure is just a tap away!',
        images: [travel1, travel2],
        link: "www.google.com"
    },
    {
        id: 5,
        tags: ['Full-Stack', 'Web App', 'UI/UX Design'],
        name: 'Hotel Booking App',
        description: 'Plan your stay with ease using the Hotel Booking App. This full-stack web application offers a sleek UI/UX design for effortless reservation management. Whether your traveling for business or leisure, the Hotel Booking App ensures a comfortable and convenient stay. Book your next hotel room today!',
        images: [hotel1, hotel2],
        link: "www.google.com"
    }
];


export const ClientData = [
    {
        id: 1,
        stars: "5.0",
        starimg: [
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />
        ],
        comment: 'I was amazed by the quality of service and the professionalism of the Sam. Our project was delivered on time and exceeded our expectations.',
        name: "Alice Montgomery",
        company: "CEO, Tech Innovators",
        clientimg: <img src="src\assets\clients\henry.png" />
    },
    {
        id: 2,
        stars: "5.0",
        starimg: [
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />
        ],
        comment: 'I have been working with this amazing developer and designer for years. Their innovative solutions and creativity have always exceeded my expectations.',
        name: "John Anderson",
        company: "CTO, GreenTech Inc.",
        clientimg: <img src="src\assets\clients\Xavier Roger.jpg" />,
    },
    {
        id: 3,
        stars: "5.0",
        starimg: [
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />,
            <img src="src\assets\icons8-star-64.png" />
        ],
        comment: 'I cannot recommend this developer and designer enough. Their expertise and commitment to quality make them stand out in the industry.',
        name: "Sophia Rodriguez",
        company: "Founder, MedCare Solutions",
        clientimg: <img src="src\assets\clients\Xavier Roger.jpg" />,
    }
]