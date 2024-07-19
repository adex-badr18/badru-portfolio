import React, { useRef } from "react";
import {
    Heading,
    Text,
    Box,
    Flex,
    IconButton,
    useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import MobileNavDrawer from "./mobileNavDrawer";

const PageTitle = ({ bgText, primaryTitle, coloredTitle }) => {
    const { onClose, isOpen, onOpen } = useDisclosure();
    const btnRef = useRef();

    return (
        <>
            <Flex
                hideFrom="md"
                justifyContent="space-between"
                alignItems="center"
                px={6}
                py={4}
                mb={{ base: 6, md: 8 }}
                bg="#252525"
            >
                <Title
                    primaryTitle={primaryTitle}
                    coloredTitle={coloredTitle}
                    fontSize="26px"
                    gap={3}
                />

                <IconButton
                    icon={<FaBars />}
                    ref={btnRef}
                    onClick={onOpen}
                    size="lg"
                    bg="#252525"
                    color="whitesmoke"
                    fontSize="26px"
                />

                {/* Mobile Nav Side Menu */}
                <MobileNavDrawer
                    onClose={onClose}
                    isOpen={isOpen}
                    btnRef={btnRef}
                />
            </Flex>

            <Box
                w="full"
                position="relative"
                py={16}
                my={0}
                mx="auto"
                textAlign="center"
                hideBelow="md"
            >
                <Title
                    primaryTitle={primaryTitle}
                    coloredTitle={coloredTitle}
                    fontSize="56px"
                />

                <Heading
                    fontSize="110px"
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    position="absolute"
                    left={0}
                    right={0}
                    top="50%"
                    transform="translateY(-50%)"
                    letterSpacing="10px"
                    lineHeight={0.7}
                    color="rgba(255, 255, 255, 0.07)"
                >
                    {bgText}
                </Heading>
            </Box>
        </>
    );
};

const Title = ({ primaryTitle, coloredTitle, ...rest }) => {
    return (
        <Heading
            // fontSize="56px"
            fontWeight="black"
            lineHeight={1.2}
            color="white"
            textTransform="uppercase"
            m="0"
            // textAlign="center"
            display="flex"
            justifyContent="center"
            gap={4}
            {...rest}
        >
            {primaryTitle} <Text color="#ffb400">{coloredTitle}</Text>
        </Heading>
    );
};

export default PageTitle;
