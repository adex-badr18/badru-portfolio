import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

const PageTitle = ({ bgText, primaryTitle, coloredTitle }) => {
    return (
        <Box
            w="full"
            position="relative"
            py={20}
            my={0}
            mx="auto"
            textAlign="center"
        >
            <Heading
                fontSize="56px"
                fontWeight="black"
                lineHeight={1.2}
                color="white"
                textTransform="uppercase"
                m="0"
                textAlign="center"
                display="flex"
                justifyContent="center"
                gap={4}
            >
                {primaryTitle} {" "}
                <Text color="#ffb400">{coloredTitle}</Text>
            </Heading>
            <Heading
                fontSize="110px"
                fontWeight="extrabold"
                textTransform="uppercase"
                position="absolute"
                left={0}
                right={0}
                top="50%"
                transform="translateY(-50%)"
                letterSpacing="10px"
                lineHeight={0.7}
                color="rgba(255, 255, 255, 0.07)"
            >
                {bgText}
            </Heading>
        </Box>
    );
};

export default PageTitle;
