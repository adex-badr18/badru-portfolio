import React from "react";
import {
    Box,
    Stack,
    Flex,
    SimpleGrid,
    Image,
    Divider,
    Center,
} from "@chakra-ui/react";
import PageTitle from "../components/pageTitle";
import BioData from "../components/about/bioData";
import AboutStatsCard from "../components/about/aboutStatsCard";
import { aboutStats } from "../data";
import Skills from "../components/about/skills";
import CustomDivider from "../components/about/customDivider";
import ExperienceEducation from "../components/about/experienceEducation";

const About = () => {
    return (
        <Box w="full" minH="100vh" pb={16}>
            <PageTitle bgText="Resume" primaryTitle="About" coloredTitle="Me" />

            <Flex direction={{ base: "column", lg: "row" }} px={10} gap={14}>
                <Image
                    borderRadius="full"
                    boxSize="200px"
                    p="2px"
                    src="/badru-blackbg2.png"
                    alt="Badrudeen Abdul-hameed"
                    hideFrom="md"
                    border="4px"
                    borderColor="#2f2f2f"
                    alignSelf="center"
                />
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

            <CustomDivider />
            <Skills />
            <CustomDivider />
            <ExperienceEducation />
        </Box>
    );
};

export default About;
