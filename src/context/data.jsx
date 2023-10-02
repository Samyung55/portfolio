import React from "react";
import phone from "../assets/phone.png";
import development from '../assets/development.png';
import est from '../assets/projects/est.png'
import mobile1 from '../assets/projects/mobile1.png'
import mobile from '../assets/projects/mobile.png'

export const ProjectData = [
    {
        id: 1,
        tags: ['UI/UX Design', 'Landing Page', 'WireFrame'],
        name: 'Food Express - Food Delivery Solution',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut reprehenderit distinctio quaerat quae mollitia odio minima labore nostrum recusandae magni assumenda fugiat ullam commodi magnam atque, doloremque molestiae dolores?',
        images: [phone, development]
    },
    {
        id: 2,
        tags: ['UI/UX Design', 'Web Application', 'Front-End'],
        name: 'Estating - Find Your Dream Home',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut reprehenderit distinctio quaerat quae mollitia odio minima labore nostrum recusandae magni assumenda fugiat ullam commodi magnam atque, doloremque molestiae dolores?',
        images: [est, development]
    },
    {
        id: 3,
        tags: ['React-Native', 'Mobile Application', 'Full-Stack'],
        name: 'Crypto-Exchange Mobile App',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut reprehenderit distinctio quaerat quae mollitia odio minima labore nostrum recusandae magni assumenda fugiat ullam commodi magnam atque, doloremque molestiae dolores?',
        images: [mobile, mobile1]
    }
];
