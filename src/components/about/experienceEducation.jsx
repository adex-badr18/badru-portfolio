import React from "react";
import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { eduExpData } from "../../data";
import ExperienceEducationItem from "./experienceEducationItem";

const ExperienceEducation = () => {
    return (
        <Flex direction="column" gap={{ base: 6, md: 10 }} px={20}>
            <Heading as="h3" fontSize="2xl" alignSelf="center">
                EXPERIENCE & EDUCATION
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
                {eduExpData.map((eduExp, index) => (
                    <ExperienceEducationItem
                        key={index}
                        icon={eduExp.icon}
                        title={eduExp.title}
                        dateRange={eduExp.date}
                        description={eduExp.desc}
                        institution={eduExp.institution}
                    />
                ))}
            </SimpleGrid>
        </Flex>
    );
};

export default ExperienceEducation;
