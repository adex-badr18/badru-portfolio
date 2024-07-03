import React from "react";
import { Box } from "@chakra-ui/react";

const Trapezium = () => {
    return (
        <Box 
            position="absolute"
            top="0"
            left="0"
            width="28%"
            height='100%'
            bg='transparent'
            zIndex='0'
            hideBelow='lg'
            _before={{
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                bg: '#ffb400',
                clipPath: 'polygon(0% 0%, 50% 0%, 100% 100%, 0% 100%)'
            }}
        />
    );
};

export default Trapezium;
