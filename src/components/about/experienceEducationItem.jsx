import React from "react";
import {
    Flex,
    Text,
    Heading,
    Highlight,
    Icon,
    Divider,
    Box,
    VStack,
} from "@chakra-ui/react";

const ExperienceEducationItem = ({
    icon,
    dateRange,
    title,
    description,
    institution,
}) => {
    return (
        <Flex gap={5}>
            <VStack>
                <Flex p={4} justifyContent="center" alignItems="center" bg="#FFB400" w="40px" h="40px" borderRadius="full" zIndex="1">
                    <Icon as={icon} color="white" fontSize="lg" />
                </Flex>
                <Divider orientation="vertical" borderColor="#777" mt="-9px" />
            </VStack>

            <Flex direction="column" gap={3}>
                <Box py={1} px={3} bg="#252525" borderRadius="full" alignSelf="start">
                    <Text fontSize="sm" fontWeight="medium" opacity="0.7">{dateRange}</Text>
                </Box>

                <Flex gap={3} alignItems="center">
                    <Heading as="h5" fontSize="lg" fontWeight="medium" textTransform="uppercase">{title}</Heading>
                    <Box w={4} h="1.5px" bg="white" opacity="0.7" />
                    <Heading as="h6" fontSize="md" textTransform="uppercase" color="white" opacity="0.7">{institution}</Heading>
                </Flex>

                <Text fontSize="14px">{description}</Text>
            </Flex>
        </Flex>
    );
};

export default ExperienceEducationItem;
