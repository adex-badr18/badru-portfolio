import React from "react";
import { Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CtaButton = ({ children, icon, to, ...rest }) => {
    return (
        <Button
            as={Link}
            to={to}
            role="group"
            rightIcon={
                <Icon
                    as={icon}
                    ml={1}
                    display="none"
                    _groupHover={{ display: "block" }}
                />
            }
            overflow="hidden"
            bg="#ffb400"
            px={10}
            py={6}
            w={52}
            textTransform="uppercase"
            color="#111"
            fontWeight="bold"
            variant="solid"
            shadow="md"
            borderRadius="full"
            _hover={{ bg: "yellow.400" }}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default CtaButton;
