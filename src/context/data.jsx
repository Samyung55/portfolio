import React from "react";
import phone from "../assets/phone.png";
import development from '../assets/development.png';
import est from '../assets/projects/est.png'
import mobile1 from '../assets/projects/mobile1.png'
import mobile from '../assets/projects/mobile.png'
import star from "../assets/icons8-star-64.png"
import express1 from "../assets/projects/express1.png"
import express2 from "../assets/projects/express2.png"

export const ProjectData = [
    {
        id: 1,
        tags: ['UI/UX Design', 'E-commerce', 'WireFrame'],
        name: 'Food Swift - Food Delivery Solution',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut reprehenderit distinctio quaerat quae mollitia odio minima labore nostrum recusandae magni assumenda fugiat ullam commodi magnam atque, doloremque molestiae dolores?',
        images: [express1, express2],
        link: "www.google.com"
    },
    {
        id: 2,
        tags: ['UI/UX Design', 'Web Application', 'Front-End'],
        name: 'Estating - Find Your Dream Home',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut reprehenderit distinctio quaerat quae mollitia odio minima labore nostrum recusandae magni assumenda fugiat ullam commodi magnam atque, doloremque molestiae dolores?',
        images: [est, development],
        link: "www.google.com"
    },
    {
        id: 3,
        tags: ['React-Native', 'Mobile Application', 'Full-Stack'],
        name: 'Crypto-Exchange Mobile App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut reprehenderit distinctio quaerat quae mollitia odio minima labore nostrum recusandae magni assumenda fugiat ullam commodi magnam atque, doloremque molestiae dolores?',
        images: [mobile, mobile1],
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
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut reprehenderit distinctio quaerat quae mollitia odio minima labore nostrum recusandae magni assumenda fugiat ullam commodi magnam atque, doloremque molestiae dolores?',
        name: "Henry, Arthur",
        company: "CEO, Food Express",
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
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut reprehenderit distinctio quaerat quae mollitia odio minima labore nostrum recusandae magni assumenda fugiat ullam commodi magnam atque, doloremque molestiae dolores?',
        name: "Thomas, Arthur",
        company: "CTO, EV Changer",
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
        comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut reprehenderit distinctio quaerat quae mollitia odio minima labore nostrum recusandae magni assumenda fugiat ullam commodi magnam atque, doloremque molestiae dolores?',
        name: "Pedro, Vicka",
        company: "Chairman, TK Law",
        clientimg: <img src="src\assets\clients\Xavier Roger.jpg" />,
    }
]