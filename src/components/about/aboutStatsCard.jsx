import React from "react";
import { Box, Flex, Heading, Text, Highlight } from "@chakra-ui/react";

const AboutStatsCard = ({ title, value }) => {
    return (
        <Box
            py={6}
            px={8}
            borderRadius="md"
            border="1px"
            borderColor="#252525"
        >
            <Flex color="#FFB400" fontWeight="bold" mb={2}>
                <Heading as="h3" fontSize="5xl">
                    {value}
                </Heading>
                <Heading as="h3" fontSize="3xl">
                    +
                </Heading>
            </Flex>

            <Flex gap={4}>
                <Box w={10} h="1px" bg="#777" mt={2}></Box>
                <Text textTransform="uppercase" fontWeight="medium">{title}</Text>
            </Flex>
        </Box>
    );
};

export default AboutStatsCard;
