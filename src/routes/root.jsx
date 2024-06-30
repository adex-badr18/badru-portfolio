import {
    Box,
    Grid,
    GridItem,
    Link as ChakraLink,
    VStack,
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    useDisclosure,
    IconButton,
    Flex,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import NavLink from "../components/navLink";
import MobileNav from "../components/mobileNav";
import { navLinks } from "../data";

const Root = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <Flex flex="1">
            <Flex flex="1">
                <Outlet />
            </Flex>

            <Flex w="100px">
                <VStack hideBelow="lg" gap="6" h="full" justifyContent="center">
                    {navLinks.map((link, index) => (
                        <NavLink key={index} props={link} />
                    ))}
                </VStack>

                <IconButton
                    icon={<FaBars />}
                    ref={btnRef}
                    onClick={onOpen}
                    hideFrom="lg"
                    size="lg"
                    bg="#2b2a2a"
                    color="whitesmoke"
                    fontSize="26px"
                    mt="8"
                />
            </Flex>

            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent bg="black" color="whitesmoke">
                    <DrawerCloseButton size top={12} right={16} />
                    <DrawerBody>
                        <MobileNav handleClick={onClose} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

export default Root;
