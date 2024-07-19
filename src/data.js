import { IoHomeSharp } from "react-icons/io5";
import { FaUser, FaBriefcase, FaEnvelopeOpen, FaPhoneSquareAlt } from "react-icons/fa";
import { FaGraduationCap, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6";
import quizzicalImage from "./assets/quizzical-img.png";
import fatogImage from "./assets/fatog-img.png";
import hsasImage from "./assets/hsas-img.png";
import grtpImage from "./assets/grtp-img.png";
import driversLicenseImage from "./assets/drivers-license-img.png";
import shopMasterImage from "./assets/shopmaster-img.png";
import bankAppImage from "./assets/bank-app-img.png";
import goCarNowImage from "./assets/go-car-now.webp";

export const navLinks = [
    {
        title: "Home",
        ref: "/",
        icon: IoHomeSharp,
    },
    {
        title: "About",
        ref: "/about",
        icon: FaUser,
    },
    {
        title: "Portfolio",
        ref: "/portfolio",
        icon: FaBriefcase,
    },
    {
        title: "Contact",
        ref: "/contact",
        icon: FaEnvelopeOpen,
    },
];

export const bioData = [
    { fieldName: "first name", value: "Badrudeen" },
    { fieldName: "last name", value: "Abdul-hameed" },
    { fieldName: "middle name", value: "Adewumi" },
    { fieldName: "gender", value: "Male" },
    { fieldName: "phone", value: "+2348064844004" },
    { fieldName: "location", value: "Osogbo, Nigeria." },
    { fieldName: "nationality", value: "Nigerian" },
    { fieldName: "freelance", value: "Available" },
    { fieldName: "Relocation", value: "Available" },
    { fieldName: "Language", value: "English" },
];

export const aboutStats = [
    { title: "Years of Experience", value: 2 },
    { title: "Completed Projects", value: 12 },
    { title: "Completed Courses", value: 15 },
    { title: "Satisfied Customers", value: 10 },
];

export const skillsData = [
    { title: "HTML", progressValue: 95 },
    { title: "CSS", progressValue: 80 },
    { title: "JAVASCRIPT", progressValue: 80 },
    { title: "TYPESCRIPT", progressValue: 25 },
    { title: "REACT", progressValue: 70 },
    { title: "REACT ROUTER", progressValue: 70 },
    { title: "TANSTACK TABLE", progressValue: 60 },
    { title: "CHAKRA UI", progressValue: 90 },
    { title: "TAILWIND CSS", progressValue: 70 },
    { title: "RESTful API", progressValue: 80 },
    { title: "JASMINE", progressValue: 50 },
    { title: "BACKEND", progressValue: 25 },
];

export const eduExpData = [
    {
        icon: FaBriefcase,
        date: "2024 - PRESENT",
        title: "Frontend Developer",
        institution: "ACME Software Lab",
        desc: "Development of custom-built UI with React. Collaborates with designers and backend teams for seamless integration of designs and APIs.",
    },
    {
        icon: FaGraduationCap,
        date: "2023",
        title: "Frontend Development",
        institution: "Scrimba",
        desc: "Estimated 150+ hours of project-intensive course broken into 12 modules covering HTML5, CSS3, JavaScript, React.js, Responsive Design, API Integration, and UI Design.",
    },
    {
        icon: FaBriefcase,
        date: "2023 - PRESENT",
        title: "Frontend Developer",
        institution: "The Fronteers Solutions",
        desc: "Development of user-facing features that determines the structure and design of web pages, with effective collaboration with other developers.",
    },
    {
        icon: FaGraduationCap,
        date: "2023",
        title: "JavaScript Development",
        institution: "Udacity",
        desc: "Estimated 100+ hours of project-intensive course broken into 4 modules covering Node.js, Express, PostgreSQL, Typescript, Angular, Jasmine, and Git.",
    },
    {
        icon: FaBriefcase,
        date: "2022 - 2023",
        title: "Principal",
        institution: "Rayyan Model School",
        desc: "Oversaw administrative and academic activities of the school. Enhanced school permance by implementing strategic plans with effective collaborations.",
    },
    {
        icon: FaGraduationCap,
        date: "2017",
        title: "BSc. Computer Science",
        institution: "University of Ilorin",
        desc: "A 4 years qualification that prepared me for a career in computer programming, information security, and software development.",
    },
    {
        icon: FaBriefcase,
        date: "2018 - 2022",
        title: "ICT Teacher",
        institution: "Kuntau Science Academy",
        desc: "Enhanced student learning by incorporating innovative teaching methods and real-world examples into computer studies lessons.",
    },
    {
        icon: FaGraduationCap,
        date: "2014",
        title: "Diploma Computer Science",
        institution: "Fed. Poly Ede",
        desc: "A 2 years qualification that exposed me to data structure, algorithm, operating systems, and programming languages.",
    },
];

export const projectsData = [
    {
        id: 1,
        title: "Hospital Scan Archive System",
        desc: "Developed with React, Tailwind CSS, React Router, and Tanstack Table. It allows hospital employees to manage patients' scan records with role-based authentication.",
        previewLink: "https://hsas.vercel.app/",
        image: hsasImage,
        username: "admin@gmail.com",
        password: "Pa$$word-123"
    },
    {
        id: 2,
        title: "FATOG Fisheries",
        desc: "A responsive landing page developed with React, Chakra UI, and React Router. It has a highly dynamic hero section with smooth navigation to all other sections.",
        previewLink: "https://fatog.vercel.app/",
        image: fatogImage,
    },
    {
        id: 3,
        title: "GRT-Pristine Website",
        desc: "This website was crafted with React and CSS. It features responsiveness, outstanding animation, contact section integrated to the email server, and so on.",
        previewLink: "https://grtp.vercel.app/",
        image: grtpImage,
    },
    {
        id: 4,
        title: "Quizzical App",
        desc: "This quiz app is developed with React. It allows users to challenge their intellects. Users can be tested from an array of question categories and difficulty levels.",
        previewLink: "https://adex-badr18.github.io/scrimba-quizzical-app/",
        image: quizzicalImage,
    },
    {
        id: 5,
        title: "GoCarNow",
        desc: "This vehicle rental app was developed with React and FireStore. It offers intuitive navigation, smart filters, and secure authentication for host.",
        previewLink: "https://adex-badr18.github.io/go-car-now/",
        image: goCarNowImage,
        username: "b@b.com",
        password: "p123"
    },
    {
        id: 6,
        title: "Drivers License Portal",
        desc: "This app was developed in collaboration with other developers. It features account creation, authentication, driver's license application, license verification among others.",
        previewLink: "https://shop-master-blush.vercel.app/",
        image: driversLicenseImage,
        username: "emilys",
        password: "emilyspass"
    },
    {
        id: 7,
        title: "Shop Master Web App",
        desc: "An e-commerce app developed in collaboration with other developers. It features product listings, filtering, product details, cart, and checkout.",
        previewLink: "https://shop-master-blush.vercel.app/",
        image: shopMasterImage,
    },
    {
        id: 8,
        title: "Modern Bank Website",
        desc: "This Website was developed with React and CSS. It features responsiveness, awesome use of gradients, and dark theme.",
        previewLink: "https://adex-badr18.github.io/bank-modern-app/",
        image: bankAppImage,
    },
];

export const contactData = [
    {
        id: 1,
        title: "Mail Me",
        contact: "adex.badr18@gmail.com",
        icon: FaEnvelopeOpen
    },
    {
        id: 2,
        title: "Call Me",
        contact: "+2348064844004",
        icon: FaPhoneSquareAlt
    },
];

export const socialLinks = [
    {
        id: 1,
        icon: FaLinkedinIn,
        ref: 'https://linkedin.com/in/badruaa'
    },
    {
        id: 2,
        icon: FaGithub,
        ref: 'https://github.com/adex-badr18'
    },
    {
        id: 3,
        icon: FaTwitter,
        ref: 'https://twitter.com/Fortunate1790'
    },
];