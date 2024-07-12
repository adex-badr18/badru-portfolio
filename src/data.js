import { IoHomeSharp } from "react-icons/io5";
import { FaUser, FaBriefcase, FaEnvelopeOpen } from "react-icons/fa";

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