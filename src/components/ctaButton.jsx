import React from "react";
import { Button, Icon } from "@chakra-ui/react";

const CtaButton = ({ children, icon, ...rest }) => {
    return (
        <Button
        role="group"
            rightIcon={
                <Icon
                    as={icon}
                    ml="2"
                    display='none'
                    _groupHover={{ display: "block" }}
                />
            }
            overflow="hidden"
            bg='#daa520'
            _hover={{bg: 'yellow.600'}}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default CtaButton;
