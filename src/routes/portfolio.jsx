import React, { useRef } from "react";
import {
    Box,
    SimpleGrid,
    Flex,
    IconButton,
    Heading,
    useDisclosure,
} from "@chakra-ui/react";
import PageTitle from "../components/pageTitle";
import ProjectCard from "../components/portfolio/projectCard";
import MobileNavDrawer from "../components/mobileNavDrawer";
import { projectsData } from "../data";
import { FaBars } from "react-icons/fa6";

const Portfolio = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <Box w={{ base: "100vw", lg: "92vw" }} minH="100vh" pb={16}>
            <PageTitle
                bgText="Projects"
                primaryTitle="My"
                coloredTitle="Portfolio"
            />

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

            <Flex
                direction="column"
                gap={10}
                px={{ base: 8, md: 16 }}
                pt={{ base: 32, md: 0 }}
            >
                <Heading
                    as="h3"
                    fontSize={{ base: "xl", md: "2xl" }}
                    textAlign={{ base: "center", md: "left" }}
                >
                    PROJECTS
                </Heading>
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3 }}
                    gap={{ base: 4, md: 6 }}
                >
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </SimpleGrid>
            </Flex>

            <MobileNavDrawer
                onClose={onClose}
                isOpen={isOpen}
                btnRef={btnRef}
            />
        </Box>
    );
};

export default Portfolio;
