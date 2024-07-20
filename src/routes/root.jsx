import { VStack, Flex, Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import NavLink from "../components/navLink";
import { navLinks } from "../data";

const Root = () => {
    return (
        <Flex position="relative">
            <Flex flex="1" justifyContent="center">
                <Outlet />
            </Flex>

            <Flex w={{ base: 0, lg: "8vw" }} h="full" pos="relative">
                <VStack
                    pos="fixed"
                    hideBelow="lg"
                    gap="6"
                    h="full"
                    justifyContent="center"
                >
                    {navLinks.map((link, index) => (
                        <NavLink key={index} props={link} />
                    ))}
                </VStack>
            </Flex>
        </Flex>
    );
};

export default Root;
