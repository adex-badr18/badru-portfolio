import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import PageTitle from "../components/pageTitle";
import ProjectCard from "../components/portfolio/projectCard";
import quizzicalImg from "../assets/quizzical-img.png";
import { projectsData } from "../data";

const Portfolio = () => {
    return (
        <Box w="full" minH="100vh" pb={16}>
            <PageTitle bgText="Projects" primaryTitle="My" coloredTitle="Portfolio" />

            <SimpleGrid columns={{base: 1, sm: 2, md: 3}} gap={{base: 4, md: 6}} px={16}>
                {
                    projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))    
                }
            </SimpleGrid>
        </Box>
    );
};

export default Portfolio;
