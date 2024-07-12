import React from "react";
import { Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import SkillsProgressBar from "./skillsProgressBar";
import { skillsData } from "../../data";

const Skills = () => {
    return (
        <Flex direction="column" gap={{base: 6, md: 10}} px={10}>
            <Heading as="h3" fontSize="2xl" alignSelf="center">MY SKILLS</Heading>

            <SimpleGrid
                columns={{ base: 2, md: 4 }}
                spacingY={{ base: 6, md: 10 }}
                justifyContent="space-between"
            >
                {skillsData.map((skillItem, index) => (
                    <SkillsProgressBar
                        key={index}
                        skill={skillItem.title}
                        progressValue={skillItem.progressValue}
                    />
                ))}
            </SimpleGrid>
        </Flex>
    );
};

export default Skills;
