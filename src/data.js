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