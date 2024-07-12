import React from "react";
import {
    Box,
    Stack,
    Flex,
    SimpleGrid,
    Divider,
    Center,
    StackDivider,
} from "@chakra-ui/react";
import PageTitle from "../components/pageTitle";
import BioData from "../components/about/bioData";
import AboutStatsCard from "../components/about/aboutStatsCard";
import { aboutStats } from "../data";

const About = () => {
    return (
        <Box w="full" minH="100vh" pb={6}>
            <PageTitle bgText="Resume" primaryTitle="About" coloredTitle="Me" />

            <Flex direction={{ base: "column", lg: "row" }} px={10} gap={14}>
                <BioData />
                <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 4, md: 6 }}
                >
                    {aboutStats.map((stat, index) => (
                        <AboutStatsCard
                            key={index}
                            title={stat.title}
                            value={stat.value}
                        />
                    ))}
                </SimpleGrid>
            </Flex>

            <Center py={16}>
                <Divider borderColor="#777" w={96} />
            </Center>
        </Box>
    );
};

export default About;
