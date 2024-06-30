import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import {
    Link as ChakraLink,
    Flex,
    Icon,
    Text,
    Divider,
} from "@chakra-ui/react";
import { navLinks } from "../data";

const MobileNav = ({handleClick}) => {
    return (
        <Flex direction="column" mt={16}>
            {navLinks.map((link, index) => (
                <ChakraLink
                    as={RouterLink}
                    to={link.ref}
                    key={index}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={4}
                    color="whitesmoke"
                    borderBottom={index !== navLinks.length - 1 && "1px"}
                    borderColor="gray.800"
                    textDecoration='none'
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#daa520" : "whitesmoke",
                            fontWeight: isActive ? "bold" : "400",
                        };
                    }}
                    onClick={handleClick}
                >
                    <Icon as={link.icon} boxSize={5} mt="-1" />
                    <Text textTransform="uppercase" fontSize="lg">
                        {link.title}
                    </Text>
                </ChakraLink>
            ))}
        </Flex>
    );
};

export default MobileNav;
