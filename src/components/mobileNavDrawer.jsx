import React, { useRef } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerContent,
} from "@chakra-ui/react";
import MobileNav from "./mobileNav";

const MobileNavDrawer = ({isOpen, onClose, btnRef}) => {

    return (
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="full"
        >
            <DrawerOverlay />
            <DrawerContent bg="black" color="whitesmoke">
                <DrawerCloseButton size top={{base: 8, md: 12}} right={{base: 10, md: 16}} />
                <DrawerBody>
                    <MobileNav handleClick={onClose} />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default MobileNavDrawer;
