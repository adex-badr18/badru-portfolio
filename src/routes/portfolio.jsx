import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import PageTitle from "../components/pageTitle";
import ProjectCard from "../components/portfolio/projectCard";
import quizzicalImg from "../assets/quizzical-img.png";

const Portfolio = () => {
    return (
        <Box w="full" minH="100vh" pb={16}>
            <PageTitle bgText="Projects" primaryTitle="My" coloredTitle="Portfolio" />

            <SimpleGrid columns={{base: 1, sm: 2, md: 3}} gap={{base: 4, md: 6}} px={16}>
                <ProjectCard imgSrc={quizzicalImg} title="Quizzical App" />
                <ProjectCard imgSrc={quizzicalImg} title="Quizzical App" />
                <ProjectCard imgSrc={quizzicalImg} title="Quizzical App" />
                <ProjectCard imgSrc={quizzicalImg} title="Quizzical App" />
                <ProjectCard imgSrc={quizzicalImg} title="Quizzical App" />
                <ProjectCard imgSrc={quizzicalImg} title="Quizzical App" />
            </SimpleGrid>
        </Box>
    );
};

export default Portfolio;
