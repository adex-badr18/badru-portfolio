import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { Link as ChakraLink, Icon, Text } from "@chakra-ui/react";

const NavLink = ({ props }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <ChakraLink
            as={RouterLink}
            // w="50px"
            // h="50px"
            p={4}
            borderRadius="full"
            bg="#2b2a2a"
            to={props.ref}
            display="flex"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={({ isActive }) => {
                return {
                    background: isActive || isHover ? "#ffb400" : "#2b2a2a",
                };
            }}
        >
            <Icon as={props.icon} color="whitesmoke" fontSize="18px" />
        </ChakraLink>
    );
};

export default NavLink;
