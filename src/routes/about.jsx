import React, {useRef} from "react";
import {
    Box,
    Flex,
    SimpleGrid,
    IconButton,
    useDisclosure
} from "@chakra-ui/react";
import PageTitle from "../components/pageTitle";
import BioData from "../components/about/bioData";
import AboutStatsCard from "../components/about/aboutStatsCard";
import { aboutStats } from "../data";
import Skills from "../components/about/skills";
import CustomDivider from "../components/about/customDivider";
import ExperienceEducation from "../components/about/experienceEducation";
import MobileNavDrawer from "../components/mobileNavDrawer";
import { FaBars } from "react-icons/fa6";

const About = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <Box w={{base: "100vw", lg: "92vw"}} minH="100vh" pb={16} position="relative">
            <PageTitle bgText="Resume" primaryTitle="About" coloredTitle="Me" />

            <IconButton
                hideFrom="lg"
                hideBelow="md"
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

            <Flex direction={{ base: "column", lg: "row" }} px={{base: 8, md: 16}} pt={{base: 32, md: 0}} gap={14}>
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

            <MobileNavDrawer
                onClose={onClose}
                isOpen={isOpen}
                btnRef={btnRef}
            />
        </Box>
    );
};

export default About;
