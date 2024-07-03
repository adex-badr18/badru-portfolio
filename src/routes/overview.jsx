import {
    Flex,
    Stack,
    Text,
    Heading,
    Box,
    Highlight,
    Image,
} from "@chakra-ui/react";
import React from "react";
import Trapezium from "../components/trapezium";
import CtaButton from "../components/ctaButton";
import { FaUser } from "react-icons/fa6";

const Overview = () => {
    return (
        <Flex
            justifyContent="center"
            direction="column"
            flex="1"
            position="relative"
        >
            <Trapezium />
            <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems="center"
                justifyContent={{ base: "" }}
                my="8"
                ml="8"
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
                        I'm a Nigerian-based Web Designer & Front‑end Developer
                        focused on crafting clean & user‑facing web solutions. I
                        am passionate about building excellent software that
                        improves the lives of those around me.
                    </Text>

                    <CtaButton
                        icon={FaUser}
                        textTransform="uppercase"
                        color="gray.100"
                        variant="solid"
                        p="5"
                        borderRadius="full"
                    >
                        More About me
                    </CtaButton>
                </Stack>
            </Flex>
        </Flex>
    );
};

export default Overview;
