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
import hotel2 from "../assets/projects/real-2.png";
import staricon from "../assets/icons8-star-64.png"

import client1 from "../assets/clients/tiana.jpg"
import client2 from "../assets/clients/sean.png"
import client3 from "../assets/clients/xavier.jpg"

export const ProjectData = [
    {
        id: 1,
        tags: ['UI/UX Design', 'E-commerce', 'WireFrame'],
        name: 'Amara - Food Delivery Solution',
        description: 'Amara Food is an innovative food delivery solution that enhances the dining experience for customers and streamlines operations for restaurants. Our user-friendly UI/UX design ensures easy navigation, and wireframes were meticulously created to ensure a smooth ordering process. With Food Swift, enjoy your favorite meals hassle-free!',
        images: [express1, express2],
        link: "https://github.com/Samyung55/Amara-Food-Delivery"
    },
    {
        id: 2,
        tags: ['UI/UX Design', 'Web Application', 'Mobile App'],
        name: 'Estating - Find Your Dream Home',
        description: 'Estating is your one-stop destination to find your dream home. Whether your looking for a web application or a mobile app, we have got you covered. Our user-centric design ensures a seamless property search experience. Say goodbye to the hassle of house-hunting and explore Estating today!',
        images: [estate1, estate2],
        link: "https://github.com/Samyung55/Collin-Estate"
    },
    {
        id: 3,
        tags: ['React-Native', 'Mobile Application', 'Full-Stack'],
        name: 'Crypto-Exchange Mobile App',
        description: 'Experience the world of cryptocurrencies with our cutting-edge Crypto-Exchange Mobile App. Built using React-Native, this full-stack mobile application provides a secure and user-friendly platform for buying, selling, and managing your digital assets. Dive into the crypto market with confidence!',
        images: [crypto1, crypto2],
        link: ""
    },
    {
        id: 4,
        tags: ['React-Native', 'Mobile Application', 'Front-End'],
        name: 'Travel Agency Mobile App',
        description: 'Embark on exciting journeys with the Travel Agency Mobile App. This front-end React-Native application is your ticket to seamless travel planning and booking. Explore destinations, plan itineraries, and make reservations with ease. Your next adventure is just a tap away!',
        images: [travel1, travel2],
        link: "https://github.com/Samyung55/Trip-Booking-App"
    },
    {
        id: 5,
        tags: ['Full-Stack', 'Web App', 'UI/UX Design'],
        name: 'Hotel Booking App',
        description: 'Plan your stay with ease using the Hotel Booking App. This full-stack web application offers a sleek UI/UX design for effortless reservation management. Whether your traveling for business or leisure, the Hotel Booking App ensures a comfortable and convenient stay. Book your next hotel room today!',
        images: [hotel1, hotel2],
        link: "https://github.com/Samyung55/Hotel"
    }
];


export const ClientData = [
    {
        id: 1,
        stars: "5.0",
        starimg: [
            <img src={staricon} />,
            <img src={staricon} />,
            <img src={staricon} />,
            <img src={staricon} />,
            <img src={staricon} />,
        ],
        comment: 'I was truly astounded by the outstanding quality of service and the exceptional professionalism demonstrated by Sam. Not only did our project get delivered right on schedule, but it also went above and beyond our wildest expectations. Sam unwavering dedication to their craft and commitment to excellence are nothing short of remarkable.',
        name: "Alice Montgomery",
        company: "CEO, Tech Innovators",
        clientimg: <img src={client1} />
    },
    {
        id: 2,
        stars: "5.0",
        starimg: [
            <img src={staricon} />,
            <img src={staricon} />,
            <img src={staricon} />,
            <img src={staricon} />,
            <img src={staricon} />,
        ],
        comment: 'I have had the pleasure of collaborating with this remarkable developer and designer for several years, and I cannot emphasize enough how their innovative solutions and creativity have consistently exceeded my expectations. Their dedication to excellence and passion for their craft are truly unparalleled. Working alongside them has been an inspiring journey, marked by a relentless pursuit of perfection.',
        name: "Sean KD",
        company: "CEO/Director, Dherbalbody",
        clientimg: <img src={client2} />,
    },
    {
        id: 3,
        stars: "5.0",
        starimg: [
            <img src={staricon} />,
            <img src={staricon} />,
            <img src={staricon} />,
            <img src={staricon} />,
            <img src={staricon} />,
        ],
        comment: 'I wholeheartedly endorse and recommend this exceptional developer and designer. Their unparalleled expertise and unwavering dedication to quality set them apart as a true standout in the industry. Over the years, their remarkable contributions have consistently proven to be a driving force in our success, and I have complete confidence in their ability to continue making a significant impact in the field.',
        name: "Sophia Rodriguez",
        company: "Founder, MedCare Solutions",
        clientimg: <img src={client3} />,
    }
]