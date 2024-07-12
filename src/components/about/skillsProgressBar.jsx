import React from "react";
import {
    CircularProgress,
    CircularProgressLabel,
    VStack,
    Heading
} from "@chakra-ui/react";

const SkillsProgressBar = ({ skill, progressValue }) => {
    return (
        <VStack>
            <CircularProgress value={progressValue} size="135px" thickness="6" color="#FFB400" trackColor="#252525">
                <CircularProgressLabel fontSize="2xl" p={6} fontWeight="medium">{`${progressValue}%`}</CircularProgressLabel>
            </CircularProgress>

            <Heading as="h6" fontSize="lg" fontWeight="normal">{skill}</Heading>
        </VStack>
    );
};

export default SkillsProgressBar;
