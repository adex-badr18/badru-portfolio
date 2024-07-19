import {
    Flex,
    Stack,
    Text,
    Heading,
    Box,
    Highlight,
    Image,
    IconButton,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Trapezium from "../components/overview/trapezium";
import CtaButton from "../components/ctaButton";
import { FaUser, FaBars } from "react-icons/fa6";
import MobileNavDrawer from "../components/mobileNavDrawer";

const Overview = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <Flex
            justifyContent="center"
            direction="column"
            flex="1"
            position="relative"
            w="100vw"
        >
            <IconButton
                hideFrom="lg"
                position={{ base: "absolute", lg: "relative" }}
                top={6}
                right={6}
                icon={<FaBars />}
                ref={btnRef}
                onClick={onOpen}
                size="lg"
                bg="#252525"
                color="whitesmoke"
                fontSize="3xl"
                zIndex="dropdown"
            />
            <Trapezium />
            <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems="center"
                justifyContent={{ base: "" }}
                my={{ base: 0, lg: 8 }}
                ml={{ base: 0, lg: 8 }}
                py={{ base: 8, lg: 0 }}
                px={{ base: 4, md: 6, lg: 0 }}
                flex="1"
                gap="8"
                zIndex="docked"
            >
                <Box
                    backgroundImage="url('/badru-blackbg2.png')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    boxSize="32%"
                    h="100%"
                    borderRadius="2xl"
                    boxShadow="2xl"
                    hideBelow="lg"
                />

                <Image
                    borderRadius="full"
                    boxSize="200px"
                    p="2px"
                    src="/badru-blackbg2.png"
                    alt="Badrudeen Abdul-hameed"
                    hideFrom="lg"
                    border="4px"
                    borderColor="#2f2f2f"
                />

                <Stack
                    boxSize={{ base: "100%", lg: "60%" }}
                    alignItems={{ base: "center", lg: "self-start" }}
                    gap="5"
                    p={{ base: "0", lg: "10" }}
                >
                    <Text
                        fontSize={{ base: "xl", lg: "2xl" }}
                        textTransform="uppercase"
                    >
                        Hi there!
                    </Text>
                    <Heading
                        fontSize={{ base: "3xl", lg: "2.5rem" }}
                        textTransform="uppercase"
                        textAlign={{ base: "center", lg: "left" }}
                    >
                        I'm{" "}
                        <Highlight
                            query={["Badrudeen", "Abdul-hameed"]}
                            styles={{ color: "#ffb400" }}
                        >
                            Badrudeen Abdul-hameed
                        </Highlight>
                    </Heading>
                    <Text
                        lineHeight="taller"
                        w={{ base: "100%", lg: "90%" }}
                        textAlign={{ base: "center", lg: "left" }}
                    >
                        A Nigerian-based Web Designer & Front‑end Developer
                        focused on crafting clean & user‑facing web solutions. I
                        am passionate about building excellent software that
                        improves the lives of those around me.
                    </Text>

                    <CtaButton icon={FaUser} to="/about">
                        More About me
                    </CtaButton>
                </Stack>
            </Flex>

            <MobileNavDrawer
                onClose={onClose}
                isOpen={isOpen}
                btnRef={btnRef}
            />
        </Flex>
    );
};

export default Overview;
