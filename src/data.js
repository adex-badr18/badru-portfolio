import { IoHomeSharp } from "react-icons/io5";
import { FaUser, FaBriefcase, FaEnvelopeOpen } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

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
    {fieldName: 'first name', value: 'Badrudeen'},
    {fieldName: 'middle name', value: 'Adewumi'},
    {fieldName: 'last name', value: 'Abdul-hameed'},
    {fieldName: 'email', value: 'adex.badr18@gmail.com'},
    {fieldName: 'phone', value: '+2348064844004'},
    {fieldName: 'location', value: 'Osogbo, Nigeria.'},
    {fieldName: 'nationality', value: 'Nigerian'},
    {fieldName: 'freelance', value: 'Available'},
    {fieldName: 'Relocation', value: 'Available'},
    {fieldName: 'Language', value: 'English'},
];

export const aboutStats = [
    {title: "Years of Experience", value: 2},
    {title: "Completed Projects", value: 12},
    {title: "Completed Courses", value: 15},
    {title: "Satisfied Customers", value: 10},
];

export const skillsData = [
    {title: "HTML", progressValue: 95},
    {title: "CSS", progressValue: 80},
    {title: "JAVASCRIPT", progressValue: 80},
    {title: "TYPESCRIPT", progressValue: 25},
    {title: "REACT", progressValue: 70},
    {title: "REACT ROUTER", progressValue: 70},
    {title: "TANSTACK TABLE", progressValue: 60},
    {title: "CHAKRA UI", progressValue: 90},
    {title: "TAILWIND CSS", progressValue: 70},
    {title: "RESTful API", progressValue: 80},
    {title: "JASMINE", progressValue: 50},
    {title: "BACKEND", progressValue: 25},
];

export const eduExpData = [
    {icon: FaBriefcase, date: '2024 - PRESENT', title: 'Frontend Developer', institution: "ACME Software Lab", desc: "Development of custom-built UI with React. Collaborates with designers and backend teams for seamless integration of designs and APIs."},
    {icon: FaGraduationCap, date: '2023', title: 'Frontend Development', institution: "Scrimba", desc: "Estimated 150+ hours of project-intensive course broken into 12 modules covering HTML5, CSS3, JavaScript, React.js, Responsive Design, API Integration, and UI Design."},
    {icon: FaBriefcase, date: '2023 - PRESENT', title: 'Frontend Developer', institution: "The Fronteers Solutions", desc: "Development of user-facing features that determines the structure and design of web pages, with effective collaboration with other developers."},
    {icon: FaGraduationCap, date: '2023', title: 'JavaScript Development', institution: "Udacity", desc: "Estimated 100+ hours of project-intensive course broken into 4 modules covering Node.js, Express, PostgreSQL, Typescript, Angular, Jasmine, and Git."},
    {icon: FaBriefcase, date: '2022 - 2023', title: 'Principal', institution: "Rayyan Model School", desc: "Oversaw administrative and academic activities of the school. Enhanced school permance by implementing strategic plans with effective collaborations."},
    {icon: FaGraduationCap, date: '2017', title: 'BSc. Computer Science', institution: "University of Ilorin", desc: "A 4 years qualification that prepared me for a career in computer programming, information security, and software development."},
    {icon: FaBriefcase, date: '2018 - 2022', title: 'ICT Teacher', institution: "Kuntau Science Academy", desc: "Enhanced student learning by incorporating innovative teaching methods and real-world examples into computer studies lessons."},
    {icon: FaGraduationCap, date: '2014', title: 'Diploma Computer Science', institution: "Fed. Poly Ede", desc: "A 2 years qualification that exposed me to data structure, algorithm, operating systems, and programming languages."},
    
]