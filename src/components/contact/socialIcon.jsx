import React from "react";
import { Flex, Link, Icon } from "@chakra-ui/react";

const SocialIcon = ({ linkTo, icon }) => {
    return (
        <Link
            href={linkTo}
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={3}
            borderRadius="full"
            bg="#2b2a2a"
            color="white"
            _hover={{bg: "#FFB400"}}
            isExternal
        >
            <Icon as={icon} />
        </Link>
    );
};

export default SocialIcon;
