import React from "react";
import { Flex, Text, Icon, Box } from "@chakra-ui/react";

const ContactInfo = ({ contactObj }) => {
    const { title, icon, contact } = contactObj;
    return (
        <Flex gap={6} alignItems="center">
            <Icon as={icon} color="#FFB400" fontSize="4xl" />

            <Box>
                <Text textTransform="uppercase" opacity="0.7">
                    {title}
                </Text>
                <Text fontWeight="semibold">{contact}</Text>
            </Box>
        </Flex>
    );
};

export default ContactInfo;
